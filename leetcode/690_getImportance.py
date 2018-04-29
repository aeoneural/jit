"""
# Employee info
class Employee:
    def __init__(self, id, importance, subordinates):
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates
"""
class Solution:
    def getImportance(self, employees, id):
        """
        :type employees: Employee
        :type id: int
        :rtype: int
        """
        # linear iteration
        table = {}
        index = -1
        for i in range(len(employees)): 
                table[employees[0][0]] = employees[1]
                if (employees[i][0] == id): 
                        index = i
        sum = 0
        for i in range(len(employees[index])): 
                sum += table[employees[index][i]]

        return sum

test = Solution()

# rest = test.getImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1)

