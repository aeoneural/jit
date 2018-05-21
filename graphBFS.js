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
var test = new Graph(); 
console.log(test);
test.addVertex(1);
test.addVertex(2);
test.addVertex(3);
test.addEdges(1, 3)
test.addEdges(2, 3)
test.removeEdges(1, 3)
console.log(test);

