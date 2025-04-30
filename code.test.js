const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const test = jsc.forall("array (pair nat nat)", function(edges) {
    let max = edges.reduce((a, b) => Math.max(a, Math.max(b[0], b[1])), 0);
  
    let graph = Array.from({ length: max + 1 }, () =>
        Array(max + 1).fill(0)
    );
  
    for (let i = 0; i < edges.length; i++) {
        let [u, v] = edges[i];
        let weight = Math.floor(Math.random() * 10) + 1;
        graph[u][v] = weight;
    }

    let source = 0;
    let distances = dijkstra(graph, source);

    for (let u = 0; u <= max; u++) {
        for (let v = 0; v <= max; v++) {
            if (graph[u][v] > 0 && distances[u] !== Infinity) {
                if (distances[v] > distances[u] + graph[u][v]) {
                    return false; // Shortest path condition violated
                }
            }
        }
    }

    for (let i = 0; i <= max; i++) {
        if (distances[i] === Infinity) {
            let reachable = false;
            for (let j = 0; j <= max; j++) {
                if (graph[j][i] > 0 && distances[j] !== Infinity) {
                    reachable = true;
                    break;
                }
            }
            if (reachable) return false;
        }
    }

    return true;
});

jsc.assert(test, { tests: 1000 });
