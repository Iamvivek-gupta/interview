//https://docs.google.com/document/d/1-CwJsF0lhaKRAb4hgQ9U4WDAPcSkTgzAwOSY7omixQg/edit?pli=1


// Question 1: A class has a number of students, each with a particular area of knowledge, or talent.
// Each talent is represented as an integer from 1 to talentsCount. Teams must be formed for a quiz competition, and must have at least one member with each of the talents.
// The talents are listed in an array, and the students must be chosen consecutively, starting at any element index.
// For each starting index, determine the minimum number of students that must be selected to have at least one team member with each talent.
// If it is not possible, return -1 for that index.

// Example:
// talentsCount = 3
// talent = [1, 2, 3, 2, 1]

// There is no way fewer than 3 students can have at least 3 talents. The following subarrays of length 3 or more are possible: Starting at position 1: [1, 2, 3], [1, 2, 3, 2], [1, 2, 3, 2, 1] Starting at position 2: [2, 3, 2], [2, 3, 2, 1] Starting at position 3: [3, 2, 1] No further subarrays of length 3 or more exist.

// Starting at the first position, the shortest subarray with one of each talent value has length 3 Starting at element 2, the shortest has length 4. At position 3, the shortest and only possible subarray has length 3. It is not possible to form a team with fewer than 3 members, so the subarrays starting at the last two positions will fail. The highlighted subarrays are selected. 


// The return array is [3, 4, 3, -1, - 1].






// Question 2: Design a stack that supports getMin() in O(1) time and O(1) extra space

// Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should return the minimum element from the SpecialStack. All these operations of SpecialStack must have a time and space complexity of O(1). 
// Note: To implement SpecialStack, you should only use standard Stack data structure and no other data structure like arrays, lists, etc








// 1,15,26,3,17,25,5,2,12,7
