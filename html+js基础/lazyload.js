var kano_lazyload = function() {
    window.addEventListener("DOMContentLoaded", function(event) {
        rplace();
    });
    window.addEventListener("load", function(event) {
        lazyload({
            effect: 'fadeIn'
        });
    });
    var rplace = function() {
        $("img").each(function() {
            if (!($(this).hasClass('lazyload'))) {
                $(this).attr("data-src", $(this).attr("src"));
                $(this).addClass("lazyload");
                $(this).attr("src", "/wp-content/themes/kratos-pjax/static/images/loading.gif")
            }
        });
        $("img").lazyload({
            effect: 'fadeIn'
        });
    }
    rplace();
    lazyload({
        effect: 'fadeIn'
    });
}