// LeetCode Link => https://leetcode.com/problems/valid-anagram/
// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // check if the length of the two arrays are the same
  if (s.length !== t.length) return false;

  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }

    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }

  // check if keys value in sMap !== tMap return false
  for (let [k, _] of sMap) {
    if (sMap.get(k) !== tMap.get(k)) return false;
  }

  return true;
};

// Other Solution - Using Built In JS sorting functions
// Time Complexity - nLogN || nLogN + mlogM
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
