---
title: JS 数组去重
tags: [js, 数组, 去重]
---

利用 ES6 的新特性

```js
function uniq (arr) {
  return [...new Set(arr)]
}
```