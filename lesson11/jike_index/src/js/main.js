window.onload = function () {
    var open = document.getElementById("open");
    var searchWarp = document.getElementById("searchWarp");
    var closeBtn = document.getElementById("closeBtn");

    /*打开关闭搜索框*/
    open.onclick = function () {
        searchWarp.style.display = "block";
    }
    closeBtn.onclick = function () {
        searchWarp.style.display = "none";
    }

    /*定义banner有关的变量*/
    var bannerDiv = document.getElementById("js-banner"),
        bannerUl = document.getElementById("bannerUl"),
        bannerUlLi = bannerUl.getElementsByTagName("li"),
        bannerOl = document.getElementById("bannerOl"),
        bannerOlLi = bannerOl.getElementsByTagName("li"),
        cur = 0,
        len = bannerUlLi.length,
        timer = null;

    slide();
    bannerDiv.onmouseover = function () {
        clearInterval(timer);
    }
    bannerDiv.onmouseout = function () {
        slide();
    };

    var leftArrow = document.getElementById("left-arrow"),
        rightArrow = document.getElementById("right-arrow");

    leftArrow.onclick = function () {
        if (cur == 0) {
            cur = len - 1;
        }
        else {
            cur--;
        }
        picSlide(cur);
    }

    rightArrow.onclick = function () {
        if (cur >= len - 1) {
            cur = 0;
        }
        else {
            cur++;
        }
        picSlide(cur);
    }

    /*banner 切换函数*/
    function picSlide(n) {
        clearInterval(timer);
        for (var i = 0; i < len; i++) {
            bannerUlLi[i].style.display = "none";
            bannerOlLi[i].className = "";
        }
        bannerUlLi[n].style.display = "block";
        bannerOlLi[n].className = "active";
    }

    /*banner自动循环*/
    function slide() {
        timer = setInterval(function () {
            if (cur >= len - 1) {
                cur = 0;
            }
            else {
                cur++;
            }
            picSlide(cur);
        }, 2000);
    }
}