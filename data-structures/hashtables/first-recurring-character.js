// Google Question
// FIRST RECURRING CHARACTER
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// NAIVE SOLUTION
// Time Complexity - O(n^2)
// Space Complexity - O(1)
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// EFFICIENT APPROACH USING HASHTABLES
// Time Complexity - O(n)
// Space Complexity - O(n) - Tradeoff
function firstRecurringCharacter2(input) {
  let map = new Map();
  for (let i = 0; i < input.length; i++) {
    if (map.has(input[i])) {
      return input[i];
    } else {
      map.set(input[i], i);
    }
  }
  return undefined;
}
