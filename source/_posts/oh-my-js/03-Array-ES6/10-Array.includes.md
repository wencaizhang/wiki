---
title: Array.prototype.includes()
date: 2017-02-20 00:28:21
toc: true
tags: [js, array, es6]
---

## 描述

方法 `includes` 返回一个布尔值，表示某个数组是否包含给定的值。

## 参数

参数 | 描述
--- | ---
`value` | 必需。被检测的值
`fromIndex` | Number 类型，可选。表示搜索的起始位置，默认为 `0`


## 返回值

布尔值，表示某个数组是否包含给定的值。

## 示例

### 不指定 `fromIndex`

```js
const arr = [ 1, 2, 4 ];

arr.includes(1); // true
arr.includes(3); // false
```

### 指定 `fromIndex`

```js
const arr = [ 1, 2, 4 ];

arr.includes(1, 1); // false
arr.includes(2, 2); // false
```


