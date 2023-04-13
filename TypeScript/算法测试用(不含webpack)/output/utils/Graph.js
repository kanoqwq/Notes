"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//图
const NODE_1 = __importDefault(require("./NODE"));
const CircleQueue_1 = __importDefault(require("./CircleQueue"));
class Graph {
    constructor(nodeCount) {
        //初始化图长度
        this._nodeCount = nodeCount;
        this._headList = new Array();
        //寻访过的节点，和节点个数一样，下标一一对应，为false
        this._visitedNode = new Array();
        for (let i = 0; i < nodeCount; i++) {
            this._visitedNode.push(false);
        }
        //初始化队列
        this._tempQueue = new CircleQueue_1.default(nodeCount);
        this._printStr = '';
    }
    get nodeCount() {
        return this._nodeCount;
    }
    //初始化头节点中的子节点
    //格式：字符串数组用空格分开
    init(data, pointIndex) {
        // 1 2 3 4 5 6 7 # 7 7 7 7 7 7 7 #
        //循环
        data.forEach((element) => {
            this._headList.push(new NODE_1.default(element));
        });
        //输入
        for (let i = 0; i < pointIndex.length; i++) {
            let curHead = this._headList[i];
            for (let j = 0; j < pointIndex[i].length; j++) {
                //防止用户输入越界
                if (pointIndex[i][j] >= data.length || pointIndex[i][j] < 0) {
                    throw new Error('您的下标输入有误');
                }
                curHead.next = new NODE_1.default(pointIndex[i][j]);
                curHead = curHead.next;
            }
        }
    }
    //DFS
    DFS(index) {
        if (this.isOverFlow(index)) {
            throw new Error('您的下标输入有误');
        }
        this.visit(this._headList[index].data);
        //标记当前节点为访问过
        this._visitedNode[index] = true;
        //p为第一个arc
        let p = this._headList[index].next;
        while (p) {
            if (this._visitedNode[p.data] !== true) {
                this.DFS(p.data);
            }
            p = p.next;
        }
    }
    //BFS
    BFS(index) {
        if (this.isOverFlow(index)) {
            throw new Error('您的下标输入有误');
        }
        //先访问节点
        this.visit(this._headList[index].data);
        this._visitedNode[index] = true;
        //入队列
        this._tempQueue.push(index);
        //当队列不为空
        while (this._tempQueue.isEmpty() == false) {
            //从队列取出节点，并获得该节点的第一个弧
            let val = this._tempQueue.pop();
            let Arc = this._headList[val].next;
            //当节点数据不为空
            while (Arc != null) {
                //当取出来的节点没有被访问过
                if (this._visitedNode[Arc === null || Arc === void 0 ? void 0 : Arc.data] === false) {
                    //访问节点
                    this.visit(this._headList[Arc === null || Arc === void 0 ? void 0 : Arc.data].data);
                    this._visitedNode[Arc === null || Arc === void 0 ? void 0 : Arc.data] = true;
                    //推入队列中
                    this._tempQueue.push(Arc === null || Arc === void 0 ? void 0 : Arc.data);
                }
                Arc = Arc.next;
            }
        }
    }
    //图遍历
    GraphsTraver(howTo, startIndex) {
        this._printStr = '';
        let regexp = /^(BFS)|(DFS)$/;
        howTo = howTo.trim().toUpperCase();
        if (regexp.exec(howTo)) {
            howTo = regexp.exec(howTo)[0];
        }
        else {
            throw new Error('参数只能包含 BFS或者DFS ');
        }
        //如果有定义开始位置，那么就从该点出发
        if (startIndex) {
            howTo == 'BFS' ? this.BFS(startIndex) : this.DFS(startIndex);
        }
        //遍历
        for (let i = 0; i < this.nodeCount; i++) {
            if (!this._visitedNode[i]) {
                howTo == 'BFS' ? this.BFS(i) : this.DFS(i);
            }
        }
        return this._printStr;
    }
    //访问节点
    visit(str) {
        this._printStr += str + ' ';
    }
    //是否越界
    isOverFlow(num) {
        return num >= this._nodeCount || num < 0;
    }
}
exports.default = Graph;
