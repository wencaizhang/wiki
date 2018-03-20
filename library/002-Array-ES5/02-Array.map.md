# `Array.prototype.map()`

> map: 映射

## 描述

对原数组中的每个元素都按照顺序调用一次 callback 函数。将 `callback` 每次执行后的返回值（包括 `undefined`）组合起来形成一个新数组。

`callback` 只会在有值的索引上被调用，那些从来没被赋值或者使用 `delete` 删除的索引则不会被调用。

`callback` 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 `context` 参数有值，则每次 `callback` 被调用的时候，`this` 都会指向 `context` 参数上的这个对象。如果省略了此参数，或者赋值为 `null` 或者 `undefined` ，则 `this` 指向全局对象。

`map()` 不修改调用它的原数组本身（可以在 `callback` 执行时通过代码改变原数组）。

使用 `map()` 方法处理数组时，数组元素的范围是在 `callback` 方法第一次调用之前就已经确定了。在 `map()` 方法执行过程中：原数组新增加的元素将不会被 `callback` 访问到；若已经存在的元素被改变或删除了，则它们传递到 `callback` 的值是 `map()` 方法遍历到它们的那一时刻的值；被删除的元素将不会被访问到。

## 参数

参数 | 描述
--- | ---
callback | `function` 类型，必需。数组中每个元素需要调用的函数
context | 可选。执行回调时的上下文（this）

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