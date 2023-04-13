"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//链表
const NODE_1 = __importDefault(require("./NODE"));
class LinkList {
    constructor(length = 0) {
        this._length = length;
    }
    get length() {
        return this._length;
    }
    get getHead() {
        return this.head;
    }
    //初始化链表(返回头节点)
    init(arr) {
        if (!arr) {
            throw new Error('初始化内容为空!');
        }
        //长度保存
        this._length = arr.length;
        //头节点初始化,不存用户数据
        this.head = new NODE_1.default('HEADNODE DO NOT MODIFY');
        //如果初始化的是一个空链表
        if (arr.length === 0) {
            this.head.next = null;
            return this.head;
        }
        else {
            let p = new NODE_1.default(arr[0]);
            this.head.next = p;
            arr.forEach((item, index) => {
                if (index != 0) {
                    p.next = new NODE_1.default(item);
                    p = p.next;
                }
            });
            p.next = null;
            return this.head;
        }
    }
    //输出链表
    print() {
        var _a;
        if (!this.head) {
            throw new Error('链表未初始化!');
        }
        let p = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        //链表为空
        if (!p) {
            return;
        }
        //一次性输出
        let str = '';
        while (p != null) {
            // console.log(p.data);
            str += p.data;
            str += ' ';
            p = p.next;
        }
        console.log(str);
    }
    //插入数据(之后) 类型是数组,或者其他数据(不填默认插入到最后)
    insert(Arr, index = this.length) {
        if (!(Arr === null || Arr === void 0 ? void 0 : Arr.length)) {
            throw new Error('插入的数据为空!');
        }
        if (!this.head) {
            throw new Error('链表未初始化!');
        }
        if (index < 0 || index > this.length) {
            throw new Error('index输入错误或者越界!');
        }
        //开始插入
        let p = this.head.next;
        let i = 1;
        //插入的如果是第一个节点
        if (index === 0) {
            let newHead = new LinkList(Arr.length).init(Arr);
            this.head.next = newHead.next;
            //遍历到最后
            while (newHead.next) {
                newHead = newHead.next;
            }
            newHead.next = p;
        }
        while (p) {
            //找到插入点
            if (i === index) {
                //保存p的下一节点数据
                let tmp = p.next;
                //创建一个新表
                let newLink = new LinkList(Arr.length);
                //初始化并返回表头
                let linkHead = newLink.init(Arr);
                //开始拼接 (linkHead.next是第一个元素) 
                p.next = linkHead.next;
                //遍历到最后一个节点
                while (linkHead.next != null) {
                    linkHead = linkHead.next;
                }
                ;
                linkHead.next = tmp;
                //实例链表总长度增加
                this._length += Arr.length;
            }
            p = p.next;
            i++;
        }
    }
    //删除数据
    delete(item) {
        var _a, _b, _c, _d, _e;
        let isFind = false;
        //搜索
        if (item == undefined) {
            throw new Error("没有数据!");
        }
        let p = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
        //删除的是第一个
        if ((p === null || p === void 0 ? void 0 : p.data) == item) {
            this.head.next = ((_c = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.next);
            isFind = true;
        }
        while (p === null || p === void 0 ? void 0 : p.next) {
            if (((_d = p.next) === null || _d === void 0 ? void 0 : _d.data) == item) {
                //抹掉数据
                p.next.data = undefined;
                let tmp = (_e = p.next) === null || _e === void 0 ? void 0 : _e.next;
                p.next = tmp;
                isFind = true;
                break;
            }
            p = p.next;
        }
        if (!isFind) {
            throw new Error('没有找到需要删除的数据!');
        }
    }
}
exports.default = LinkList;
