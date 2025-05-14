# ⚡ Debounce & Throttle Demo

This JavaScript demo shows how to improve browser performance and responsiveness by using **debounce** and **throttle** techniques. These are especially helpful when dealing with frequent user-triggered events like typing or scrolling.

---

## ❓ Question

_What was the problem you solved today?_

How to limit function executions during frequent user actions (e.g. typing or scrolling) to avoid performance bottlenecks or excessive API calls.

---

## 💡 Explanation

When users type in a search field or scroll through a page, these events can fire many times per second. If we attach a function like an API request or console logger to them directly, it can overwhelm the browser or backend service.

### ✅ Debounce
We use `debounce` to delay execution until the user has stopped typing for a certain amount of time. This is useful for search inputs.

### ✅ Throttle
We use `throttle` to make sure a function only runs once in a fixed period, no matter how many times the event is fired. This is ideal for scroll events.

In this project:

- A **debounced** `searchHandler` waits 1000ms after typing stops before making a fetch call.
- A **throttled** `handleScroll` logs the current `window.scrollY` at most every 2000ms.

---

## ✅ Solution

See [index.js](./index.js) for code.

---

## 🧪 How to Use

1. Add an input field to your HTML:
   ```html
   <input type="text" id="search" placeholder="Start typing..." />
