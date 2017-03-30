$(function () {
//进入新闻列表页，刷新新闻列表
    var $newsTable = $("#newsTable tbody");
    refreshNews();

    //添加新闻
    $("#btnSubmit").click(function (e) {
        e.preventDefault();
        var newsTitleInput = $("#newsTitle"),
            newsTypeSelect = $("#newsType"),
            newsImgInput = $("#newsImage"),
            newsTimeInput = $("#newsTime"),
            newsSrcInput = $("#newsSrc");
        //输入判断
        if (newsTitleInput.val() === "" || newsImgInput.val() === "" || newsTimeInput.val() === "" || newsSrcInput.val() === "") {
            if (newsTitleInput.val() === "") {
                newsTitleInput.parent().addClass("has-error");
            } else {
                newsTitleInput.parent().removeClass("has-error");
            }
            if (newsImgInput.val() === "") {
                newsImgInput.parent().addClass("has-error");
            } else {
                newsImgInput.parent().removeClass("has-error");
            }
            if (newsTimeInput.val() === "") {
                newsTimeInput.parent().addClass("has-error");
            } else {
                newsTimeInput.parent().removeClass("has-error");
            }
            if (newsSrcInput.val() === "") {
                newsSrcInput.parent().addClass("has-error");
            } else {
                newsSrcInput.parent().removeClass("has-error");
            }
        } else {
            var jsonNews = {
                newstitle: newsTitleInput.val(),
                newstype: newsTypeSelect.val(),
                newsimg: newsImgInput.val(),
                newssrc: newsSrcInput.val(),
                addtime: newsTimeInput.val()
            }
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                dataType: 'json',
                success: function (data) {
                    refreshNews();
                    newsTitleInput.val(""),
                        newsTypeSelect.val(""),
                        newsImgInput.val(""),
                        newsTimeInput.val(""),
                        newsSrcInput.val("");
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
                url: '/admin/delete',
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
            url: '/admin/currentNews',
            type: 'get',
            datatype: 'json',
            data: {newsid: updateId},
            success: function (data) {
                $("#updateNewsTitle").val(data[0].newstitle);
                $("#updateNewsType").val(data[0].newstype);
                $("#updateNewsImage").val(data[0].newsimg);
                $("#updateNewsSrc").val(data[0].newssrc);
                var utime = data[0].addtime.split('T')[0];
                $("#updateNewsTime").val(utime);
            }
        })
    });

    $("#updateModal #updateConfirm").click(function (e) {
        $.ajax({
            url: '/admin/update',
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
    });


    function refreshNews(type) {
        //empty table;
        $newsTable.empty();
        $.ajax({
            type: 'get',
            url: '/admin/getnews',
            datatype: 'json',
            data: {newstype: type},
            success: function (data) {
                data.forEach(function (item, index, array) {
                    var $tdid = $("<td>").html(item.newsid);
                    var $tdtype = $("<td>").html(item.newstype);
                    var $tdtitle = $("<td>").html(item.newstitle);
                    var $tdimg = $("<td>").html(item.newsimg);
                    var time = moment(item.addtime).format("YYYY-MM-DD");
                    var $tdtime = $("<td>").html(time);
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

