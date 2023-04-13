$('#kratos-header-section').css('transition', 'all 0.5s');
$(document).on("mousewheel DOMMouseScroll", function(event) {

    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
        (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1)); // firefox
    if (delta > 0) {
        // 向上滚
        console.log("up+++++");
        $('#kratos-header-section').css('top', '0px');
    } else if (delta < 0) {
        // 向下滚
        console.log("down+++++");
        $('#kratos-header-section').css('top', '-80px');
    }
});
//以下方法会有很严重的性能问题
$('#kratos-header-section').css('transition', 'all 0.5s');
$(window).scroll(function() {
    let scroll_kano = $(window).scrollTop();
    $(window).scroll(function() {
        $(window).scrollTop() < scroll_kano ? $('#kratos-header-section').css('top', '0px') : $('#kratos-header-section').css('top', '-80px');
        // console.log($(window).scrollTop() - scroll_kano);
    })
})