$(function () {
    $("#leftMenu").find("a").each(function () {
        $(this).click(function () {
            var aLink = $(this).attr("href");
            $("#pageContent").load(aLink);
            return false;
        })
    });
//进入新闻列表页，刷新新闻列表
    var $newsTable = $("#newsTable tbody");
    refreshNews();

    //添加新闻
    $("#btnSubmit").click(function (e) {
        e.preventDefault();
        //输入判断
        if ($("#newsTitle").val() === "" || $("#newsImage").val() === "" || $("#newsTime").val() === "" || $("#newsSrc").val() === "") {
            if ($("#newsTitle").val() === "") {
                $("#newsTitle").parent().addClass("has-error");
            } else {
                $("#newsTitle").parent().removeClass("has-error");
            }
            if ($("#newsImage").val() === "") {
                $("#newsImage").parent().addClass("has-error");
            } else {
                $("#newsImage").parent().removeClass("has-error");
            }
            if ($("#newsTime").val() === "") {
                $("#newsTime").parent().addClass("has-error");
            } else {
                $("#newsTime").parent().removeClass("has-error");
            }
            if ($("#newsSrc").val() === "") {
                $("#newsSrc").parent().addClass("has-error");
            } else {
                $("#newsSrc").parent().removeClass("has-error");
            }
        } else {
            var jsonNews = {
                newstitle: $('#newsTitle').val(),
                newstype: $('#newsType').val(),
                newsimg: $('#newsImage').val(),
                newssrc: $('#newsSrc').val(),
                addtime: $('#newsTime').val()
            }
            $.ajax({
                url: '../server/insert.php',
                type: 'post',
                data: jsonNews,
                dataType: 'json',
                success: function (data) {
                    refreshNews();
                }
            })
        }
    })
    //删除新闻的功能
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function () {
        $("#deleteModal").modal('show');
        deleteId = $(this).parent().prevAll().eq(4).html();
    })
    $("#deleteModal #deleteConfirm").click(function () {
        if (deleteId) {
            $.ajax({
                url: '../server/delete.php',
                type: 'post',
                data: {newsid: deleteId},
                success: function (data) {
                    console.log("delete succeed");
                    refreshNews();
                    $("#deleteModal").modal('hide');
                }
            })
        }
    })

    //修改新闻的功能
    var updateId = null;
    $newsTable.on('click', '.btn-update', function () {
        $("#updateModal").modal('show');
        updateId = $(this).parent().prevAll().eq(4).html();
        $.ajax({
            url: '../server/currentNews.php',
            type: 'get',
            datatype: 'json',
            data: {newsid: updateId},
            success: function (data) {
                $("#updateNewsTitle").val(data[0].newstitle);
                $("#updateNewsType").val(data[0].newstype);
                $("#updateNewsImage").val(data[0].newsimg);
                $("#updateNewsSrc").val(data[0].newssrc);
                var utime = data[0].addtime.split(' ')[0];
                $("#updateNewsTime").val(utime);
            }
        })
    })
    $("#updateModal #updateConfirm").click(function (e) {
        $.ajax({
            url: '../server/update.php',
            type: 'post',
            data: {
                newsid: updateId,
                newstitle: $("#updateNewsTitle").val(),
                newstype: $("#updateNewsType").val(),
                newsimg: $("#updateNewsImage").val(),
                addtime: $("#updateNewsTime").val(),
                newssrc: $("#updateNewsSrc").val()
            },
            success: function (data) {
                $("#updateModal").modal('hide');
                refreshNews();
            }
        })
    })


    function refreshNews(type) {
        //empty table;
        $newsTable.empty();
        $.ajax({
            type: 'get',
            url: '../server/getnews.php',
            datatype: 'json',
            data: {newstype: type},
            success: function (data) {
                data.forEach(function (item, index, array) {
                    var $tdid = $("<td>").html(item.newsid);
                    var $tdtype = $("<td>").html(item.newstype);
                    var $tdtitle = $("<td>").html(item.newstitle);
                    var $tdimg = $("<td>").html(item.newsimg);
                    var $tdtime = $("<td>").html(item.addtime);
                    var $tdctrl = $("<td>");
                    var $btnupdate = $("<button>").addClass("btn btn-primary btn-xs btn-update").html("修改");
                    var $btndelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
                    $tdctrl.append($btnupdate, $btndelete);

                    var $tRow = $("<tr>");
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdtime, $tdctrl);
                    $newsTable.append($tRow);

                })
            },
            error: function () {
                console.log("error");
            }
        })
    }
});

