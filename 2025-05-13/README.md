# 🧠 Problem for 2025-05-13

## ❓ Question

Create a custom object that can be iterated using a `for...of` loop by implementing the `Symbol.iterator` method manually.

The goal is to understand how custom iterators work in JavaScript using the `Symbol.iterator` protocol.

## 💡 Explanation

- `Symbol.iterator` is a built-in symbol that defines the default iterator for an object.
- When we use `for...of`, it looks for `Symbol.iterator` and uses the returned object’s `.next()` method.
- In this example:
  - `obj.values` holds the data.
  - The iterator returns each value from the array until `done` is true.
  - The `next()` function increases the `index` after each call.

This pattern is useful for creating iterable objects that aren’t arrays (like custom collections, data structures, etc.).

## ✅ Solution

See [index.js](./index.js) for the code.
