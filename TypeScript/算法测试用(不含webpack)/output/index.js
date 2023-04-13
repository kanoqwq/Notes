"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkList_1 = __importDefault(require("./utils/LinkList"));
//输入输出
(() => {
    try {
        //链表反转
        let link = new LinkList_1.default();
        let link2 = new LinkList_1.default();
        link.init([1, 3, 4, 5, 7, 9, 11, 12]);
        link2.init([2, 6, 8, 10, 22, 33, 123]);
        // link = LinkList.reverse(link);
        // link.reversePrint()
        let pp = LinkList_1.default.mergeLink(link, link2);
        pp.print();
    }
    catch (e) {
        console.log(e);
    }
})();
