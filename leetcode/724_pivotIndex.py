class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        left = []
        left.append(0)
        right = []
        
        ltotal = nums[0]
        
        for i in range(1, len(nums)): 
            left.append(ltotal)
            ltotal += nums[i]

        rtotal = nums[len(nums) - 1]
        right.append(0)
        for i in range(len(nums) - 2, -1, -1): 
            right.append(rtotal)
            rtotal += nums[i]
        right = list(reversed(right))

        for i in range(0, len(nums)): 
            if (left[i] == right[i]): 
                return i
        return -1

test = Solution()
test.pivotIndex([1,7,3,6,5,6])

