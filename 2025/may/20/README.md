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