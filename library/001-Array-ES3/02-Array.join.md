# `Array.prototype.join()`

## 描述

所有的数组元素都被转化成字符串，再用一个分隔符将这些字符串连接起来。如果元素是 `undefined` 或者 `null`，则会被转换成空字符串。

## 参数

参数 | 描述
--- | ---
separator | 可选。 指定要选的分隔符，如果省略，则使用逗号为分隔符。

## 返回值

一个字符串

## 示例

```js
var arr = [ 1, 2, 3 ];

arr.join();      // '1,2,3'

arr.join( '+' ); // '1+2+3'
```

## 模拟实现

```js
/*
*  模拟原生 Array.concat()
*/

function join () {

    var separator = arguments && arguments[0] || ',';
    var str = '';
    var arr = this;

    for ( var i = 0; i < arr.length; i++ ) {
        var item = arr[i];
        if ( item instanceof Array ) {
            for( var j = 0; j < item.length; j++ ) {
                str += item; 
            }
        } else {
            str += item; 
        }
    }
}
```
