var Graph = function() { 
    this.vertices = []
    this.edges = []
    this.numberOfEdges = []
}

Graph.prototype.addVertex = function(vertex) { 
    this.vertices.push(vertex);
    this.edges[vertex] = []; 
}
Graph.prototype.removeVertex = function(vertex) {
    // check if the vertex exists in the vertices array 
    var index = this.vertices.indexOf(vertex)
    
    if (index) { 
        this.vertices.splice(index, 1);
    }
    while (this.edges[vertex].length) { 
        var adjacentVertex = this.edges[vertex].pop();
        this.removeEdges(adjacentVertex, vertex);
    }

}
Graph.prototype.addEdges = function(vertex1, vertex2) { 

    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
    this.numberOfEdges++;
}
Graph.prototype.removeEdges = function(vertex1, vertex2) { 
    var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1; 
    var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1; 

    if (vertex1 !== -1) { 
        this.edges[vertex1].splice(index1, 1);
        this.numberOfEdges--;
    }
    if (vertex2 !== -1) { 
        this.edges[vertex2].splice(index2, 1);
    }
}

Graph.prototype.traverseDFS = function (vertex, fn) {
    if (this.vertices.indexOf(vertex) !== -1) {
        var visited = [];
        return this._traverseDFS(vertex, visited, fn)
    }
    console.log('the vertex was not found');
}
Graph.prototype._traverseDFS = function (vertex, visited, fn) {
    // visited[vertex] = true;
    // // fn(vertex);
    // if (this.edges[vertex] !== undefined) fn(vertex);

    // for (var i = 0; i < this.edges[vertex].length; i++) {
        
    //     if (!visited[this.edges[vertex][i]]) { 
    //         this._traverseDFS(this.edges[vertex][i], visited, fn);
    //     }
    // }
    var stack = [vertex];
    
    while (stack.length > 0) { 
        var currentNode = stack.pop(); 
        fn(currentNode)
        visited[currentNode] = true;
        for (var i = 0; i < this.edges[currentNode].length; i++) { 
            if (visited[this.edges[currentNode][i]] !== true || stack.indexOf(this.edges[currentNode][i]) !== -1) { 
                // visited[this.edges[currentNode][i]] = true;
                stack.push(this.edges[currentNode][i]);
            }
        }
    }

}

Graph.prototype.traverseBFS = function(vertex, fn) {
    if (this.vertices.indexOf(vertex) === -1) { 
        console.log('vertex not found');
    } 
    var queue = [];
    queue.push(vertex);
    var visited = [];
    visited[vertex] = true;
    var current = 0;
    var end = 0;  

    while (current <= end) { 
        // console.log('queue: ', queue);
        var currentNode = queue[current++];
        fn(currentNode)
        var neighborVertices = this.edges[currentNode];
        for (var i = 0; i < neighborVertices.length; i++) {
            var element = neighborVertices[i];
            
            if (!visited[element]) {
                visited[element] = true;
                queue.push(element);
                end++;
            }
        }
    }

}



var test = new Graph(); 
console.log(test);
test.addVertex(1);
test.addVertex(2);
test.addVertex(3);
test.addEdges(1, 3)
test.addEdges(2, 3)
test.addVertex(4)
test.addEdges(3, 4)
test.addEdges(2, 4);
test.addVertex(5)
test.addEdges(1, 5);
console.log(test);
console.log('bfs');
test.traverseBFS(2, function(value){console.log(value)});
console.log();
console.log('dfs');
test.traverseDFS(2, function(value){console.log(value)})

