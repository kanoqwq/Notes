//🐍类
class Snake {
    //🐍头
    head: HTMLElement;
    //🐍身体
    bodies: HTMLCollection
    //🐍容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snakehead')!;
        this.bodies = this.element.getElementsByTagName('div')
    }

    //🐍坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value) {
        if (this.X !== value) {
            //不能反向掉头
            if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
                //发生了掉头,且🐍想向右走，就不让他向右走
                if (value > this.X) {
                    value = this.X - 10
                } else {
                    value = this.X + 10
                }
            }
            if (value < 0 || value > 290) {
                //🐍被创了
                throw new Error('🐍被创了')
            }
            //🐍移动
            this.move(value, this.head.offsetTop);
        }

    }

    set Y(value) {
        if (this.Y !== value) {
            //不能反向掉头
            if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
                //发生了掉头,且🐍想向下走，就不让他向下走
                if (value > this.Y) {
                    value = this.Y - 10
                } else {
                    value = this.Y + 10
                }
            }
            //🐍被创了
            if (value < 0 || value > 290) {
                throw new Error('🐍被创了')
            }
            //🐍移动
            this.move(this.head.offsetLeft, value);
        }
    }

    //🐍长度增加
    addBody(): void {
        //插入element
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }

    //🐍身体移动
    //算法:下一节body的位置是上一节body的位置，head按照方向走
    private move(headX: number, headY: number) {
        //反向遍历(不包含🐍头)
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //这里用as是因为this.bodies是Element 是 HTMLElement的父类，不影响使用，使用类型断言强制一下就行了
            let prevX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let prevY = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = prevX + 'px';
            (this.bodies[i] as HTMLElement).style.top = prevY + 'px';
        }
        //🐍头后移动
        this.head.style.left = headX + 'px';
        this.head.style.top = headY + 'px';
    }

    //检测是否吃到自己
    public isEatSelf() {
        for (let i = 1; i < this.bodies.length; i++) {
            console.log(1)
            let body = (this.bodies[i] as HTMLElement)
            if(this.X === body.offsetLeft && this.Y === body.offsetTop){
                //代表吃到了自己
                throw new Error('🐍把自己咬死了')
            }
        }
    }

}

export default Snake;