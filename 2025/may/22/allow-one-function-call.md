# Intuition
The problem asks us to limit a function so that it can only be called once. My first thought was to use some form of internal flag or memory to track whether the function had already run. This is a classic use case for closures in JavaScript.



# Approach
We use a closure to store a called flag outside the returned function, so it remembers whether fn has been invoked. On the first call, we run fn and flip the flag. On subsequent calls, we simply return undefined without calling fn.

# Complexity
- Time complexity:
O(1) – The logic inside the wrapper function is constant-time regardless of input.

- Space complexity:
O(1) – We only store one boolean (called) and don’t grow memory with repeated calls.



# Code
```javascript []
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;

    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

```