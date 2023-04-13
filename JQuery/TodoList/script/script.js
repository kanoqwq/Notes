$(document).ready(function() {
    // 存储数据的格式
    var todolist;
    //本地存储只能存储字符串的格式
    //使用json转换对象为字符串
    todolist = JSON.parse(localStorage.getItem('todo'));
    //展示存储的数据到页面
    var showval = function(string, tag, index, isinit) {
        //再展示
        var c = $(tag).append('<li data-index=' + index + ' style="display:none">' + '<input type="checkbox" name="" class="chkbox">' + '<p class="dosth">' + string + '</p><a href="javascript:;"class="remove">x</a></li>');
        isinit != false ? $('li').show(300) : $('li').show();
        numbershow();
    }

    //同步数字
    var numbershow = function() {
        var num1, num2;
        num2 = num1 = 0;
        todolist.forEach(function(ele) {
            if (ele.done == false) {
                num1++;
            } else if (ele.done == true) {
                num2++;
            }
        });
        $('#info1').text(num1);
        $('#info2').text(num2);
    }

    //按下a锁定add框
    $(window).keypress(function(e) {
        if (e.code == 'KeyA' || e.code == 'KeyS') {
            $("#additem").focus();
        }
    })

    //添加数据
    $("#additem").keypress(function(e) {
        if (e.code == "Enter" && $(this).val() != '') {
            if (todolist == null) {
                todolist = [{
                    title: $(this).val(),
                    done: false
                }];
            } else {
                todolist.push({
                    title: $(this).val(),
                    done: false
                });
            }
            //先存储
            save(todolist);
            // 调用展示数据方法
            showval($(this).val(), '#doing', todolist.length - 1);
            //清空一下输入框
            $(this).val('');
        }

    });
    //节流阀
    var fa = true;
    //点击x删除当前数据,使用事件委派
    $('ul').on("click", ".remove", function() {
        //隐藏动画
        if (fa == true) {
            $(this).parent().stop().hide(200, 'linear', function() {
                //删除数据
                var delindex = $(this).data('index');
                todolist.splice(delindex, 1);
                $(this).remove();
                //存一下
                save(todolist);
                //重新展示页面
                showinit(false);
            });
            fa = false;
        }
        setTimeout(() => {
            fa = true;
        }, 500);
    });

    //点击选择框移动分区
    $('ul').on("click", ".chkbox", function() {
        //切换
        //隐藏动画
        var ele = this;
        $(this).parent().stop().hide(200, function() {
            if (ele.checked == true) {
                //修改数据
                todolist[$(ele).parent().data('index')].done = true;
                // append是剪切操作，原来的元素会被剪切掉
                $("#done").append($(ele).parent());
            } else {
                //修改数据
                todolist[$(ele).parent().data('index')].done = false;
                $("#doing").append($(ele).parent());
            }
            //展示移动后的单个数据,不重新展示
            $(this).show(200, function() {
                numbershow();
            });
            //存一下
            save(todolist);
        });
    });
    //开屏展示数据
    var showinit = function(flag) {
        //清空元素内容
        $('#doing,#done').empty();
        if (todolist != null && todolist.length != 0) {
            for (var i = 0; i < todolist.length; i++) {
                showval(todolist[i].title, todolist[i].done == false ? '#doing' : '#done', i, flag);
            }
            $('#done li input').prop('checked', true);
        } else {
            numbershow();
        }
    };
    showinit(true);

    var save = function(d) {
        //同步前台数据
        $('li').each(function(index, ele) {
            d[index].title = $(ele).children('p').html();
            d[index].done = $(ele).children('input').prop('checked');
        });
        //存储
        localStorage.setItem('todo', JSON.stringify(d));
    }
})