var containsCycle = function(firstNode) { 
    // two runners 
    var slowRunner = firstNode; 
    var fastRunner = secondNode; 


    // untile we hit the end of the list 

    while (fastRunner && fastRunner.next) { 
        slowRunner = slowRunner.next; 
        fastRunner = fastRunner.next.next;
        if (fast === slow) { 
            return true;
        }
    }
    return false;
}