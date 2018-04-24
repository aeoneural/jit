class Solution(object):
    def toHex(self, num):
        """
        :type num: int
        :rtype: str
        """
        ret = ''
        letter = ('0', '1','2','3','4','5','6','7','8','9','a','b','c','d','e','f')
        if num == 0: return '0'
        if num < 0: num += 2**32
        while num != 0:
            
            print(letter[num & 15])
            # if num < 16: 
            #     ret = letter[num % 16] + ret
            # else: 
            #     ret = str(num % 16) + ret 
            ret = letter[num&15] + ret
            num >>= 4
        return ret
test = Solution()
test.toHex(26)    