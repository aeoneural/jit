
/**
 * 
 * @param {array} input 
 * @return {array} sorted
 * @author Aygerim
 * 
 * @references: geeksforgeeks, basecs 
 * 
 * QuickSort 
 * =========
 * 
 * Strategy: 
 * 1. Determine pivot 
 * 
 * 2. Partition the unsorted collection in two smaller lists. 
 * 
 * Runtime Complexity: O(nlogn)
 * Space Complexity: O(1);
 * Pseudocode: 
 * 1. Choose a pivot 
 * 2. Create a left reference, pointing to element at the lowest index 
 * 3. Create a right reference, pointing to the element at highest index 
 * 4. While left ref is less than the pivot, move the pointer to one element to the right. While right ref is greater than the pivot, move the pointer one element to the left. 
 * 5. if both left ref is greater than pivot and right reference is smaller than pivot, swap the elements at the two references. 
 * 6. Once the index of the left reference is greater than the index of the right reference, swap the pivot with the element at the left ref. 
 * 
 */


// The partition() method takes a list of items, and left reference, as well as a right reference. Both left and right are indexes to indicate where the pointers should start 
var swap = function (items, leftPointerIndex, rightPointerIndex) {
    // Create a temporary reference for the left item.
    var tempReference = items[leftPointerIndex];

    // Move left item to the index that contains right item.
    // Move right item to the temporary reference.
    items[leftPointerIndex] = items[rightPointerIndex];
    items[rightPointerIndex] = tempReference;
}
var partition = function(items, left, right) { 
    // find the pivot by adding the two indexes together and dividing by two 
    var pivot = items[Math.floor((right + left) / 2)]; 
    var l = left;
    var r = right; 

    // once the left is greater than the right, we have finished sorting this set of items, and we can return 
    while (l <= r) { 
        // if the left pointer is less than the pivot, increment it. In other words, move the pointer to the right 
        while (items[l] < pivot) { 
            l++; 

        }

        // if the right pointer is greater than the pivot, decrement it. In other words, move the pointer to the left. 
        while (items[r] > pivot) { 
            r--; 
        }
        if (l <= r) {
            swap(items, l, r);

            l++;
            r--;
        }
    }

    
    return l;
}
var quickSort = function(items, leftIndex, rightIndex) { 
    // declare an index that will be out pivot reference. 
    var pivotIndex; 

    // if the arr has only one item, it's already sorted
    if (items.length > 1) { 
        pivotIndex = partition(items, leftIndex, rightIndex);

        // if the left reference hasn't been incremented to reach the pivot yet, we want to keep comparing it. 
        if (leftIndex < pivotIndex - 1) { 
            quickSort(items, leftIndex, pivotIndex - 1);
        }

        // if the right ref hasn't been reached the pivotIndex yet, we need to keep comparing it. 

        if (pivotIndex < rightIndex) { 
            quickSort(items, pivotIndex, rightIndex);
        }
    }
    return items;
}

var items = [19, 22, 63, 105, 2, 46];
var test = quickSort(items, 0, items.length - 1);
console.log(items)