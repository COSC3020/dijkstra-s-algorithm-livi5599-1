function dijkstra(graph, sourceNode) { //O(V^2)
    var unvisited = []; //O(1)
    var shortestDist = []; //O(1)
    for (row = 0; row < graph.length; row++) { //runs V times -> O(V)
        unvisited.push(row); //O(1)
        shortestDist[row] = Infinity; //O(1)
    }
    shortestDist[sourceNode] = 0; //O(1)

    let currentNode = sourceNode; //O(1)
    while (unvisited.length != 0) { run V times -> O(V^2)
        for (let column = 0; column < graph.length; column++) { //runs V times -> O(V)
            if (!unvisited.includes(column)) { //O(1)
                continue;
            }
            else if (graph[currentNode][column] > 0 && shortestDist[currentNode] + graph[currentNode][column] < shortestDist[column]) { //O(1)
                shortestDist[column] = shortestDist[currentNode] + graph[currentNode][column];
            }
        }
        unvisited = unvisited.filter(node => node !== currentNode); //O(V)
        let minDist = Infinity; //O(1)
        for (let node of unvisited) { //runs V times -> O(V)
            if (shortestDist[node] < minDist) { //O(1)
                minDist = shortestDist[node]; //O(1)
                currentNode = node; //O(1)
            }
        }
        if (minDist == Infinity) { //O(1)
            break;
        }
    }
    return shortestDist; //O(1)
}
