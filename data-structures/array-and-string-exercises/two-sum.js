// LeetCode Link: https://leetcode.com/problems/two-sum/description/

//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, 
//and you may not use the same element twice.
//You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// BRUTE FORCE SOLUTION
var twoSum = function(nums, target) {
    let output = [];
    let first = nums[0];
    let index = 0;
  
    for (let i = 1; i < nums.length; i++) { // O(n) time Complexity
      if (first + nums[i] === target ) {
        output.push(index)
        output.push(i);
        break;
      } else {
        first = nums[i];
        index = i;
  
        if (first + nums[i+1] === target ) {
          output.push(index)
          output.push(i+1)
          break;
        }
      }
    }
  
    return output;
};

// Using Hastable (Optimized Solution)
var twoSum2 = function(nums, target) {
    const numsMap = new Map();
    
    for (let i = 0; i < nums.length; i++){
        let el = target - nums[i];
        if (numsMap.has(el)) {
            return [numsMap.get(el), i]
        } else {
            numsMap.set(nums[i], i)
        }
    }
    
    return null
};

