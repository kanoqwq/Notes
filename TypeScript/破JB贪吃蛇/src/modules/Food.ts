//food类
class Food {
    constructor() {
        //后面的!是非空断言
        this.element = document.getElementById('food')!;
    }

    //食物元素
    element: HTMLElement;

    //获取食物坐标
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    //食物位置更新
    changePos():void {
        //随机位置
        //食物一格是10
        //游戏区域宽度300
        let left = Math.floor(Math.random() * 29) * 10;
        let top = Math.floor(Math.random() * 29) * 10;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }
}
export default Food