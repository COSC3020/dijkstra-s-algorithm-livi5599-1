function dijkstra(graph, sourceNode) {
    var unvisited = [];
    var shortestDist = [];
    for (row = 0; row < graph.length; row++) {
        unvisited.push(row);
        shortestDist[row] = Infinity;
    }
    shortestDist[sourceNode] = 0;

    let currentNode = sourceNode;
    while (unvisited.length != 0) {
        for (let column = 0; column < graph.length; column++) {
            if (!unvisited.includes(column)) {
                continue;
            }
            else if (graph[currentNode][column] > 0 && shortestDist[currentNode] + graph[currentNode][column] < shortestDist[column]) {
                shortestDist[column] = shortestDist[currentNode] + graph[currentNode][column];
            }
        }
        unvisited = unvisited.filter(node => node !== currentNode);
        let minDist = Infinity;
        for (let node of unvisited) {
            if (shortestDist[node] < minDist) {
                minDist = shortestDist[node];
                currentNode = node;
            }
        }
        if (Math.min(shortestDist)) {
            return shortestDist;
        }
        
        if (currentNode === undefined) break;
    }
    return shortestDist;
}
