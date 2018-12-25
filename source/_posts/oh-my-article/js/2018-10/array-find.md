title: 如何查找数组中指定元素
tags:
  - javascript
  - array
  - es6
date: 2018-10-09 16:51:14
---


## 场景

我们经常会遇到这样的情况：假设现在有下面这样一个数组，现在需要在该数组中找到 `id 等于 2` 的元素。

```js
const arr = [
  { id: 1, text: '11111' },
  { id: 2, text: '22222' },
  { id: 3, text: '33333' },
  { id: 4, text: '44444' },
]
```

这个问题有很多解决的方法，例如：遍历然后逐个元素进行判断。

```js
var target;
for (var i = 0; i < arr.length; i++) {
  var item = arr[i];
  if (item.id == 2) {
    target = item
  }
}
console.log(target);  // {id: 2, text: "22222"}
```



这里有一个简单的方法，实现如下

```js
const target = arr.find(item => item.id == 2)

console.log(target)  // {id: 2, text: "22222"}
```

## 描述

`find` 方法用于找出第一个符合条件的数组元素。如果没有符合条件的元素，则返回 `undefined`。

`find` 方法第一个参数是一个回调函数，而这个判断条件是此回调函数的返回值是否为 true（这里会对返回值进行隐式转换）。

数组中每一项元素依次执行该回调函数，直到找到第一个返回值为 `true` 的元素，方法停止执行，然后返回该元素。

`find` 方法还可以接收第二个参数用于指定回调函数的 `this` 指向。

### 回调函数默认接收三个参数

`find` 方法的第一个参数默认接收三个参数，第一个是遍历的数组元素，第二个是对应的数组索引，第三个是数组本身。

```js
const arr = [ 'a', 'b', 'c' ]

arr.find((value, index, array) => {
  console.log(value, index, array)
})

// a 0 ["a", "b", "c"]
// b 1 ["a", "b", "c"]
// c 2 ["a", "b", "c"]
```

### `find()` 的返回值

有符合条件的，返回该数组元素，没有符合条件的，返回 `undefined`

```js
const arr = [ 'a', 'b', 'c' ];

const result1 = arr.find(v => v == 'c')
console.log(result1) // "c"

const result2 = arr.find(v => v == 'xyz')
console.log(result2) // undefined
```

### 找到第一个符合条件的，方法立即结束执行

```js
const arr = [ 'a', 'b', 'b', 'c' ];

const result = arr.find(value => {
  console.log(value);
  return value == 'b';
});

// "a"
// "b"
console.log(result); // "b"
```

### 指定 callback 执行时的 `this` 指向

```js
const ages = [ 10, 12, 26, 15 ];
const person = { name: 'John', age: 20 };
const age = ages.find(value => {
    return value > this.age;
}, person);

console.log(age);  // 26
```

## 简易实现

`find` 方法在 ES6 中提出，尚未被所有浏览器实现，这里有一个简易版的实现方法。

```js
Array.prototype.find = function (callback, context) {
  if (!this instanceof Array) { return;}

  var bool, target;
  for (var i = 0; i < this.length; i++) {

    bool = !!callback.call(context, this[i], i, this);
    if (bool) {
      target = this[i];
      break;
    }
  }
  return target
}
```