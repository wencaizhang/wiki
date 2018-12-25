title: JavaScript 序列化与反序列化
tags:
  - javascript
  - jQuery
date: 2018-03-02 10:51:00
---
## 一、$.param()

`param()` 方法创建数组或对象的序列化表示。该序列化值可在进行 AJAX 请求时在 URL 查询字符串中使用。

<!-- more -->

### 1. 使用示例

示例一：序列化目标是对象

```js
// 假设已经引入 jquery.js

var obj = { username: 'zwc' , age: 18 };
var querystring = $.param(obj);
console.log(querystring);
// "username=zwc&age=18"
```

示例二：序列化目标数据结构深层嵌套

```js
// 假设已经引入 jquery.js

var myObject = {
  a: {
    one: 1, 
    two: 2, 
    three: 3
  }, 
  b: [1,2,3]
};
var recursiveEncoded = $.param(myObject);
var recursiveDecoded = decodeURIComponent($.param(myObject));

console.log(recursiveEncoded);
// "a%5Bone%5D=1&a%5Btwo%5D=2&a%5Bthree%5D=3&b%5B%5D=1&b%5B%5D=2&b%5B%5D=3"

console.log(recursiveDecoded);
// "a[one]=1&a[two]=2&a[three]=3&b[]=1&b[]=2&b[]=3"
```

示例三：序列化目标是数组

```js
// 假设已经引入 jquery.js

var arr = [
    { name: 'username', value: 'zwc' },
    { name: 'age', value: 18 }
];
var querystring = $.param(arr);
console.log(querystring);
// "username=zwc&age=18"
```

### 2. 模拟 $.param()

根据 [使用示例](#1-使用示例) 模拟出代码的实现过程。暂时先不考虑边界值，即方法调用时传入的都是合法参数（参照示例中的参数）。

#### i 第一版

针对 [使用示例](#1-使用示例) 中**示例一**进行模拟

// 方法定义
```js
function param() {
    var target = arguments[0];
    var str = '';
    if (!target) return '';
    if (target instanceof Object) {
        for (key in target) {
            if (target.hasOwnProperty(key)) {
                str += key + '=' + target[key];
            }
        }
        return str;
    }
}
```

// 测试代码
```js
var obj = { username: 'zwc' , age: 18 };
var querystring = param(obj);
console.log(querystring);
// "username=zwcage=18"
```

#### ii 第二版


针对 [使用示例](#1-使用示例) 中**示例一**进行模拟

// 方法定义
```js
function param() {
    var target = arguments[0];
    var str = '';
    if (!target) return str;
    if (target instanceof Object) {
        for (key in target) {
            if (target.hasOwnProperty(key)) {
                if (target[key] instanceof Object) {
                    var tmp = target[key];
                    for (k in tmp) {
                        str += key + '[' + k +']=' + tmp[k];
                    }
                } else if (target[key] instanceof Array) {
                    var tmp = target[key];
                    for (var i = 0; i < tmp.length; i++) {
                        str += key + '[]=' + tmp[i];
                    }
                } else {
                    str += key + '=' + target[key];
                }
            }
        }
        return str;
    } else if (target instanceof Array) {
        
    } else {

    }
}
```

// 测试代码
```js

```
#### iii 第三版

这一次把更复杂的情况考虑进去，也就是递归。

// 方法定义
```js
function param() {
    var target = arguments[0];
    var str = '';
    if (!target) return str;
    if (target instanceof Object) {
        for (key in target) {
            var value = target[key];
            if (value instanceof Object || value instanceof Array) {
                paramObj(key, value);
            } else {
                str += '&' + key + '=' + value;
            }
        }
    }

    function paramObj (key, value) {
        for (k in value) {
            var temp = value[k];
            var tempKey = value instanceof Object ? key + '[' + k +']' : key + '[]';
            if (temp instanceof Object || temp instanceof Array) {
                paramObj(tempKey, temp)
            } else {
                str += '&' + tempKey + '=' + temp;
            }
        }
    }
    return encodeURIComponent(str.slice(1));
}
```

// 测试代码
```js
var myObject = {
  a: {
    one: 1, 
    two: 2, 
    three: { name: 'jack', age: 18 }
  }, 
  b: [1,2,3]
};
var recursiveEncoded = param(myObject);
var recursiveDecoded = decodeURIComponent(param(myObject));

console.log(recursiveEncoded);
// a%5Bone%5D%3D1%26a%5Btwo%5D%3D2%26a%5Bthree%5D%5Bname%5D%3Djack%26a%5Bthree%5D%5Bage%5D%3D18%26b%5B0%5D%3D1%26b%5B1%5D%3D2%26b%5B2%5D%3D3

console.log(recursiveDecoded);
// "a[one]=1&a[two]=2&a[three]=3&b[]=1&b[]=2&b[]=3"
```

## 二、$.serializeArray()

## 三、$.serialize()