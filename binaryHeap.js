/**
 * Priority Queue 
 * 
 * @author Aygerim 
 * @reference: geeksforgeeks, 
 * Strategy: 
 * 
 * Runtime: 
 *      insert: O(log(n)) 
 *      removeRoot(min or max): O(log(n))
 *      findMin: O(1);
 * HeapSort Runtime: O(n(log(n)))
 * 
 */
var BinaryHeap = function() { 
    this.heap = []; 
    this.compare = (i, j) => { return i < j}; 
    this.swap = (i, j) => { 
        var temp = this.heap[i]; 
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    // this compare function will result in minHeap
    this.findMin = (k) => { 
        // get the children of the current k node 
        let i = k * 2 + 1; 
        let j = k * 2 + 2; 
        if (this.heap[i] && this.heap[j]) { 
            return this.heap[i] < this.heap[j] ? i : j; 
        }
        if (i === this.heap.length - 1) { 
            return i; 
        } 
        return undefined;
    }
}

BinaryHeap.prototype.getRoot = function() { 
    return this.heap[0];
}
BinaryHeap.prototype.insert = function(value) { 
    var j = this.heap.length; 
    var i; 
    this.heap.push(value);
    while (j !== 0) { 
        i = j; 
        j = Math.floor((i - 1) / 2); 
        // max heap
        if (this.compare(this.heap[i], this.heap[j])) {
            this.swap(i, j); 
        } else { 
            break;
        }
    }
    // console.log('after insert: ', this.heap)
}

BinaryHeap.prototype.removeRoot = function() { 
    this.swap(0, this.heap.length - 1);
    var removed = this.heap.pop();

    var i = 0; 
    var j;  
    while (i < this.heap.length) {
        j = i; 
        i = this.findMin(j);
        if (!i){ 
            break;
        }
        if (this.compare(this.heap[i], this.heap[j])) { 
            this.swap(i, j);
        }
    }
    return removed;
}

BinaryHeap.prototype.size = function() { 
    return this.heap.length; 
}

var heapsort = (input) => { 
    var container = new BinaryHeap(); 
    input.map((element) => { 
        container.insert(element);
    })
    console.log('container', container)
    // console.log(container.removeRoot())
    for (var i = 0; i < input.length; i++){ 
        console.log(container.removeRoot());
    }
}

heapsort([2,3,1,4]);