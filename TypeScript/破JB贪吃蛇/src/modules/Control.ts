//Game Controller
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    constructor(mode: string = 'ez') {
        //初始化
        if (mode == 'ez') {
            this.mode = 400
        }
        if (mode == 'mid') {
            this.mode = 300
        }
        if (mode == 'hd') {
            this.mode = 200
        }
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(10, 10)
        this.init();
    }

    //🐍 食物 记分牌
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    //🐍按键方向
    direction: string = 'd';
    //🐍挂了没
    isAlive: boolean = true;
    //游戏难度
    mode: number = 300;

    //初始化游戏
    init(): void {
        //绑定按键
        document.addEventListener('keydown', (this.keypressHandler).bind(this))
        //移动🐍
        this.move()
    }

    //触控按钮触发方法
    public ChangeDirection(key: string) {
        if (key == 'w' || key == 'a' || key == 's' || key == 'd') {
            this.direction = key;
        }
    }

    //键盘触发方法
    keypressHandler(e: KeyboardEvent) {
        let key = e.key.toLowerCase();
        if (key == 'w' || key == 'a' || key == 's' || key == 'd') {
            this.direction = key;
        }
    }

    //🐍移动
    move() {
        /**
         * 向上 top-- 向左 left--
         * 向下 top++ 向右 left++
         **/
            //获取🐍坐标
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case'w':
                Y -= 10;
                break;
            case'a':
                X -= 10;
                break;
            case's':
                Y += 10;
                break;
            case'd':
                X += 10;
                break;
        }
        //检测是否get到食物
        this.checkAte(X, Y)
        try {
            this.snake.X = X
            this.snake.Y = Y
            //检测🐍重叠
            this.snake.isEatSelf()
        } catch (e) {
            alert(e + `\n你的得分是：${this.scorePanel.score}`)
            //🐍🐍挂了
            this.isAlive = false
            //直接刷新算了
            location.reload()
        }

        //设置timeout定时器，递归调用run （喵）
        this.isAlive && setTimeout(this.move.bind(this), this.mode - (this.scorePanel.level - 1) * 20)
    }

    //检查🐍是否吃到食物
    checkAte(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            //变换位置
            this.food.changePos()
            //加分
            this.scorePanel.addScore()
            //🐍变长
            this.snake.addBody()
        }
    }
}

export default GameControl;