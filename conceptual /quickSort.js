var swap = function(items, leftPointerIndex, rightPointerIndex) { 
	//create temporary reference for the left item 
	var tempReference = items[leftPointerIndex];
	items[leftPointerIndex] = items[rightPointerIndex];
	items[rightPointerIndex] = tempReference;
}

var quickSort = function(items, leftIndex, rightIndex) { 
	console.log(items);
	// declare an index that will be our pivot reference 
	var pivotIndex; 

	// if the array has only one items, it's already sorted! 
	// if it has no items, wedon't want to try to sort it. 
	
	if (items.length > 1) { 
		// as long as the array has two items, we can partition it 
		pivotIndex = partition(items, leftIndex, rightIndex);

		console.log('** pivot is: ', items[pivotIndex]);

		// if the left reference hasn't been incremented to reach the pivot
		// yet, we want to keep comparing it. 
		
		if (leftIndex < pivotIndex - 1) { 
			quickSort(items, leftIndex, pivotIndex - 1);
		}

		// if the right reference hasn't reached the pivotIndex yet, we need to keep comparing it
		if (pivotIndex < rightIndex) { 
			quickSort(items, pivotIndex, rightIndex);
		}

	}
	return items;
}

// partition method takes a list of items, and left reference, as well as a right reference. Both left nad right are indices to indicate where the pointers should start 
var partition = function(items, left, right) { 
	// find the pivot by adding two indexes together and dividing by two 
	var pivot = items[Math.floor((left + right) / 2)]; 
	var l = left; 
	var r = right; 
	console.log('** pivot is: ', pivot);
    console.log('** left is: ', items[left]);
    console.log('** right is: ', items[right]);
	while ( l <= r) { 
		while (items[l] < pivot) { 
			l++;
			console.log('l is now pointing to: ', items[l]);

		}

		while (items[r] > pivot) { 
			r--;
            console.log('r is now pointing to: ', items[r]);

		}

		if (l <= r)  { 
            console.log('** now swapping l and r pointers: ', items[l], items[r]);

			swap(items, l, r); 
			l++; 
			r--;
		}
		console.log('items after swapping', items);
	}
	return l;
}

var its = [5, 4, 3, 2, 1]
var test = quickSort(its, 0, its.length - 1); 
console.log(test);














