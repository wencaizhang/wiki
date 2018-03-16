# `Array.prototype.concat()`

## 描述

方法 `concat()` 将创建并返回一个新数组，这个数组是将所有参数都添加到 array 中生成的。它并不修改 array 。如果要进行 `concat()` 操作的参数是一个数组，那么添加的是数组中的元素，而不是数组。

## 参数

value, ...（不限类型，不限个数）

## 返回值

一个新数组

## 示例

```js
var arr = [ 1, 2, 3 ];

arr.concat(4, 5);              // [ 1, 2, 3, 4, 5 ]

arr.concat([4, 5]);            // [ 1, 2, 3, 4, 5 ]

arr.concat([4, 5], [6, 7]);    // [ 1, 2, 3, 4, 5, 6, 7 ]

arr.concat(4, [ 5, [ 6, 7] ]); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
```

## 模拟实现

```js
/*
*  模拟原生 Array.concat()
*/

function concat () {
    var args = arguments;
    var arr = [];
    for ( var i = 0; i < args.length; i++ ) {
        var item = args[i];
        if ( item instanceof Array ) {
            for( var j = 0; j < item.length; j++ ) {
                arr.push( item[j] )
            }
        } else {
            arr.push( item );
        }
    }
    return arr;
}
```
