document.getElementById("kano-mute-btn").addEventListener("click", function() {
    $("#kano-BV").get(0).volume = 0.5;
    $("#kano-BV").get(0).play();
    document.getElementById("kano-BV").play();
    $("#kano-mute-btn i").removeClass();
    if ($("#kano-BV").prop('muted') == true) {
        $("#kano-mute-btn i").addClass("fa fa-volume-up");
        $("#kano-BV").prop('muted', false);
    } else {
        $("#kano-mute-btn i").addClass("fa fa-volume-off");
        $("#kano-BV").prop('muted', true);
    }
});

$("document").ready(function() {
    //滚动到文章区域
    document.querySelector(".desc").addEventListener("click", function() {
        $("body,html").animate({
            scrollTop: $("#kratos-blog-post").offset().top - document.getElementById("kratos-header-section").offsetHeight
        }, 600, false);
    });
    //默认第一首
    $("#kano-BV").prop("src", "<?php echo  kratos_option('banner_video') ?>".split("|")[0]);
    // 随机视频
    var videoArr = "<?php echo  kratos_option('banner_video') ?>".split("|");
    var index = Math.floor(Math.random() * videoArr.length);
    $("#kano-BV").prop("src", videoArr[index]);
    //自动下一曲
    $("#kano-BV").on("timeupdate", function(e) {
        //检测是否播放完毕
        console.log(Math.floor(this.duration) - Math.floor(this.currentTime) + "s");
        if (Math.floor(this.currentTime) == Math.floor(this.duration)) {
            if (index === videoArr.length - 1) {
                index = 0;
            } else index++;
            $("#kano-BV").prop("src", videoArr[index]);
            console.log("切换下一曲~");
        }
    });
});
// 滚动到指定位置显示nav背景色
document.addEventListener("scroll", function() {
    if (document.querySelector(".kratos-start.kratos-hero-2").offsetHeight - (window.pageYOffset + document.getElementById("kratos-header-section").offsetHeight) <= 0) {
        document.getElementById("kratos-header-section").style.background = "rgba(40,42,44,.6)"
    } else {
        document.getElementById("kratos-header-section").style.background = "rgba(40,42,44,0)"
    }
});