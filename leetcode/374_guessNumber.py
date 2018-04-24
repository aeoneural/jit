# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):

class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        i = 0 
        j = n 
        
        while i < j: 
            mid = (i + j) / 2
            if guess(mid) == 0: 
                return mid
            elif guess(mid) == 1: 
                i = mid + 1
            else: 
                j = mid
        
        return i

test = Solution()
print test.guessNumber(4)