//轮播图特点：
/*
鼠标移入显示前后按钮，移出隐藏
点击前后按钮，实现图片前后循环切换
点击下面的五个小点，显示对应序列的图片，同时小点亮起，其他点熄灭
鼠标移入轮播图区域的的时候，暂停自动轮播，鼠标移出后恢复自动轮播
附加需求：
可随意增减图片数量，达到兼容多图的效果
*/
//设置一个index表示轮播到的图片位置
var kano_index = 0;

//设置自动播放的时间间隔(ms)
var kano_delay = 2000;

//选中元素
var lbt = document.querySelector(".lbt");
var forwardBtn = document.querySelector(".lbt .forward");
var nextBtn = document.querySelector(".lbt .next");
var lbtMain = document.querySelector(".lbt .lbt-main");
var dot = document.querySelector(".lbt .dot ul");
var img = document.querySelector(".lbt .lbt-main img");

//获取图片的数量
var imgCount = lbtMain.children.length;

//设置图片ul的宽度(naturalWidth表示图片原生宽度 当然要在图片加载完毕后才能获取),由于使用无缝滚动，所以要+1
window.addEventListener("load", function() {
	lbtMain.style.width = ((imgCount + 1) * img.naturalWidth) + "px";
});

//动态生成小圆点
for (var i = 0; i < lbtMain.children.length; i++) {
	var t = document.createElement("li");
	dot.appendChild(t);
}

//给第一个元素添加选中类
addClass(dot.children[0], "selected");


//复制轮播图第一个元素到最后一个(深拷贝)
var newli = (lbtMain.firstElementChild).cloneNode(true)
lbtMain.appendChild(newli);

//轮播图鼠标移入事件
lbt.addEventListener("mouseenter", function() {
	//显示前后按钮
	removeClass(forwardBtn, "hidden");
	removeClass(nextBtn, "hidden");
	//暂停轮播
	clearInterval(autoTimer);

});

//轮播图鼠标移出事件
lbt.addEventListener("mouseleave", function() {
	//隐藏前后按钮
	addClass(forwardBtn, "hidden");
	addClass(nextBtn, "hidden");
	//继续轮播
	autoTimer = setInterval("SwitchImg(1)", kano_delay);
});

//上一个图片点击事件
forwardBtn.addEventListener("click", function() {
	SwitchImg(0);
});

// 下一张图片事件
nextBtn.addEventListener("click", function() {
	SwitchImg(1);
});

// 点击指定点切换对应图片
// 循环绑定点击事件
for (var i = 0; i < dot.children.length; i++) {
	//添加序号
	dot.children[i].setAttribute("kano_index", i);
	dot.children[i].addEventListener("click", function() {
		//获取序号
		var d = this.getAttribute("kano_index");
		//高亮
		markDot(d);
		kano_index = d;
		// 切换图片
		Scroll(kano_index);

	});
}

//自动轮播
var autoTimer = setInterval("SwitchImg(1)", kano_delay);


//无缝切换图片
function SwitchImg(direction) {
	if (direction == 0) {
		//判断是否为第一张图片
		if (kano_index == 0) {
			//设置点
			markDot(kano_index);
			// 解除动画
			addClass(lbtMain, "noanimation");
			// 直接位移到最后一张克隆图的前一张位置
			Scroll(imgCount);
			kano_index = imgCount;
		}
		kano_index--;
		//滚动
		Scroll(kano_index);
		// 设置动画
		removeClass(lbtMain, "noanimation");
		//同步下面的点
		markDot(kano_index);
	}
	if (direction == 1) {
		//判断是否为最后一张图片
		if (kano_index == imgCount) {
			//设置点
			markDot(kano_index);
			//解除动画
			addClass(lbtMain, "noanimation");
			// 直接位移到第一张照片
			Scroll(0);
			//接下来直接播放第二张照片
			kano_index = 0;
		}
		kano_index++;
		Scroll(kano_index);
		//设置动画
		removeClass(lbtMain, "noanimation");
		//同步下面的点
		markDot(kano_index);


	}
}

//图片滚动到指定位置
function Scroll(kano_index) {
	lbtMain.style.left = "-" + kano_index * (lbtMain.offsetWidth / (imgCount + 1)) + 'px';
}


//指示点指定高亮
function markDot(kano_index) {

	//使用排他思想重置一遍高亮元素
	var dots = dot.children;
	for (var i = 0; i < dots.length; i++) {
		removeClass(dots[i], "selected");
	}

	//如果滚动到了克隆图,直接给第一个
	if (kano_index == imgCount) {
		addClass(dots[0], "selected");

	} else if (kano_index == -1) {
		addClass(dots[dots.length - 1], "selected");
	} else {
		addClass(dots[kano_index], "selected");
	}

}


//没有和jquery一样的 removeClass方法，自己写一个简单的
function removeClass(element, className) {
	var str = element.className.split(" ");
	var str1 = "";
	for (var i in str) {
		if (str[i] != className && str[i] != " ") {
			str1 += str[i] + " ";
		}
	}
	element.className = str1.trim();
}

//添加类方法
function addClass(element, className) {
	element.className += " " + className;
	element.className = element.className.trim();
}

//判断是否存在指定类
function hasClass(element, className) {
	var str = element.className.split(" ");
	for (var i in str) {
		if (str[i] == className) {
			return true;
		}
	}
	return false;
}