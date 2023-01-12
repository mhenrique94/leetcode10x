from array import ArrayType
from typing import List


class Solution:
    def getConcatenation(nums: List[int]) -> List[int]:
        # output_array = []
        # count = len(nums) * 2
        # length = 0
        # while length <= count:
        #     output_array.append(nums[len(output_array)])
        #     length = len(output_array)


      output_array = nums.copy() + nums.copy()
      return output_array

    print(getConcatenation([1,2,1]))