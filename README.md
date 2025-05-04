# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

-----

My implementation has a complexity of big $\Theta(V^2)$, where V is the number of nodes in the graph.  This comes from the while loop, which has the greatest effect on the algorithm's runtime complexity.  I added comments to my code that further explains/shows how I got my answer.

-----

I received help from Ali and ChatGPT.  Both of them mainly helped me understand the errors I was getting when I would attempt to test my code, especially if the test wouldn't pass or fail at all but would run infinitely.  ChatGPT also helped me understand more of how Dijkstra's algorithm works in depth, which helped me compare my code and its outcome with what should actually be happening.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
