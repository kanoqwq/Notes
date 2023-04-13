//对象的增删查改
var that;
class Tab {
    constructor(id) {
        //获取元素
        this.main = document.querySelector(id);

        //获取li
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll("section");

        this.add = this.main.querySelector('.tabadd');

        // ul
        this.ul = this.main.querySelector('.firstnav ul');
        //section
        this.fsection = this.main.querySelector(".tabscon");

        that = this;
        this.init();
    }

    //初始化
    init() {
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++) {
            //绑定元素序号
            this.lis[i].index = i;
            //切换绑定
            this.lis[i].onclick = this.toggleTab;
            //remove
            this.remove[i].onclick = this.removeTab;
            //span
            this.spans[i].ondblclick = this.editTab;
            //section
            this.sections[i].ondblclick = this.editTab;
        }
        this.add.onclick = this.addTab;
    }

    //updateNode
    //刷新li和section
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll("section");
        //remove
        this.remove = this.main.querySelectorAll('.icon-tabguanbi');
        //获取所有的span
        this.spans = this.main.querySelectorAll(".firstnav li span:first-child");
    }

    //切换功能
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }

    //清除样式
    clearClass() {
        //排他
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.sections[i].className = "";
        }
    }

    //添加功能
    addTab() {
        //创建li元素和secion元素
        //把这两个元素分别追加进去
        //高级的做法
        //利用insertAdjancentHTML()可以直接把字符串格式的元素添加到父元素中
        var li = '<li class="liactive"><span>新选项卡</span><span class="icon iconfont icon-tabguanbi"></span></li>';
        var section = '<section class="conactive">新内容</section>';
        //把这两个元素追加到对应元素的父元素里面
        //排他
        that.clearClass();
        //beforeend在我们父元素里面的最后面添加
        that.ul.insertAdjacentHTML("beforeend", li);
        that.fsection.insertAdjacentHTML("beforeend", section);
        //重新初始化一下
        that.init();
    }

    //删除功能
    removeTab(e) {
        //阻止事件冒泡，以防触发li点击事件
        e.stopPropagation();
        var index = this.parentNode.index;
        //删除该元素以及section
        this.parentNode.remove();
        that.sections[index].remove();
        //重新加载
        that.init();
        //当删除的不是选中状态的li 的时候，原来选中状态的li保持不变
        if (document.querySelector('.liactive')) return;
        //当删除了选定状态的li的时候,让他的前一个li赋予选定状态
        index = index - 1 < 0 ? 0 : index - 1;
        //如果存在的话,就点一下
        that.lis[index] && that.lis[index].click();
    }

    //修改功能
    editTab(e) {
        var text = this.innerText;
        //判断是否为section
        if (this.tagName == 'SECTION') {
            this.innerHTML = '<textarea type="text" style="width:' + (this.offsetWidth + 20) + 'px"/>'
        } else {
            this.innerHTML = '<input type="text" style="width:' + (this.offsetWidth + 20) + 'px"/>'
        }
        this.firstChild.value = text;
        this.firstChild.select();
        //离开文本框
        this.firstChild.onblur = function() {
            //没有值就填充默认值
            if (this.value == "") {
                this.value = "新选项";
            }
            //console.log(this.value.split("\n").join("<br>"));
            // 替换回车符为<br>
            //过滤html标签
            // 格式化
            this.parentNode.innerHTML = this.value.split("<").join('&lt;').split(">").join('&gt;').split(" ").join("&nbsp;").split("\n").join("<br>");
        }

        //回车响应
        this.firstChild.onkeyup = function(e) {
            if (e.code == "Enter" && this.parentNode.tagName != 'SECTION') {
                this.blur();
            }

        }

    }
}
window.addEventListener("load", function() {
    var tab = new Tab('#tab');
});