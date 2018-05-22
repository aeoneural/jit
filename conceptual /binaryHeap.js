var BinaryHeap = function() { 
    this.heap = [];
    
    this.compare = function(i, j) { return i < j};
    this.minChild = function(k) { 
        var i = k * 2 + 1; 
        var j = k * 2 + 2; 

        if (this.heap[i] && this.heap[j]) { 
            return this.heap[i] < this.heap[j] ? i : j; 
        }
        if (i === this.heap.length - 1) { 
            return i
        } 
        return undefined; 
    }
    this.swap = function(i, j) { 
        var temp = this.heap[i]; 
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }


}

BinaryHeap.prototype.getRoot = function() { 
    return this.heap[0];
}
BinaryHeap.prototype.insert = function(value) { 
    var j = this.heap.length 
    var i
    // insert the new value at the end of the heap 
    // bubble up
    this.heap.push(value);
    
    while (j !== 0) { 
        i = j; 
        j = Math.floor((i - 1) / 2);
        // if current element is smaller than the parent
        if (this.compare(this.heap[i], this.heap[j])) { 
            this.swap(i, j);
        } else { 
            break;
        }
    }

}

BinaryHeap.prototype.removeRoot = function() {
    // swap the root with last element and remove last element
    // bubble down 
    this.swap(0, this.heap.length - 1);
    var removed = this.heap.pop();
    var i = 0, j; 

    while (i < this.heap.length){ 
        j = i; 
        i = this.minChild(j); 
        if (!i) break 
        if (this.compare(this.heap[i], this.heap[j])) { 
            this.swap(i, j);
        }
    }
    return removed; 
    
}
BinaryHeap.prototype.size = function() { 
    return this.heap.length; 
}

var HeapSort = function(input) { 
    console.log('hello')
    var container = new BinaryHeap(); 
    input.map((element) => { 
        container.insert(element);
    })
    console.log(container)
    for (var i = 0; i < input.length; i++) { 
        console.log(container.removeRoot());
    }
}
var input = [5, 4, 3, 2, 1]
HeapSort(input)