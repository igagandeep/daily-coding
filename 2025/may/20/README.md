# Intuition
The problem is straightforward: we want to create a new array where each element is the result of applying a function fn to each element of the input array arr. This is essentially replicating the behavior of the built-in Array.prototype.map method.

# Approach
We can iterate over the input array using a simple for loop, and for each element, call the function fn passing the element and its index. We then store the returned value in a new array at the corresponding index. Finally, we return the new array.

# Complexity
- Time complexity:
O(n) where n is the length of the input array, since we apply the function once per element.

- Space complexity:
O(n) because we create a new array of the same length as the input.

# Code
```javascript []
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr[i] = fn(arr[i], i)
    }

return newArr;


};
```



Second Problme: https://leetcode.com/problems/filter-elements-from-array?envType=study-plan-v2&envId=30-days-of-javascript

Intuition
We want to return a new array containing only those elements from the input array arr that satisfy the condition specified by the function fn. This is similar to how the built-in filter method works.

Approach
Iterate through the array once, and for each element, apply the function fn with the element and its index. If the function returns true, push that element into a new result array. Finally, return the result array.

Complexity
Time complexity:
O(n) where n is the length of the array, since we check each element once.

Space complexity:
O(k) where k is the number of elements that pass the filter and are stored in the new array.

Code
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   const result = [];

   for(let i = 0; i < arr.length; i++){
     if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
   } 

   return result;
};