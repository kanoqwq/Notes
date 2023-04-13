$(function() {
    var toggle = function() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').stop().fadeIn(40);
        } else {
            $('.fixedtool').stop().fadeOut(40)
        }
    }

    //互斥锁
    var flag = true;
    toggle();
    //显示隐藏电梯导航
    var toolTop = $('.recommend').offset().top;
    $(window).scroll(function() {
        toggle();
        if (flag) {
            //滚动同步高亮
            $('.floor .w').each(function() {
                //被卷去的头部大于等于内容区域里面每个模块的top
                if ($(document).scrollTop() >= $(this).offset().top - 100) {
                    $('.fixedtool li').removeClass('current');
                    $('.fixedtool li').eq($(this).index()).addClass('current');
                }
            })
        }
    });
    //点击电梯导航页面可以滚动到相应内容区域
    $('.fixedtool li').click(function() {
        flag = false;
        //获取点击的li的索引号
        var index = $(this).index();
        //移动到相应索引号的位置
        var pos = $('.floor .w').eq(index).offset().top;
        $('body ,html').stop().animate({
                scrollTop: pos - 100
            }, function() {
                flag = true;
            }) //回调，动画结束后解锁
        $('.fixedtool li').removeClass('current');
        $(this).addClass('current');
    });
})