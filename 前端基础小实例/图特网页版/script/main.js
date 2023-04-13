function to_reg() {
    //清空警告框
    $('#albox').html(" ");

    //切换表单action为注册
    $('#form').attr('action', './reg');

    //更改盒子高度
    $('.login').addClass("app_reg");

    //添加确认密码框
    let confirm_passwd = '<input id="conf_pwd" type="password" name="confirm_passwd" placeholder="确认密码" />'
    $('#pwd').after(confirm_passwd);

    //更改按钮文字
    $('#submit').attr('value', '确认注册');

    //更改注册链接id和文字
    $('.center h1').html('用户注册');
    $('#reg_btn').html('已有帐号，返回登录');
    $('#reg_btn').attr('onclick', 'to_log()');
    //解绑click事件
    $('#reg_btn').unbind("click");
    $('#reg_btn').attr('id', 'log_btn');
}

function to_log() {
    //清空警告框
    $('#albox').html(" ");
    //切换表单action为登录
    $('#form').attr('action', './log');

    //更改盒子高度
    $('.login').removeClass("app_reg");

    //移除确认密码框
    $('#conf_pwd').remove();

    //更改按钮文字
    $('#submit').attr('value', '进入图特');

    //更改登录链接id和文字
    $('.center h1').html('用户登录');
    $('#log_btn').html('用户注册');
    $('#log_btn').attr('onclick', 'to_reg()');
    $('#log_btn').attr('id', 'reg_btn');
}

$("#submit").click(function(event) {

    //判断是否有空
    $("input").each(function() {
        // 判断值不为空
        if ($(this).val().length === 0) {
            // 展示错误提示
            var errMsgPrefix = $(this).attr('placeholder');
            $('#albox').html("请输入账号/密码");
            //alert(errMsgPrefix + "不能为空" + this.next);
            event.preventDefault();
        }
    });
    //限制最小密码长度
    if ($('#pwd').val().length < 8) {
        $('#albox').html("密码至少为8位");
        event.preventDefault();
    }
    //判断有无确认密码框
    if ($('#conf_pwd').length > 0) {
        //判断两个密码框内容是否相等
        if ($('#conf_pwd').val() != $('#pwd').val()) {
            $('#albox').html("两次密码不一致");
            event.preventDefault();
        }
    }

});