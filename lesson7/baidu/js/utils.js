/**
 * Created by Administrator on 2016/12/13.
 */
$(function () {
    // 初始化，页面加载时隐藏右侧更多产品div，及登录框
    var loginPopup = $("#loginPopup"),
        login = $("#login"),
        toLogin = $("#toLogin");

    $(".more-div").hide();
    loginPopup.hide();

    //点击更多产品，显示“更多产品”div
    $(".show-more").hover(function () {
        $(this).parent("div.more").find(".more-div").toggle();
    })
    $(".more-div").hover(function () {//鼠标悬浮在“更多产品”的div上时，仍显示该div
        $(this).toggle();
    })

    $("#toLogin").click(function () {
        var winHeight = $(window).height(), winWidth = $(window).width(); //获取窗口的高度和宽度
        var loginTop = 0, loginLeft = 0;
        loginTop = (winHeight - login.height()) / 2;
        loginLeft = (winWidth - login.width()) / 2;
        if (loginTop < 50) {
            loginTop = 50 //限定登录框距窗口顶部的距离不小于50px
        }
        if (loginLeft < 100) {
            loginLeft = 100; //限定登录框距窗口左侧的距离不小于100px
        }
        login.css({"top": loginTop + "px", "left": loginLeft + "px"}); //设置登录框屏幕居中
        // loginPopup.show();
        popUp(loginPopup);
        return false;  //鼠标点击"登录"，显示弹窗后，会自动刷新一次，取消此刷新
    })

    $("#closeLogin").click(function () {
        closePop(loginPopup);
    })

    $("#loginBtn").click(function () {
        var username = $("#username").val(),
            password = $("#password").val();
        loginFunc(username, password);
        return false;
    });

    function loginFunc(username, password) {
        if (username == "admin" && password == "admin") {
            loginPopup.hide();
            toLogin.addClass("hidden");
            $("#usernameNav").removeClass("hidden").text(username);
        }
    }

    function popUp(target) {
        target.show();
    }

    function closePop(target) {
        target.hide();
    }
})