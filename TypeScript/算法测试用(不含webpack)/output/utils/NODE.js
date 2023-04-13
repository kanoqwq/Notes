"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//节点
class NODE {
    //构造器
    constructor(data) {
        //下一个节点
        this.next = null;
        this._data = data;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
}
exports.default = NODE;
