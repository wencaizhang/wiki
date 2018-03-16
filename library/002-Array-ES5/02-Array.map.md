# `Array.prototype.map()`

> map: 映射

## 描述

对原数组中的每个元素都按照顺序调用一次 callback 函数。callback 每次执行后的返回值（包括 `undefined`）组合起来形成一个新数组。

## 参数

参数 | 描述
--- | ---
callback | `function` 类型，必需。数组中每个元素需要调用的函数
thisValue | 可选。执行回调时的上下文（this）

callback 回调函数支持 3 个参数，依次是：
1. 遍历的数组元素
2. 对应的元素索引
3. 数组本身

## 返回值

根据 callback 映射出来的新数组。

## 示例

+ 打印 callback 参数值

```js
var arr = [ 'a', 'b', 'c' ];

arr.map(function(value, index, array) {
    console.log( value, index, array )
});

//  a 0 ["a", "b", "c"]
//  b 1 ["a", "b", "c"]
//  c 2 ["a", "b", "c"]
```

+ callback 需要有 return 值，否则会被映射成 `undefined`

```js
var data = [ 1, 2, 3 ];

// 无 return 值
var arrOfSquares = data.map(function (item) {});

console.log(arrOfSquares);  // [undefined, undefined, undefined]
```

+ 求平方

```js
var data = [ 1, 2, 3 ];

var arrOfSquares = data.map(function (item) {
    return item * item;
});

console.log(arrOfSquares);  // [ 1, 4, 9 ]
```

+ 获取对象数组中的特定属性值们

```js
var users = [
    { name: 'a', age: 18 },
    { name: 'b', age: 19 },
    { name: 'c', age: 21 }
]

var ages = users.map(function (user) {
    return user.age;
});

console.log(ages);  // [18, 19, 21]
```

## 模拟实现

```js
if (typeof Array.prototype.map != 'function') {
    Array.prototype.map = function (fn, context) {
        var arr = [];
        if (typeof fn === 'function') {
            for (var i = 0, len = this.length; i < len; k++) {
                arr.push(fn.call(context, this[i], k, this));
            }
        }
    }
}
```
