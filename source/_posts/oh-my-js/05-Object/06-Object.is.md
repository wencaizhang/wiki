---
title: Object.is()
date: 2017-02-20 00:28:21
toc: true
tags: [js, object]
---

## 描述

ES6 引入 `Object.assign` 方法，它用于比较两个值是否严格相等。

相等运算符（`==`）会自动转换类型，严格相等运算符 `NaN` 不等于自身，而且 `+0` 等于 `-0`。

`Object.is()` 方法和严格相等运算符基本一致，不同之处有两个，一是 `+0` 不等于 `-0`，二是 `NaN` 等于自身。

## 参数

两个进行比较的值

## 返回值

如果两个参数相等，返回 `true` ，否则返回 `false` 。

## 示例

### 0. 基本使用

```js
Object.is( {}, {} );  // false

Object.is( 'abc', 'abc' );  // true
```

### 1. Object.is() 不会自动转换类型

```js
console.log( '5' == 5 );  // true

console.log( Object.is('5', 5) );  // false
```

### 2. Object.is() 和 严格相等（`===`）的区别

```js
console.log( Object.is( NaN, NaN ) );  // true
console.log( NaN === NaN );  // false

console.log( Object.is( -1, +1 ) );  // false
console.log( +1 === -1)
```