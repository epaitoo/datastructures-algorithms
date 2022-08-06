// Leetcode link: https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//BRUTE FORCE SOLUTION
var twoSum = function(nums, target) {
  let index = 0
  let currentArr = nums[0]

  for (let i=0; i < nums.length; i++) { // o(n^2) Time complexity
    for (let j=index+1; j < nums.length; j++) {
      if (currentArr + nums[j] === target) {
        return [index, j]
      }
    }
    currentArr = nums[i]
    index = i
  }
};

//Efficient solution
var twoSum = function(nums, target) {
  let hMap = new Map()

  for (let i=0; i < nums.length; i++) { // O(n) time complexity
    if (hMap.has(target - nums[i])) {
      return [hMap.get(target - nums[i]), i]
    } 
    //set nums[i] as Key, v= index
    hMap.set(nums[i], i)
  }
};