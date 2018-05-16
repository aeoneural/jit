/* 

problem: given an array nums containing n + 1 integers where each int is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one 

you must not modify the array 
use only constant space 
runtime < O(n^2)

strategies: 
1. Binary Search 
    for each selected number (mid), count all the numbers equal to or less than mid 
        if count >  number, search space will be [1, mid]
        else [mid + 1, n]
    includes pigeon hole principle 
2. Linked list cycle detection method 
    substract 1 from each element in the array
    choose the last element as the head of linked list 
    example: 
        index: 0 1 2 3 4 5 
        value: 2 5 1 1 4 3 
        -- substract 1 from values 
        index: 0 1 2 3 4 5
        value: 1 4 0 0 3 2

        5 -> 2 -> 0 <- 3 
                  |    | cycle here 
                  ˇ    |
                  4 -> 3 
*/
