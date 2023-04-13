## 1. 初识jQuery

>  试着运行以下代码

```javascript
$('p').html("HELLO Jquery!!");
jQuery('a').hide()
```

#### jQuery顶级对象

$是jQuery的别称，在代码中可以使用jQuery代替$，但一般为了方便，通常都直接使用$

特别的，如果遇到了入口冲突的问题，就可以用jQuery入口方法



## 2. jQuery 隐式迭代

> 隐式迭代 jquery 会默认遍历一遍获取到的伪数组对象
>就是把匹配到的所有元素内部进行遍历循环，给每个元素操作一遍

```javascript
$("p").html("ddd");//所有的p元素的内容会被替换为ddd
$("p").css('background', 'pink');//所有的p元素的背景颜色会被替换为pink
```



## 3. DOM对象转换为JQuery对象

```javascript
var body = document.querySelector('body');
// 直接用$包装一下就能转换成jquery对象了
$(body);
//jq对象转换为DOM对象
var d = $('body')[0]; //第一种
d = $('body').get(0); //第二种
```



## 4. jQuery选择器

#### jQuery 基础选择器

原生 JS 获取元素的方式多且杂，而且兼容性情况不一致，因此 jQuery 给我们做了封装，使获取元素变得统一标准

> $("选择器")  // 里面选择器直接写CSS选择器即可，需要加上引号

| 名称       | 用法            | 描述                     |
| ---------- | --------------- | ------------------------ |
| ID选择器   | $("#id")        | 获取指定ID的元素         |
| 全选选择器 | $("*")          | 匹配所有元素             |
| 类选择器   | $(".class")     | 获取同一类class的元素    |
| 标签选择器 | $("div")        | 获取同一类标签的所有元素 |
| 并集选择器 | $("div,p,li")   | 选取多个元素             |
| 交集选择器 | $("li.current") | 交集元素                 |



####  JQuery 筛选选择器

