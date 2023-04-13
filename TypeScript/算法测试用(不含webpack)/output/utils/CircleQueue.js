"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//使用数组模拟队列
class CircleQueue {
    //构造器
    constructor(arrMaxSize) {
        //需要预留一个
        this._maxSize = arrMaxSize + 1;
        // 初始化数组(感觉没必要)
        this._arr = new Array();
        //头部和尾部一开始是相等的
        this._front = 0;
        this._rear = 0;
    }
    //判断队列是否满
    isFull() {
        let { _rear, _maxSize, _front } = this;
        return (_rear + 1) % _maxSize === _front;
    }
    //判断队列是否为空
    isEmpty() {
        return this._rear === this._front;
    }
    //入队列
    push(item) {
        //判断队列是否满
        if (this.isFull()) {
            throw new Error('队列已满!');
        }
        //加入数据
        this._arr[this._rear] = item;
        this._rear = (this._rear + 1) % this._maxSize;
    }
    //出队列
    pop() {
        //判断队列是否空
        if (this.isEmpty()) {
            throw new Error('队列为空!');
        }
        //取出数据
        let val = this._arr[this._front];
        this._front = (this._front + 1) % this._maxSize;
        return val;
    }
    //显示队列所有数据
    show() {
        //判断队列是否空
        if (this.isEmpty()) {
            throw new Error('队列为空!');
        }
        let { _front, _rear, _maxSize } = this;
        //遍历
        let tmp = '';
        for (let i = _front; i < _front + this.length(); i++) {
            //% _maxSize 防止越界
            tmp += 'arr[' + i % _maxSize + ']=' + this._arr[i % _maxSize] + ' ';
        }
        tmp = tmp.trim();
        console.log(tmp);
    }
    //显示队列的头数据
    head() {
        //判断队列是否空
        if (this.isEmpty()) {
            throw new Error('队列为空!');
        }
        let { _front, _arr } = this;
        return _arr[_front];
    }
    //计算队列有效数据个数
    length() {
        let { _front, _rear, _maxSize } = this;
        let sum;
        sum = (_rear - _front + _maxSize) % _maxSize;
        return sum;
    }
}
exports.default = CircleQueue;
