# Intuition
The goal is to avoid recalculating results for function calls with the same input arguments. Memoization is a technique where we store results of expensive function calls and return the cached result when the same inputs occur again. This is especially useful for functions like Fibonacci or Factorial that are called repeatedly with overlapping subproblems.

# Approach
We create a wrapper function that uses a cache. For each call, we convert the arguments to a string key using JSON.stringify. If the key exists, we return the cached result. Otherwise, we call the original function, store the result, and return it.



# Complexity
- Time complexity:
O(1) average per call

- Space complexity:
O(n) for n unique argument combinations

# Code
```javascript []
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in cache){
            return cache[key]
        }else{
            const res = fn(...args)
            cache[key] = res;
            return res;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
```