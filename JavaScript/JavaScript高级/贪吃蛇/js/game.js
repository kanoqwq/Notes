//主游戏对象
(() => {
    var that;
    //创建食物和蛇对象的构造函数
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    //开始游戏方法
    Game.prototype.start = function() {
        //渲染食物和蛇
        this.food.render(this.map);
        this.snake.render(this.map);
        runSnake();
        //开始游戏逻辑
        //让蛇动起来
        //通过键盘控制蛇移动的方向
        //当蛇遇到食物 做相应的处理
        //当蛇遇到边界游戏结束
    };
    //让蛇润起来
    function runSnake() {
        keyControl();
        var timer = setInterval(function() {
            //这里请注意this指向
            this.snake.move(this.food, this.map);
            this.snake.render(this.map);
            //当蛇遇到边界游戏结束
            //只需要判断蛇头的坐标即可
            let headX = this.snake.body[0].x;
            let headY = this.snake.body[0].y;
            let maxX = Math.floor(this.map.offsetWidth / this.snake.width) - 0.5;
            let maxY = Math.floor(this.map.offsetHeight / this.snake.height) - 0.5;
            if (headX >= maxX || headY >= maxY) {
                //设置异步，避免alert卡帧
                setTimeout(() => {
                    // alert('你创到墙啦，游戏结束');
                    document.querySelector('.snake:nth-child(2)').classList.add('sad');
                    btn.style.display = 'block';
                }, 100);
                clearInterval(timer);
            }
            if (headX <= 0 || headY <= 0) {
                setTimeout(() => {
                    // alert('你创到墙啦，游戏结束');
                    document.querySelector('.snake:nth-child(2)').classList.add('sad');
                    btn.style.display = 'block';
                }, 100);
                clearInterval(timer);
            }
            //判断是否吃到了自己
            snakeBody = this.snake.body;
            for (let i = 1; i < snakeBody.length; i++) {
                if ((snakeBody[0].x == snakeBody[i].x) && (snakeBody[0].y == snakeBody[i].y)) {
                    setTimeout(() => {
                        alert('你咬到自己啦，游戏结束');
                        document.querySelector('.snake:nth-child(2)').classList.add('sad');
                    }, 100);
                    clearInterval(timer);
                    break;
                }
            }
        }.bind(that), 10);
    }
    //蛇控制
    function keyControl() {
        document.addEventListener('keyup', function(e) {
            switch (e.code) {
                case 'KeyD':
                    //蛇不能180度掉头
                    if (this.snake.direction != 'left') {
                        this.snake.direction = 'right';
                    }
                    break;
                case 'KeyA':
                    if (this.snake.direction != 'right') {
                        this.snake.direction = 'left';
                    }
                    break;
                case 'KeyS':
                    if (this.snake.direction != 'up') {
                        this.snake.direction = 'down';
                    }
                    break;
                case 'KeyW':
                    if (this.snake.direction != 'down') {
                        this.snake.direction = 'up';
                    }
                    break;
            }
        }.bind(that), false); //事件冒泡

    }
    //当蛇遇到食物 做相应的处理
    window.Game = Game;
})();