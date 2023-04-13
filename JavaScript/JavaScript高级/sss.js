//自动替换
$('.editormd-preview-container').find('.emoji').each(function(index, val) {
    if ($(val).prop('alt') == ':kano-free-2:') {
        var regstr = ':kano-free-2:'.replace(/:/g, '');
        $(val).prop('src', 'https://kanokano.cn/wp-content/themes/kratos-pjax/static/images/smilies/' + regstr + '.png');
    }
});

//去掉each，使用属性选择器，提升速度
$('.editormd-preview-container').find('.emoji[alt=":meng:"]').prop('src', 'https://kanokano.cn/wp-content/themes/kratos-pjax/static/images/smilies/' + ':meng:'.replace(/:/g, '') + '.png');

//去掉find，直接使用属性选择器
$('.editormd-preview-container .emoji[alt=":meng:"]').prop('src', 'https://kanokano.cn/wp-content/themes/kratos-pjax/static/images/smilies/' + ':meng:'.replace(/:/g, '') + '.png')

//封装为函数

function replace_smiles_MD(smiles) {
    $(`.editormd-preview-container .emoji[alt="${smiles}"]`).prop("src", "https://kanokano.cn/wp-content/themes/kratos-pjax/static/images/smilies/" + smiles.replace(/:/g, "") + ".png")
}

//自动替换
$('.editormd-preview-container .emoji').each(function(index, val) {
    if ($(val).prop('alt') == ':kano-free-2:') {
        var regstr = ':kano-free-2:'.replace(/:/g, '');
        $(val).prop('src', 'https://kanokano.cn/wp-content/themes/kratos-pjax/static/images/smilies/' + regstr + '.png');
    }
});


//回调地狱
setTimeout(() => {
    console.log(1111);
    setTimeout(() => {
        console.log(2222);
        setTimeout(() => {
            console.log(3333);
        }, 3000)
    }, 2000)
}, 1000)




function one() {
    setTimeout(() => {
        console.log(111);
        //自动向后遍历
        iterator.next();
    }, 1000);
}

function two() {
    setTimeout(() => {
        console.log(222);
        //自动向后遍历
        iterator.next();
    }, 1000);
}

function three() {
    setTimeout(() => {
        console.log(333);
        //自动向后遍历
        iterator.next();
    }, 1000);
}

//生成器函数
function* gen() {
    yield one();
    yield two();
    yield three();
}

//调用生成器函数
let iterator = gen();
//触发遍历
iterator.next();


function scrollToTitle(ele) {
    if (ele) {
        let windowHeight = document.documentElement.clientHeight;
        let titleOffset = ele.offsetParent.offsetTop;
        window.scroll(0, titleOffset + windowHeight);
    } else {
        log('找不到该元素,无法滚动');
    }
}


$('.toc-list a').each(function() {
    var str = $(this).prop("href");
    var index = $(this).prop("href").indexOf('#') + 1;
    $(this).prop('href', 'javascript:scrollToTitle("document.getElementById(' + str.indexOf(index) + ');')
})


$('article h3').each(function() {
    indexTitle.push({
        element: $(this),
        value: $(this).html(),
        subTitle: $('article h4').each(function() {
            return {
                element: $(this),
                value: $(this).html(),
                subTitle: null
            }
        })
    })
})



$('.kratos-post-content h1, .kratos-post-content h2, .kratos-post-content h3,.kratos-post-content h4,.kratos-post-content h5,.kratos-post-content h6').each(function() {
    indexTitle.push(
        $(this).html()
    )
})