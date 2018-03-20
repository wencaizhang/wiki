# `Array.prototype.sort()`

## 描述

对数组的元素进行排序，并返回数组，默认排序顺序是根据字符串 Unicode 码点。（修改原数组）

## 参数

参数 | 描述
--- | ---
compareFunction | function 类型，可选。用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为字符串的各个字符的 Unicode 位点进行排序

## 返回值

返回排序后的数组，原数组已经被排序后的数组代替。

## 示例

+ 给元素都为数字的数组排序，不指定排序方法

```js
var scores = [1, 10, 21, 2];
scores.sort();
console.log(scores);  // [ 1, 10, 2, 21 ]
// 10 在 2 之前，这是因为在 Unicode 指针顺序中"10"在"2"之前
```

+ 给元素都为数字的数组排序，指定排序方法

```js
var numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);  // [ 1, 2, 3, 4, 5 ]

```

