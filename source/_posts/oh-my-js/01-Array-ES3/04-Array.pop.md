---
title: Array.prototype.pop()
date: 2017-02-20 00:28:21
toc: true
tags: [js, array, es3]
---

## 描述

从一个数组中**删除并返回最后一个元素**。（修改原数组）

## 参数

无

## 返回值

从数组中删除的元素（当数组为空时返回 `undefined`）

## 示例

```js
var arr = [ 1, 2, 3 ];

var delEle= arr.pop();   // 3 

[].pop();  // undefined
```

