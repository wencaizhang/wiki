# `Array.prototype.map()`

> map: 映射

## 描述

`map()` 方法对数组中每一项运行给定函数 fn ，返回每次函数调用的结果组成的数组。同样也可指定函数 fn 的上下文环境（`this`）


使用 `map()` 方法处理数组时，数组元素的范围是在 `callback` 方法第一次调用之前就已经确定了。在 `map()` 方法执行过程中：原数组新增加的元素将不会被 `callback` 访问到；若已经存在的元素被改变或删除了，则它们传递到 `callback` 的值是 `map()` 方法遍历到它们的那一时刻的值；被删除的元素将不会被访问到。

## 参数

参数 | 描述
--- | ---
fn | `function` 类型，必需。数组中每个元素需要调用的函数
context | 可选。执行回调时的上下文（this）

fn 函数支持 3 个参数，依次是：
1. 遍历的数组元素
2. 对应的元素索引
3. 数组本身

## 返回值

返回给定函数 fn 调用的结果组成的数组。

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
