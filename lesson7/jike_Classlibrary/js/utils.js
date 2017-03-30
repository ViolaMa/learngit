$(function () {
    // 页面加载时，菜单的下拉部分都隐藏
    $(".sub-list-warp").hide();
    $(".menu-list-sub").hide();

    // 鼠标悬浮，顶部导航下拉菜单显示
    $("#topNav ul li").mouseover(function () {
        $(this).find("div.sub-list-warp").show();
    });

    // 鼠标悬浮，显示左侧类目详情
    $(".menu ul li").find("a").hover(function () {
        $(this).toggleClass("on menu-list-on");
        $(this).parent("div").find("div.menu-list-sub").toggle();
    })
})