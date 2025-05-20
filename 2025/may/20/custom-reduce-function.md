Problem: https://leetcode.com/problems/array-reduce-transformation?envType=study-plan-v2&envId=30-days-of-javascript

Solution: https://leetcode.com/problems/array-reduce-transformation/solutions/6764381/implement-custom-reduce-function-by-igag-58gh

# Intuition
We want to combine all elements of the array into a single accumulated value by repeatedly applying a reducer function fn. Starting with an initial value init, we process each element in order and update the accumulator.

# Approach
Initialize a variable result with the initial value init. Iterate over the array nums and for each element, update result by applying fn(result, currentElement). If the array is empty, simply return init as the final result.

# Complexity
- Time complexity:
O(n) where n is the length of the input array because we process each element once.

- Space complexity:
O(1) since we only use a fixed amount of extra space for the accumulator.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;

    for(let i = 0; i < nums.length; i++){
        result = fn(result, nums[i])
    }

    return result;

};
```