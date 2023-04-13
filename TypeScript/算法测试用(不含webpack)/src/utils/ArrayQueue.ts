//使用数组模拟队列
class ArrayQueue<T> {
    //构造器
    constructor(arrMaxSize: number) {
        this._maxSize = arrMaxSize;
        // 初始化数组(感觉没必要)
        this._arr = new Array<T>();
        //头部和尾部一开始是相等的
        this._front = -1;//头部,指向队列的前一个位置
        this._rear = -1//尾部,指向队列尾部的数据(就是队列最后一个数据)
    }
    //数组的最大容量
    private _maxSize: number;
    //队头队尾
    private _front: number;
    private _rear: number;
    //存放数据的数组,模拟队列
    private _arr: Array<T>;

    //判断队列是否满
    public isFull(): boolean {
        //队列是从0号元素开始的
        return this._rear >= this._maxSize - 1;
    }

    //判断队列是否为空
    public isEmpty() {
        return this._rear === this._front
    }

    //入队列
    public push(item: T): void {
        //判断队列是否满
        if (this.isFull()) {
            throw new Error('队列已满!');
        }
        //rear后移
        this._rear++;
        this._arr[this._rear] = item;
    }

    //出队列
    public pop(): T {
        //判断队列是否空
        if (this.isEmpty()) {
            throw new Error('队列为空!');
        }
        //front后移
        this._front++;
        let popednum:T = this._arr[this._front];
        //弹出数组第一个元素
        this._arr.shift();
        return popednum;
    }

    //显示队列所有数据
    public show(): void {
        //判断队列是否空
        if (this.isEmpty()) {
            throw new Error('队列为空!');
        }
        //遍历
        let tmp = '';
        for (let i = 0; i < this._arr.length; i++) {
            tmp += this._arr[i] + ' ';

        }
        tmp = tmp.trim();
        console.log(tmp);
        
    }

    //显示队列的头数据
    public head(): T {
        //判断队列是否空
        if (this.isEmpty()) {
            throw new Error('队列为空!');
        }
        let { _front, _arr } = this;
        return _arr[_front + 1];
    }
}
export default ArrayQueue;