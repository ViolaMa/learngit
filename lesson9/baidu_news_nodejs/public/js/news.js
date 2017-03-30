/**
 * Created by admin on 2017/1/18.
 */
$(function () {
    refreshNews('推荐');

    $("nav a").click(function(e){
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    })
})

function refreshNews(type) {
    var _lists = $("article ul.news-lists");
    _lists.empty();
    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data:{ newstype:type},
        success: function (data) {
            data.forEach(function (item,index,array) {
                var _list = $("<li></li>").addClass("news-list").prependTo(_lists);
                var _newImg = $("<div></div>").addClass("newsimg").appendTo(_list);
                var _img = $("<img>").attr("src",item.newsimg).appendTo(_newImg);
                var _newContent = $("<div></div>").addClass("newscontent").appendTo(_list);
                var _h1 = $("<h1></h1>").html(item.newstitle).appendTo(_newContent);
                var _p = $("<p></p>");
                var time = moment(item.addtime).format("YYYY-MM-DD");
                var _newstime = $("<span></span>").addClass("newstime").html(time);
                var _newssrc = $("<span></span>").addClass("newssrc").html(item.newssrc);
                _p.append(_h1,_newstime,_newssrc);
                _newContent.append(_p);
            })

        }
    })

}