> JQuery 筛选方法 (重点


| 语法               | 用法                          | 说明                                                       |
| ------------------ | ----------------------------- | ---------------------------------------------------------- |
| parent()           | $('li').parent();             | 查找父级                                                   |
| parents()          | $('.son').parents();          | 查找父级所有元素，如果有参数，则是查找指定标签的所有元素   |
| children(selector) | $("ul").children("li");       | 相当于$("ul>li"),最近一级（亲儿子）                        |
| find(selector)     | $('ul').find("li");           | 相当于$("ul li")，后代选择器                               |
| siblings(selector) | $(".first").siblings("li");   | 查找兄弟节点，不包括自己本身                               |
| nextAll([expr])    | $(".first").nextAll()         | 查找当前元素之后所有的同辈元素                             |
| prevAll([expr])    | $(".last").prevAll()          | 查找当前元素之前的所有同辈元素                             |
| hasClass(class)    | $('div').haClass("protected") | 检查当前的元素是否含有某个特定的类，如果有<br />则返回true |
| eq(index)          | $("li").eq(2)                 | 相当于$("li:eq(2)"),index从0开始                           |

> 常用方法
```javascript
//注意一下都是方法 带括号
$(function() {
    // 1. 返回的是最近一级的父级元素
    $('.son').parent());
    // 2.子 (亲儿子)
    $('.son').children('p').css('color','red');
    // 3.兄 find()类似于后代选择器
    $('.nav').find('p').css('background','pink');
    // 4.排他思想的简易实现
    $($('input').change(function() {
        $(this).siblings("input").prop("checked", false);
    }));
});
```



## 5. jQuery链式编程

**链式编程是为了节省代码量，看起来更优雅（**

```javascript
$(this).css('color','black').siblings().css('color','red')
```

P.S:使用链式编程的时候，需要注意一下操作的对象是否正确

```javascript
$(this).siblings().addClass('hide');//给自己兄弟添加hide类，自身类不变
$(this).siblings().parent().css('color','pink')//给兄弟的父级添加颜色
```



## 6. jQuery 效果

> jQuery给我们封装了很多动画效果，最常见的如下：

| 显示隐藏 | 滑动          | 淡入淡出     | 自定义动画 |
| -------- | ------------- | ------------ | ---------- |
| show()   | slideDown()   | fadeIn()     | animate()  |
| hide()   | slideUp()     | fadeOut()    |            |
| toggle() | slideToggle() | fadeToggle() |            |
|          |               | fadeTo()     |            |



#### 语法规范

```javascript
show([speed],[easing],[fn]);
hide([speed],[easing],[fn]);
toggle([speed],[easing],[fn]);
slideDown([speed],[easing],[fn]);
slideUp([speed],[easing],[fn]);
slideToggle([speed],[easing],[fn]);
fadeIn([speed],[easing],[fn]);
fadeOut([speed],[easing],[fn]);
fadeToggle([speed],[easing],[fn]);
fadeTo([speed],opacity,[easing],[fn]);
animate(params,[speed],[easing],[fn]);
```

* **参数**
  * 参数都可以省略，无动画直接显示
  * speed:三种预定速度之一的字符串("slow","normal","or","fast")或表示动画市场的毫秒数值(如：1000)
  * easing:(Optional)用来指定切换效果，默认是’swing‘，可用参数“linear”。
  * fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。
  * opacity: 透明度，必填项，取值在0-1之间
  * params: 想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采用驼峰命名法(eg： borderLeft)。其余参数都可以省略。

> 使用例

```javascript
$(function(){
    $("button").eq(1).click(function(){
        // $(this).hide("fast");//快速隐藏
        $('div').hide(1000,function(){alert('隐藏成功')});//1s隐藏+回调
    });
    $("button").eq(0).click(function(){
        $('div').show("fast");//快速显示
        // $('div').show(1000,function(){alert("显示成功")});//1s显示+回调
    });
    $("button").eq(2).click(function(){
        $('div').toggle("fast");//快速切换
    });
    
    $("button").eq(2).click(function(){
        $('div').fadeTo(1000,0.5);//1s切换时间 + 修改透明度为0.5
    });
    .........
})
```



> 自定义动画

```javascript
$(function(){
    $("button").click(function(){
        $('div').animate({
            left: 500,
            top: 200,
            opactiy: .4,
            width: 300
        },1000,'swing')
    })
});
```



#### 事件切换

```javascript
hover([over],[out])
```

> over：鼠标移到元素上要 触发的函数（相当于mouseover）
>out：鼠标移出元素要触发的函数（相当于mouseleave）
> 如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数

**例：**

```javascript
$('nav>li').hover(function(){do someting...},function(){do someting...})
$('nav>li').hover(()=>{$('.list').slideToggle()})//配合切换方法
```



#### 动画队列及其停止排队方法

**动画或效果队列**

>
> 动画或者效果一旦触发就会执行，如果多次触发，就会造成多个动画或者效果排队执行

解决方法：**每次执行的时候先使用stop方法停止队列中的函数。再执行新的操作**

```javascript
//stop方法必须写在动画的前面
$('.nav>li').hover(function(){
    $('this').children('ul').stop().slideToggle();
})
```



## 7.jQuery 属性操作

#### 设置或获取元素固有属性值 prop()

> 所谓元素固有属性就是元素本身自带的属性，比如a元素里面的href   input元素里面的type
>如果是人为定义的属性，就不属于固有属性



#### 设置或获取元素自定义属性值 attr()

>和prop不一样，attr()可以获取不属于元素固有的属性



#### 数据缓存 data()

>data() 方法可以在指定元素上存取数据，并不会修改DOM元素结构，页面一旦刷新，存储的数据就会被移除

操作方法：

```javascript
//获取属性值
$('选择器').prop("属性名")
$('选择器').attr("属性名")
//设置属性
$('选择器').prop("属性名","值")
$('选择器').attr("属性名","值")
//设置h5自定义属性
$('div').attr("data-index",4)
//数据缓存,不会再dom结构中显示
$('span').data('name',"zhangsan")
//这个方法可以获取data-index h5自定义属性 不用写data-前缀 返回的是数字型
$('div').data('index');
```



#### 内容文本值

>内容文本值操作，主要是对元素的内容还有表单的值操作

普通元素内容html() (相当于inner HTML)

``` javascript
$('div').html() //获取元素内容
$('div').html("内容") //设置元素的内容
```

普通元素文本内容text() (相当于 innerText)

```javascript
$('div').text()//获取元素内文本内容
$('div').text('ddd')//设置元素内文本内容
```

获取表单内容val() (相当于 value() )

```javascript
$('div').val()//获取表单标签内文本内容
$('div').val('ddd')//设置表单标签内文本内容
```



## 8. jQuery元素操作

#### 遍历元素

> jQuery 隐式迭代是对同一类元素做了同样的动作，如果想要给同一类元素做不同操作，就需要使用到遍历

**语法1：**

```javascript
('div').each(function(index,DOMEle){xxxx;});
```

1. each()方法遍历匹配的每一个元素，主要是用DOM处理，each每一个
2. 里面的回调函数有两个参数：index是每一个元素的索引号，DOMEle是每个DOM元素对象，不是jQuery对象
3. 所以要想使用jquery方法，就需要将这个DOM元素转换成jQuery对象

**语法2：**

```javascript
$.each($('div'),function(index,DOMEle){
    xxxx;
})
```

1.  $.each方法主要是用于遍历数据，处理数据（对象，键值对之类）
2. 其余与each方法相同



#### 添加元素

内部添加

```javascript
$(element).append('内容')//（类似appendChild）放在内容的最后 
$(element).prepend('内容');//内部添加并且放到内容的最前面
```

> 注意：.appendTo()  .append()  .prependTo()  .prepend()  都属于剪切操作，会把原来的元素剪切走



外部添加

```javascript
$(element).after('内容')//把内容放入目标元素后面
$(element).before('内容')//把内容放入目标元素前面
```



#### 删除元素

```javascript
$(element).remove()//删除element本体
$(element).empty()//清空element中的内容（元素，子节点）
$(element).html('')//同上
```

## 9. jQuery尺寸、位置操作

#### jQuery尺寸

| 语法                                  | 用法                                                    |
| ------------------------------------- | ------------------------------------------------------- |
| width()/height()                      | 取得匹配元素宽度和高度值 只算 width / height            |
| innerWidth() / innerHeight()          | 取得匹配元素宽度和高度值 包含padding                    |
| outerWidth() / outerHeight()          | 取得匹配元素宽度和高度值 包含padding 、border           |
| outerWidth (true) / outerHeight(true) | 取得匹配元素的宽度和高度值 包含padding 、border、margin |

* 以上参数为空，则是获取相应值，返回的是数字型
* 如果参数为数字，则是修改相应值
* 参数可以不用写单位



#### jQuery位置

位置主要有三个：

```javascript
offset();
position();
scrollTop();
scrollLeft();
```

> offset() 设置或获取元素偏移
>该方法设置或返回被选元素相对于文档的偏移坐标，和父级没有关系。
> position() 获取距离带有定位父级位置（偏移） 如果没有带定位的父级，则以文档为准 ，position只能获取不能设置

**例：**

```javascript
var top = $('.son').offset().top;//获取位置
$('.son').offset({
    top:100,
    left:100
})//设置位置

$('.son').position();
//position只能获取不能设置
```

>  scrollTop()  /  scrollLeft()   方法设置或返回元素被卷去的头部/左侧

```javascript
$(window).scroll(function(){
    console.log($(document).scrollTop())
    $(document).scrollTop(100)//直接滚动到100像素的位置
})
```

案例：带有动画的返回顶部

核心原理：使用animate动画返回顶部

animate动画函数里面有个scrollTop属性，可以设置位置

```javascript
$('.goBack').click(function(){
    $('.container').animate({
        scrollTop: 0;
    },520);
})
```

##### 例：本站头部nav隐藏显示实现

```javascript
//设置滚动事件，分为向上滚动和向下滚动
//当向下滚动的时候触发隐藏动画
//当鼠标向上滚动时触发显示动画
$(function(){
    var scrollPos = $(window).scrollTop();
    $('#kratos-header-section').css('transition','all .5s');
    $(window).scroll(function(){
    	//向下滚动
    	if($(this).scrollTop() >= scrollPos){
            //隐藏nav
            $('#kratos-header-section').css('top','-50px');
        }
        //向上
        else{
            //显示nav
            $('#kratos-header-section').css('top','10px');
            }
        scrollPos = $(this).scrollTop();
	})
})
```



##  10.jQuery事件

####  jQuery事件注册

**单个事件注册**

> 语法：element.事件(function(){})

```javascript
$('div').click(function(){事件处理程序;})
$('div').mouseover(function(){事件处理程序;})
$('div').resize(function(){事件处理程序;})
$('div').change(function(){事件处理程序;})
$('div').keydown(function(){事件处理程序;})
$('div').scroll(function(){事件处理程序;})
...
```



#### jQuery事件处理

**语法**

```javascript
element.on(events,[selector],fn)
```

* events: 一个或多个用空格分隔的事件类型，如”click“或“keydown”。
* selector：元素的子选择器。
* fn：回调函数，即绑定在元素上的侦听函数

**写法一：**

```javascript
$('div').on({
    mouseenter: function(){},
    click: function(){},
    scroll: function(){}
});
```



> P.S : 如果事件处理程序相同，就可以使用下面这个写法

**写法二：**

```javascript
$('div').on('mouseenter mouseleave',function(){
    alert("111");
})
```

* **另外，on可以实现事件委托（委派）**
* 通过事件委托+on可以给未来动态创建的元素绑定事件

> 以下代码可以实现点击li弹出提示框，但是绑定事件的对象是ul
> 事件委派的定义是，把原来加给子元素身上的事件帮绑定在父元素身上，就是把事件委派给父元素

```javascript
$('ul').on('click','li',function(){//触发对象是li
    alert(11);
})
```

**只触发一次的事件：one()**

```javascript
$('div').one('click',function(){.....})//只触发一次
```



#### jQuery事件解绑

> off() 方法可以移除通过on()方法添加的事件处理程序

```javascript
$("div").off();//解除div身上的所有事件
$("div").off('click');//解除div身上的click事件
$('ul').off('click','li')//解除事件委托
```



#### jQuery自动触发事件

**自动触发事件 trigger() : **

> 有些事件希望自动触发，比如轮播图自动播放功能和点击右侧按钮一致，可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发

```javascript
element.click() //第一种简写形式
element.trigger('click') //使用trigger
element.triggerHandler("click")//使用triggerHandler
```

**两者的区别：**

>trigger() 和 triggerHandler的区别就是triggerHandler 不会触发元素的默认行为

**例:**

```javascript
//执行 .trigger 后 input 输入框自动获取焦点，触发事件的默认行为，而 .triggerHandler 仅仅 执行了指定的事件浏览器并未执行动作，输入框也没有获取焦点。
$('input').trigger("focus");//会触发元素默认行为，文本框内部会有光标闪烁
$('input').triggerHandler("focus")//不会触发元素默认行为，问呗内部没有光标闪烁
```



#### jQuery事件对象

**事件被触发，就会有事件对象的产生**

```javascript
element.on(events,[selector],function(event){...})
```

* 阻止默认行为：event.preventDdefault() 或者 return false;
* 阻止冒泡：event.stopPropagation()

其他格式与原生js类似。



#### jQuery对象拷贝

**如果想要把某个对象拷贝（合并）给另外一个对象使用，此时可以使用$.extend() 方法**

**语法：**

```javascript
$.extend([deep],target,object1,[objectN])
```

* deep: 如果设为true 就为深拷贝，默认为false 浅拷贝
* target：要拷贝的目标对象
* object1：待拷贝到第一个对象（target）的对象

##### 浅拷贝

```javascript
var targetObj = {
    id: 0
};
var obj = {
    id: 1,
    name: "kano",
    msg:{
	    m: "hello"
	}
}
$.extend(targetObj,obj);//会覆盖原来的数据
//修改obj里面的msg
obj.msg.m = "dddddddd";
console.log(targetObj)//msg被修改了
```

**由此可见，浅拷贝不会拷贝对象里面的复杂数据类型（另一个对象）**

##### 深拷贝

```javascript
var targetObj = {
    id: 0,
     msg:{
	    m: "hello123"
	}
};
var obj = {
    id: 1,
    name: "kano",
    msg:{
	    m1: "hello"
	}
}
$.extend(true,targetObj,obj);//也会覆盖相同的数据，但如果里面有不冲突的属性，会合并到一起
//修改obj里面的msg
obj.msg.m = "dddddddd";
console.log(targetObj)//msg不变
```

**深拷贝会递归对象，会把对象完整的复制过去，遇到相同的对象会进行合并，而不是覆盖**



## jQuery多库共存

> jQuery使用$作为标识符，随着jQuery的流行，其他js库也会使用$作为标识符，这样一起使用会引起冲突
> 所以需要一个解决方案，让jQuery和其他的js库不存在冲突，可以同时存在，这就叫多库共存

**解决方案**：

* **把里面的 $ 符号统一改为 jQuery，比如 jQuery('div')** 
* **jQuery变量规定新的名称：$.noConflict()  /  jQuery.noConflict()    var xxx = $.noConflict();**

```javascript
var xxx = $.noConflict();//使用过后原来的$就不能用了
xxx("div").show();
```

