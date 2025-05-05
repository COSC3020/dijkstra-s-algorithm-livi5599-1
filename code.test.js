const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const test = jsc.forall("array (pair nat nat)", function(edges) {
    let max = edges.reduce((a, b) => Math.max(a, Math.max(b[0], b[1])), 0);
  
    // Create an adjacency matrix with the same size as the number of nodes
    let graph = Array.from({ length: max + 1 }, () => Array(max + 1).fill(0));
  
    // Randomly add edges, some nodes will be unreachable
    for (let i = 0; i < edges.length; i++) {
        let [u, v] = edges[i];
        let weight = Math.floor(Math.random() * 10) + 1;
        graph[u][v] = weight;
    }

    // Randomly ensure some nodes are isolated or have no edges to simulate disconnected components
    // Loop through nodes and remove some edges
    for (let u = 0; u <= max; u++) {
        if (Math.random() < 0.3) { // 30% chance to leave a node isolated
            for (let v = 0; v <= max; v++) {
                graph[u][v] = 0;
                graph[v][u] = 0;
            }
        }
    }

    let source = 0;
    let distances = dijkstra(graph, source);

    // Ensure no shortest path conditions are violated
    for (let u = 0; u <= max; u++) {
        for (let v = 0; v <= max; v++) {
            if (graph[u][v] > 0 && distances[u] !== Infinity) {
                if (distances[v] > distances[u] + graph[u][v]) {
                    return false; // Shortest path condition violated
                }
            }
        }
    }

    // Ensure that nodes with Infinity distance are not reachable
    for (let i = 0; i <= max; i++) {
        if (distances[i] === Infinity) {
            let reachable = false;
            for (let j = 0; j <= max; j++) {
                if (graph[j][i] > 0 && distances[j] !== Infinity) {
                    reachable = true;
                    break;
                }
            }
            if (reachable) return false; // Unreachable node should not be reachable
        }
    }

    return true;
});

jsc.assert(test, { tests: 1000 });
