//独立作用域
(() => {
    //记录上次创建的食物
    let elements = [];

    // 食物对象
    function Food(options) {
        //防止传参为空
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 40;
        this.height = options.height || 40;

        this.color = options.color || 'transparent';
    }
    //渲染食物
    Food.prototype.render = function(map) {
        //删除之前创建的食物
        remove();
        //随机设置食物位置
        this.x = Tools.getRandom(0, (map.offsetWidth / this.width - 1) * this.width);
        this.y = Tools.getRandom(0, (map.offsetHeight / this.height - 1) * this.height);

        //动态创建元素，我选择用span来显示食物
        let span = document.createElement('span');
        //设置样式s
        span.style.left = this.x + 'px';
        span.style.top = this.y + 'px';
        span.style.backgroundColor = this.color;
        span.classList.add('food');
        map.appendChild(span);

        //保存食物
        elements.push(span);
    };

    //删除食物
    function remove() {
        while (elements.length > 0) {
            elements[elements.length - 1].parentNode.removeChild(elements[elements.length - 1]);
            elements.splice(elements.length - 1, 1);
        }
    }
    //把构造函数添加到window对象下,外部就可以访问了
    window.Food = Food;
})();