window.addEventListener("load", function() {
    //获取元素
    var focus = document.querySelector(".focus");
    var ul = focus.children[0];
    var ol = focus.children[1];
    //获得focus 的宽度
    var w = focus.offsetWidth;
    //利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(() => {
        index++;
        var translate = -index * w;
        ul.style.transition = "all .5s";
        ul.style.transform = "translateX(" + translate + "px)";
    }, 2000);
    //监听过度完成的事件transitionend
    ul.addEventListener("transitionend", function() {
        //无缝滚动
        if (index >= 3) {
            index = 0;

            //去掉过度
            ul.style.transition = "none";
            //滚动到开始
            var translate = -index * w;
            ul.style.transform = "translateX(" + translate + "px)";
        }
        if (index < 0) {
            index = 2;
            //去掉过度
            ul.style.transition = "none";
            //滚动到开始
            var translate = -(index * w);
            ul.style.transform = "translateX(" + translate + "px)";
        }
        // 小圆点
        ol.querySelector(".current").classList.remove("current");
        ol.children[index].classList.add("current");
    });
    //手指滑动轮播图
    var startX = 0;
    var moveX = 0;
    ul.addEventListener("touchstart", function(e) {
        //干掉定时器
        clearInterval(timer);
        startX = e.targetTouches[0].clientX;
        ul.addEventListener("touchmove", function(e) {
            //去掉过度
            ul.style.transition = "none";
            moveX = (e.targetTouches[0].clientX - startX);
            //移动盒子：盒子原来的位置+手指移动的距离
            var translate = -index * w + moveX;
            ul.style.transform = "translateX(" + translate + "px)";
            moveFlag = false;
            //阻止默认行为
            e.preventDefault();
        });
    });
    //手指离开，根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener("touchend", function(e) {
        //如果移动距离大于50px 就播放下一张或者上一张
        if (Math.abs(moveX) > 50) {
            //右滑
            if (moveX > 0) {
                index--;
            }
            //左滑
            if (moveX < 0) {
                index++
            }
        }
        //否则触发回弹效果
        //过度
        ul.style.transition = "all .5s";
        //滚动
        var translate = -index * w;
        ul.style.transform = "translateX(" + translate + "px)";
        console.log(index);
        //开启定时器
        timer = setInterval(() => {
            index++;
            var translate = -index * w;
            ul.style.transition = "all .5s";
            ul.style.transform = "translateX(" + translate + "px)";
        }, 2000);
    });
    //返回顶部模块
    var goBack = document.querySelector(".goBack");
    window.addEventListener("scroll", (e) => {
        console.log(this.scrollY);
        if (this.scrollY >= 70) {
            goBack.classList.remove("hide");
        } else {
            goBack.classList.add("hide");
        }
    });
    goBack.addEventListener("click", function(e) {
        var d = window.scrollY;
        var timer = setInterval(function() {
            window.scroll(0, d);
            d -= 10;;
            if (d <= 0) {
                clearInterval(timer);
            }
        }, 5)
    });
    //classList属性 是h5新增的属性
    // 使用例
    //element.classList.add("xxx");
    //element.classList.remove("xxx");
    //切换类 判断是否存在bg类，不存在则添加，存在则移出
    //element.classList.toggle("bg");
});