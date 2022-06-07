// LeetCode Link: https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
// NAIVE APPROACH
// Time Complexity - O(n^2)
var maxSubArray = function (nums) {
  let largestSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > largestSum) {
        largestSum = sum;
      }
    }
  }
  return largestSum;
};

// OPTIMIZED SOLUTION
// USING KANDANE ALGORITHM
// time complexity - O(n)
var maxSubArray2 = function (nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], nums[i] + maxCurrent);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
};
