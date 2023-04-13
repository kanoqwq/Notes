$(function() {

    //全选模块
    var HighLight = function() {
        $('.j-checkbox').parents('.cart-item').removeClass('check-cart-item');
        $('.j-checkbox:checked').parents('.cart-item').addClass('check-cart-item');
    }

    $('.checkall').change(function() {
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'));
        HighLight();
    });

    $('.j-checkbox').change(function() {
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        HighLight();
    });
    //数量增减模块
    $('.quantity-form .decrement').click(function() {
        var num = parseInt($(this).siblings('.itxt').val());
        $(this).siblings('.itxt').val(num <= 1 ? 1 : num - 1);
        //展示价格
        CalPrice(this);
    });
    $('.quantity-form .increment').click(function() {
        var num = parseInt($(this).siblings('.itxt').val());
        $(this).siblings('.itxt').val(num + 1);
        CalPrice(this);
    });
    //修改数目显示单价与小计
    $('.quantity-form .itxt').change(function() {
        //不允许小于等于0
        if ($(this).val() <= 0) $(this).val(1);
        //拿到单价
        var price = parseFloat($(this).parent().parent().siblings('.p-price').text().substr(1));
        //拿到数量
        var count = parseInt($(this).val());
        //计算
        $(this).parent().parent().siblings('.p-sum').text('￥' + (price * count).toFixed(2));
        CalSum();
    });
    //计算单价,小计
    var CalPrice = function(ele) {
        //拿到单价
        var price = parseFloat($(ele).parent().parent().siblings('.p-price').text().substr(1));
        //拿到数量
        var count = parseInt($(ele).siblings('.itxt').val());
        //计算
        $(ele).parent().parent().siblings('.p-sum').text('￥' + (price * count).toFixed(2));
        CalSum();
    }

    //计算总价与已经选择的商品
    var CalSum = function() {
        //总价
        var sum = 0;
        $('.p-sum').each(function() {
            sum += parseFloat($(this).text().substr(1));
        });
        $('.price-sum em').text('￥' + sum.toFixed(2));
        //已选项
        var sumCount = 0;
        $('.quantity-form .itxt').each(function() {
            sumCount += parseInt($(this).val())
        });
        $('.amount-sum em').text(sumCount);
    }

    //先计算一次
    CalSum();

    //删除单个商品
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
        CalSum();
    });
    //删除选中的商品
    $('.remove-batch').click(function() {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        CalSum();
    });
    //清理购物车
    $('.operation .clear-all').click(function() {
        $('.cart-item-list').empty();
        CalSum();
    })
})