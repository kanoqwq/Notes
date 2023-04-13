"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//链队列
const LinkList_1 = __importDefault(require("./LinkList"));
class Queue {
    //构造器
    constructor(maxSize) {
        this._maxSize = maxSize;
        //初始化链表
        this._LinkList = new LinkList_1.default();
        this._head = this._LinkList.init([]);
        //头部是head节点，尾部也是
        this._front = this._LinkList; //头部,指向队列的前一个位置
        this._rear = -1; //尾部,指向队列尾部的数据(就是队列最后一个数据)
    }
}
exports.default = Queue;
