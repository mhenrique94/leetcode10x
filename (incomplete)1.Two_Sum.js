/*
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109

Only one valid answer exists.

*/

var twoSum = function (nums, target) {
  let result_array = [];
  let res = 0;
  let array_sorted = [...nums].sort((a, b) => b - a);
  for (x of array_sorted) {
    if (result_array.length === 2) {
      return result_array.sort();
    }
    if (res - x == 0) {
      result_array.push(nums.indexOf(x));
      continue;
    }
    res = target - x;
    if (res + x === target) {
      result_array.push(nums.indexOf(x));
      nums[nums.indexOf(x)] = "x";
      continue;
    }
    nums[nums.indexOf(x)] = "x";
  }

  return result_array.sort();
};

console.log(twoSum([2, 7, 11, 15], 9));
