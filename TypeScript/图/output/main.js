"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Graph_1 = __importDefault(require("./Graph"));
//输入输出
(() => {
    try {
        let nodes = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'];
        let arcs = [[0, 3, 4, 5], [0, 2, 4], [4, 5], [0, 2, 5], [0, 1, 2], [0, 2, 3]];
        let graph = new Graph_1.default(nodes.length);
        graph.init(nodes, arcs);
        let result = graph.GraphsTraver('bfs', 1);
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
})();
