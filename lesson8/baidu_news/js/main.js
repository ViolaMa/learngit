/**
 * Created by admin on 2017/1/17.
 */
$(function () {
    var deviceWidth = $("body").width();
    $("nav ul li").each(function () {
        if ($(this).find("a").html().split("").length > 2) {
            $(this).width(deviceWidth / 3 + "px");
        } else {
            $(this).width(deviceWidth / 6 + "px");
        }
    });

    var bannerLi = $(".banner ul li");
    var imgWidth = bannerLi.width();
    var len = bannerLi.length;
    $(".banner ul").width(imgWidth * len +"px");
    $(".banner-content").find("img").width(imgWidth);
    var timer = null,n = 1;
        timer = setInterval(function () {
            if(n>=3){
                n=0;
            }
            else {
                $(".banner ul").animate({
                    left: -imgWidth * n + "px"
                },1000);
                $(".banner ol li").removeClass("active");
                $(".banner ol li").eq(n).addClass("active");
                n++;
            }
        }, 4000);
})

