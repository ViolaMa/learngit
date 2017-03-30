/**
 * Created by Administrator on 2016/11/29.
 */

$(function () {
    $(window).on('load', function () {
        imgLoaction();
        var dataImg = {"data": [{"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "4.jpg"}]};
        window.onscroll = function () {
            if (scrollside()) {
                $.each(dataImg.data, function (index, value) {
                    //console.log(value);
                    var box = $("<div>").addClass("box").appendTo("#container");
                    var content = $("<div>").addClass("content").appendTo(box);
                    //console.log("images/" + $(value).attr("src"));
                    var img = $("<img>").attr("src", "./images/" + $(value).attr("src")).appendTo(content);
                });
                imgLoaction();
            }
        }
    });
});

function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width(); //选修课程视频里面使用的width()，为什么获取高度用的是width()；如果改成height()，一滚动鼠标就会加载很多；用width()就是正常加载的。
    //console.log($(document).height());
    // $(document).height()获取到的值比较大，在鼠标滚动调用时会一直执行到lastboxHeight > scrollHeight + documentHeight为止。但是我觉得这也不能成为把height()改为width()的理由。
    console.log(documentHeight);
    var scrollHeight = $(window).scrollTop();
    // console.log(scrollHeight);
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}
function imgLoaction() {
    var box = $(".box");
    var boxWidth = box.eq(0).width(); //获取图片宽度
    var num = Math.floor($(window).width() / boxWidth);  //第一行的个数
    var boxArr = [];//定义数组，存储图片高度
    box.each(function (index, value) { //遍历图片数组
        //console.log(index + '--' + value);
        var boxHeight = box.eq(index).height();
        //console.log(boxHeight);
        if (index < num) { //
            boxArr[index] = boxHeight;
        }
        else {
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight, boxArr); //查找
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }
    })
}