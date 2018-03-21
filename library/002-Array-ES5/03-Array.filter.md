# `Array.prototype.filter()`

> filter: 过滤 

## 描述

对数组进行遍历，并对数组每个元素都调用一次 callback 函数，callback 函数返回布尔值 true 或 false，返回 true 的元素组成一个新数组作为 `filter()` 方法的返回值。

callback 函数有三个参数，依次是：
1. 遍历的数组元素
2. 对应的元素索引
3. 数组本身

## 参数

参数 | 描述
--- | ---
callback | `function` 类型，必需。数组中每个元素需要调用的函数
context | 可选。执行回调时的上下文（this）

## 返回值

过滤后的新数组

## 示例

+ 打印 callback 参数值

```js
var arr = [ 'a', 'b', 'c' ];

arr.filter(function(value, index, array) {
    console.log( value, index, array )
});

//  a 0 ["a", "b", "c"]
//  b 1 ["a", "b", "c"]
//  c 2 ["a", "b", "c"]
```

+ callback 返回值如果不是布尔值，则会默认被转换成布尔值

```js
var data = [ 0, 1, 2, 3 ];

var arrFilter= data.filter(function (item) {
    return item;
});

console.log(arrFilter);  // [ 1, 2, 3 ]
```

## 模拟实现

```js
```
