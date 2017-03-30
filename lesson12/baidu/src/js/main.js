window.onload = function () {
    /*=====页面顶部操作====*/
    var weatherLink = $("weatherLink"),
        weatherWrap = $("weatherWrap"),
        changeSkin = $("changeSkin"),
        changeSkinWrap = $("changeSkinWrap"),
        closeChangeSkin = $("closeChangeSkin");
    var weatherWrapStatus = 0;

    /*显示天气模块*/
    weatherLink.onmouseover = function () {
        if (weatherWrapStatus == 0) {
            showTarget(weatherWrap);
            weatherWrapStatus = 1;
        }
    }
    /*隐藏天气*/
    weatherWrap.onmouseout = function () {
        hideTarget(weatherWrap);
    }

    /*显示换肤*/
    var speed = 10, timer = null;
    clearInterval(timer);
    changeSkin.onclick = function () {
        showTarget(changeSkinWrap);
        clearInterval(timer);
        timer = setInterval(function () {
            if (changeSkinWrap.offsetTop < 0) {
                changeSkinWrap.style.top = changeSkinWrap.offsetTop + speed + "px";
            } else {
                changeSkinWrap.style.top = 0 + "px";
            }
        }, 10);
        return false;
    }

    /*隐藏换肤*/
    closeChangeSkin.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            if (changeSkinWrap.offsetTop > -310) {
                changeSkinWrap.style.top = changeSkinWrap.offsetTop - speed + "px";
            } else {
                changeSkinWrap.style.top = "-310px";
            }
        }, 10);
        /*hideTarget(changeSkinWrap);*/
        return false;
    }
    /*----右侧更多栏目----*/
    var showMore = $("showMore"),
        moreSub = $("moreSub");

    /*显示隐藏右侧更多*/
    showMore.onmouseover = function () {
        hideTarget(showMore);
        showTarget(moreSub);
    }
    showMore.onmouseout = function () {
        hideTarget(moreSub);
        showTarget(showMore);
    }
    moreSub.onmouseover = function () {
        hideTarget(showMore);
        showTarget(moreSub);
    }
    moreSub.onmouseout = function (e) {
        e.stopPropagation();
        hideTarget(moreSub);
        showTarget(showMore);
    }

    /*===登录框面板相关===*/
    var username = $("username"),
        loginPopup = $("loginPopup"),
        loginContainer = $("loginContainer"),
        closeBtn = $("closeBtn");
    var dWidth = document.documentElement.clientWidth, dHeight = document.documentElement.clientHeight;
    /*显示login面板*/
    username.onclick = function () {
        var popWidth = loginContainer.offsetWidth,
            popHeight = loginContainer.offsetHeight; //获取不到宽度和高度，取到的值为0
        console.log(loginContainer, dWidth, popWidth);
        var left = (dWidth - 390) / 2, top = ( dHeight - 450) / 2;
        loginContainer.style.left = left + "px",
            loginContainer.style.top = top + "px";
        showTarget(loginPopup);
        return false;
    }

    var usernameInput = $("usernameInput"),
        passwordInput = $("passwordInput"),
        comfirmInput = $("comfirmInput");
    usernameInput.onfocus = passwordInput.onfocus = comfirmInput.onfocus = function () {
        this.parentNode.parentNode.className = "form_wrap active";
    }
    usernameInput.onblur = passwordInput.onblur = comfirmInput.onblur = function () {
        this.parentNode.parentNode.className = "form_wrap";
    }

    var usernameInput = $("usernameInput"),
        passwordInput = $("passwordInput"),
        comfirmInput = $("comfirmInput"),
        loginInfo = $("loginInfo"),
        loginBtn = $("loginBtn");

    var navWrap = $("navWrap"),
        centerContainer = $("centerContainer");

    loginBtn.onclick = function () {
        if (usernameInput.value == "") {
            loginInfo.innerHTML = "请输入用户名";
        } else if (passwordInput.value == "") {
            loginInfo.innerHTML = "请输入密码";
        } else if (comfirmInput == "") {
            loginInfo.innerHTML = "请输入验证码";
        } else if (usernameInput.value == "admin" && passwordInput.value == "123456" && comfirmInput.value == "百度") {
            hideTarget(loginPopup);
            username.innerHTML = "admin";
            navWrap.className = "nav_wrap has_logged_in";
            centerContainer.className = "center_main has_logged_in";
        } else {
            return;
        }
    }

    /*关闭登录框*/
    closeBtn.onclick = function () {
        hideTarget(loginPopup);
        return false;
    }

    /*显示和隐藏图片搜索部分*/
    var imageSearch = $("imageSearch"),
        imageSearchWrap = $("imageSearchWrap"),
        closeImageSearch = $("closeImageSearch");
    imageSearch.onclick = function () {
        showTarget(imageSearchWrap);
    }
    closeImageSearch.onclick = function () {
        hideTarget(imageSearchWrap);
        return false;
    }

    /*个人定制部分切换*/
    var tabContent = $("tabContent");
    var tabDivs = getTarByClassName(tabContent, "tab_div");

    for (var i = 0; i < tabDivs.length; i++) {
        tabDivs[i].onmouseover = function () {
            for (var i = 0; i < tabDivs.length; i++) {
                tabDivs[i].className = "tab_div";
            }
            this.className = "tab_div active";
        }
        tabDivs[i].onclick = function () {

        }
    }

    /*定义一个便于通过id获取元素的函数*/
    function $(para) {
        return document.getElementById(para);
    }

    /*通过class名选择元素*/
    function getTarByClassName(parentNode, className) {
        var all = parentNode.getElementsByTagName("*"), result = "";
        for (var i = 0; i < all.length; i++) {
            var aClass = all[i].getAttribute("class");
            if (aClass !== null && aClass.indexOf(className) != -1) {
                result += all[i];
            }
        }
        return result;
    }
}

function showTarget(target) {
    target.style.display = "block";
}

function hideTarget(target) {
    target.style.display = "none";
}

function move() {

}
