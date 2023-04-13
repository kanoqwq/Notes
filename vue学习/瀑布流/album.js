let albcfg = {
    url: 'https://pan.kanokano.cn/api/public/path',
    path: 'onedriveの盘/相册'
};
masonry_kano = function() {
    $('.photo_main_box').masonry({
        itemSelector: '.albumimg',
        gutter: 0,
        Horizontalorder: true,
        Originleft: true,
        Origintop: true,
        resize: true,
        isAnimated: true
    });
}

if (albcfg._is_rendered) {
    $('#photo_main_box').empty()
}
$.ajax({
    url: albcfg.url,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        path: albcfg.path
    }),
    success: function(res) {
        if (res.data.files) {
            $('#kratos-widget-area').hide();
            $('#main').removeClass();
            for (var i = res.data.files.length - 1; i >= 0; i--) {
                $('#photo_main_box').append(` <img src="/wp-content/themes/kratos-pjax/static/images/loading.gif" class="albumimg lazyload" data-src="${res.data.files[i].url}"> `);
            }
            $('#photo_main_box img').on('click', function(e) {
                layer.photos({
                    photos: {
                        "data": [{
                            "src": e.target.src,
                        }]
                    },
                    anim: 0,
                    shadeClose: true
                })
            })
        }
    }
}).then(function() {
    if (!albcfg._is_rendered) {
        $(document).ready(function() {
            setTimeout(() => {
                lazyload();
                $(".animate-box").click()
            }, 700);
            masonry_kano();
            setInterval(masonry_kano, 1000);
        });
    }
    albcfg._is_rendered = true;
})