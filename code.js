//update all distances to reachable nodes from currentNode before moving to the node with the smallest distance
//be sure to calculate total distance when traveling to nodes, not just take into account their original set distance (the single path distance)
//keep track of the node traveled from so the algorithm can know how to backtrack if necessary (?)
//need goal node (?)

function dijkstra(graph, sourceNode) {
    //var visited = [];
    var unvisited = []; //used to store nodes that haven't been visted yet
    var shortestDist = []; //used to store the shortest distances from sourceNode to all other nodes (final distance)
    for (row = 0; row < graph.length; row++) { //iterates over each node in the graph
        unvisited.push(row); //adds each node to unvisited since no nodes have been visited/processed
        shortestDist[row] = Infinity; //sets the shortest distance of each node to infinity, assuming nodes are initially unreachable
    }
    console.log("unvisited after for loop = ", unvisited);
    console.log("shortestDist after for loop = ", shortestDist);
    shortestDist[sourceNode] = 0; //sets the distance from sourceNode to itself as 0, since no travel is needed
    console.log("updated shortestDist = ", shortestDist);

    let currentNode = sourceNode; //represents the node to be processed next. Set to sourceNode since sourceNode is the first node being processed
    let minDist = Array(graph.length).fill(Infinity); //represents the shortest known distance among unvisited nodes. Used to know what node to travel to next (currentNode, the next unmarked node with the shortest distance). Initially set to infinity because a min distance hasn't been found yet
    minDist[sourceNode] = 0;
    console.log("minDist = ", minDist);
    while (unvisited.length != 0) { //runs until all nodes have been processed (unvisited is empty)
        for (let column = 0; column < graph.length; column++) { //iterates over all nodes
            if (!unvisited.includes(column)) {
                continue;
            }
            else if (graph[currentNode][column] > 0 && shortestDist[currentNode] + graph[currentNode][column] < shortestDist[column]) {
                console.log(graph[currentNode][column], " > 0 and ", graph[currentNode][column], " < ", minDist[column]);
                console.log("column = ", column);
                //console.log("shortestDist[unvisited[column]] = ", shortestDist[unvisited[column]]);
                minDist[column] = graph[currentNode][column];
            }

            // if (unvisited.includes(unvisited[column]) && shortestDist[column] > 0) {
            //     if (graph[sourceNode][column] + shortestDist[sourceNode] < shortestDist[column]) {
            //         shortestDist[column] = graph[sourceNode][column] + shortestDist[sourceNode];
            //         console.log("shortestDist = ", shortestDist);
            //     }
            // }

        }
        console.log("minDist after for loop = ", minDist);
        //console.log("graph[currentNode][unvisited.indexOf(minDist)]")
        let min = minDist[0];
        console.log("original min = ", min);
        for (let i = 0; i < minDist.length; i++) {
            if (!unvisited.includes(i)) {
                continue;
            }
            if (minDist[i] < min) {
                console.log(minDist[i], " < ", min);
                min = minDist[i];
                console.log("new min = ", min);
            }
        }
        currentNode = minDist.indexOf(min);
        console.log("currentNode after for loop = ", currentNode);
        unvisited = unvisited.filter(node => node !== currentNode); //remove the node being processed next (currentNode) from unvisited, as it will now be processed
        shortestDist[currentNode] = min;
        console.log("new shortestDist = ", shortestDist);

        //shortestDist[currentNode] = Math.min(minDist, graph[currentNode]graph[sourceNode][graph[sourceNode].indexOf(minDist)];
        //console.log("updated shortestDist after for loop = ", shortestDist);

    //     for (let column = 0; column < unvisited.length; column++) { //iterates over each unvisited node in the graph
    //         // console.log("currentNode = ", currentNode);
    //         // console.log("graph[currentNode] = ", graph[currentNode]);
    //         // console.log("graph[currentNode][unvisited[column]] = ", graph[currentNode][unvisited[column]]);
    //         //console.log("graph[currentNode][column] = ", graph[currentNode][column]);
    //         console.log("in second for loop");

    //         if (graph[currentNode][column] > 0 && shortestDist[currentNode] + graph[currentNode][column] < shortestDist[column]) { //if the distance from the node being processed and its neighbor + the shortest distance from sourceNode to its neighbor is less than the shortest known distance from sourceNode...
    //             console.log(graph[currentNode][column], "> 0 &&");
    //             console.log(shortestDist[currentNode], " + ", graph[currentNode][column], " < ", shortestDist[column]);
    //             // console.log("currentNode = ", currentNode);
    //             // console.log("graph[currentNode] = ", graph[currentNode]);
    //             // console.log("graph[currentNode][unvisited[column]] = ", graph[currentNode][unvisited[column]]);
    //             shortestDist[column] = shortestDist[currentNode] + graph[currentNode][column]; //set the shortest distance from sourceNode to its neighbor to the sum of the distance from the node being processed to the neighbor node and the shortest distance from sourceNode to its neighbor
    //             console.log("shortestDist = ", shortestDist);
    //             console.log("new currentNode = ", currentNode);
    //         }
    //     }
    //     console.log("shortestDist after if = ", shortestDist);

    //     console.log("currentNode before filter = ", currentNode);
    //     unvisited = unvisited.filter(node => node !== currentNode); //remove the node being processed next (currentNode) from unvisited, as it will now be processed
    //     console.log("filtered unvisited = ", unvisited);
    //     console.log("currentNode after filter = ", currentNode);
    }
    return shortestDist; //return the shortest distances from sourceNode to all other nodes
}

let matrix = [
    [0, 2, 1, 4, 0, 0, 0, 0],
    [0, 0, 1, 0, 10, 2, 0, 0],
    [9, 0, 0, 0, 8, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 4, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0]
];

//console.log(matrix[2][matrix[2].indexOf(8)]);
//console.log(matrix[2].indexOf(8));
console.log(dijkstra(matrix, 2))
