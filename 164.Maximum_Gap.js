/*
https://leetcode.com/problems/maximum-gap/

Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

You must write an algorithm that runs in linear time and uses linear extra space.



Example 1:

Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
Example 2:

Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
*/

var maximumGap = function (nums) {
  if (nums.length < 2) return 0;
  let differences = [];
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length; i++) {
    differences.push(nums[i + 1] - nums[i]);
  }
  let largest = differences[0];
  for (each of differences) {
    if (largest < each) {
      largest = each;
    }
  }
  return largest;
};

console.log(maximumGap([100, 3, 2, 1]));
console.log(maximumGap([3, 6, 9, 1]));
