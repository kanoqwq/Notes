import Graph from './utils/Graph';
//输入输出

(() => {
    try {


        let nodes = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'];

        let arcs = [[0, 3, 4, 5], [0, 2, 4], [4, 5], [0, 2, 5], [0, 1, 2], [0, 2, 3]]

        let graph = new Graph<number>(nodes.length);
        graph.init(nodes, arcs!);

        let result = graph.GraphsTraver('dfs', 1);
        console.log(result);
		

    } catch (e) {

        console.log(e);
        alert(e)

    }
})()
