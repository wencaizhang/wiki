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

### （1）数组元素为基本类型

```js
var names = [ '李白', '杜甫', '苏轼' ];

names.join();       // "李白,杜甫,苏轼"

names.join( '、' ); // "李白、杜甫、苏轼"
```

### （2）数组元素为数组对象

```js
var arr = [ 1, 2, [ 3, 4 ] ];

arr.join();    // "1,2,3,4"

arr.join('+'); // "1+2+3,4"
```

### （3）数组元素为对象

```js
var arr = [ 1, 2, { name: 'zwc' } ];

arr.join(); // "1,2,[object Object]"
```

## 模拟实现

```js
/*
*  模拟原生 Array.concat()
*/

Array.prototype.join = function () {

    var sep = arguments && arguments[0] || ',';
    var str = '';

    for ( var i = 0; i < this.length; i++ ) {
        var item = this[i];

        item === undefined ? '' : item;
        item === null ? '' : item;

        if ( item instanceof Array ) {
            for( var j = 0; j < item.length; j++ ) {
                var s = j === 0 ? sep : ','
                str += s + item[j]; 
            }
        } else if ( item instanceof Object ) {
            str += sep + item.toString();
        } else {
            str += sep + item; 
        }
    }
    return str.replace(sep, '');
}
```
