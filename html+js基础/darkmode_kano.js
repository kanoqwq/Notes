//网页加载完毕后执行
$(document).ready(function() {
    let kano_btn = '<div id="dark_mode_btn" style="bottom: 180px;background: #848484;opacity: .7;border-radius: 10px;" onclick="darkModeChanger()"><span class="fa fa-moon-o"></span></div>' + '<script>if($("#dark_mode_css").attr("rel") == "none"){switchIcon_kano("#dark_mode_btn span", "fa fa-moon-o");}else{switchIcon_kano("#dark_mode_btn span", "fa fa-sun-o");}</script>';
    //背景过渡处理
    let darkmode_css_transition = 'body, #kratos-blog-post';
    $(darkmode_css_transition).css('transition', ' all .6s ease');
    //判断是否已存在按钮
    if ($('#dark_mode_btn').length <= 0)
        $('.cd-tool').append(kano_btn);
});
//切换按钮图标函数
function switchIcon_kano(id, className) {
    $(id).removeClass();
    $(id).addClass(className);
}
//初始化本地状态
let kano_date = new Date;
if (localStorage.kano_darkMode_state == undefined) {
    //判断是否为夜晚
    if (!(kano_date.getHours() < 18 && kano_date.getHours() > 6)) {
        localStorage.setItem("kano_darkMode_state", "1");
        $('#dark_mode_css').attr('rel', 'stylesheet');
        //更改图标样式
        switchIcon_kano('#dark_mode_btn span', 'fa fa-sun-o');
    } else {
        localStorage.setItem("kano_darkMode_state", "0");
        //更改图标样式
        switchIcon_kano('#dark_mode_btn span', 'fa fa-moon-o');
    }
}
//判断本地darkmode状态
if (localStorage.kano_darkMode_state == '0') {
    // 移除样式表
    $('#dark_mode_css').attr('rel', 'none');
    //更改图标样式
    switchIcon_kano('#dark_mode_btn span', 'fa fa-moon-o');
} else {
    $('#dark_mode_css').attr('rel', 'stylesheet');
    //更改图标样式
    switchIcon_kano('#dark_mode_btn span', 'fa fa-sun-o');
}


function darkModeChanger() {
    //判断样式rel是否为空
    if ($('#dark_mode_css').attr('rel') != 'none') {
        $('#dark_mode_css').attr('rel', 'none');
        //更改图标样式
        switchIcon_kano('#dark_mode_btn span', 'fa fa-moon-o');
        //存储本地状态
        localStorage.setItem("kano_darkMode_state", "0");
    } else {
        $('#dark_mode_css').attr('rel', 'stylesheet');
        //更改图标样式
        $('#dark_mode_btn span').removeClass();
        switchIcon_kano('#dark_mode_btn span', 'fa fa-sun-o');
        //存储本地状态
        localStorage.setItem("kano_darkMode_state", "1");

    }
}