//蛇对象
(() => {
    //记录上次创建的蛇
    let elements = [];

    function Snake(options) {
        //防止传参为空
        options = options || {};
        //蛇节
        this.width = options.width || 20;
        this.height = options.height || 20;
        //蛇的移动方向
        this.direction = options.direction || 'right';
        //蛇身
        this.body = [
            { x: 12, y: 2, color: 'transparent' },
            { x: 11, y: 2, color: `rgba(${Tools.getRandom(0,255)},${Tools.getRandom(0,255)},${Tools.getRandom(0,255)},1)` },
        ];


    };
    //渲染
    Snake.prototype.render = function(map) {
        //删除之前创建的蛇
        remove();
        //渲染蛇节
        for (let i = 0, len = this.body.length; i < len; i++) {
            //蛇节
            let obj = this.body[i];

            //创建元素
            let span = document.createElement('span');
            //设置样式
            span.style.width = this.width + 'px';
            span.style.height = this.height + 'px';
            //obj.x * this.width 表示x个蛇节宽度这么多的距离
            span.style.left = (obj.x * this.width) + 'px';
            span.style.top = (obj.y * this.height) + 'px';
            span.style.backgroundColor = obj.color;
            span.classList.add('snake');
            map.appendChild(span);
            elements.push(span);
        }
    };
    //删除蛇方法
    function remove() {
        while (elements.length > 0) {
            elements[elements.length - 1].parentNode.removeChild(elements[elements.length - 1]);
            elements.splice(elements.length - 1, 1);
        }
    }
    //蛇移动
    Snake.prototype.move = function(food, map) {
        //控制蛇的身体移动（当前蛇节到上一个蛇节的位置）
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //控制蛇头的移动
        //判断蛇移动的方向
        let head = this.body[0];

        switch (this.direction) {
            case 'right':
                head.x += 0.2;
                break;
            case 'left':
                head.x -= 0.2;
                break;
            case 'up':
                head.y -= 0.2;
                break;
            case 'down':
                head.y += 0.2;
                break;
        }
        //判断蛇头是否在食物的坐标范围内
        let snakeX = (head.x * (this.width))
        let snakeY = (head.y * (this.height));
        let leftPaddingIsTrue = ((snakeX >= food.x) && (snakeX <= (food.x + food.width))) && ((snakeY >= food.y) && (snakeY <= (food.y + food.height)))
        let rightPaddingIsTrue = ((snakeX + this.width / 2 >= food.x) && (snakeX + this.width / 2 <= (food.x + food.width))) && ((snakeY + this.height / 2 >= food.y) && (snakeY + this.height / 2 <= (food.y + food.height)))
        if (leftPaddingIsTrue || rightPaddingIsTrue) {
            //蛇加一节
            //复制蛇的最后一节
            let lastNode = this.body[this.body.length - 1];
            for (let i = 0; i < 10; i++) {
                this.body.push({
                    x: lastNode.x,
                    y: lastNode.y,
                    color: `rgba(${Tools.getRandom(0,255)},${Tools.getRandom(0,255)},${Tools.getRandom(0,255)},.7)`
                });
            }

            //随机在地图上增加食物
            food.render(map);
        }

    }

    //把构造函数添加到window对象下,外部就可以访问了
    window.Snake = Snake;
})();