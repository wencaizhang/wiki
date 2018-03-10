## `Array.join()` 将数组元素连接起来构建成一个字符串 

### 描述

所有的数组元素都被转化成字符串，再用一个分隔符将这些字符串连接起来。如果元素是 `undefined` 或者 `null`，则会被转换成空字符串。

### 参数

separator，指定一个字符串来分隔数组的每个元素，如果省略，数组元素用逗号分隔（默认为 `,`）

### 返回值

一个所有数组元素连接的字符串。如果数组长度为 0，则返回空字符串。

### 示例

```js
var arr = [ 1, 2, 3 ];

arr.join();      // '1,2,3'

arr.join('');    // '123'
arr.join( '+' ); // '1+2+3'
```

### 模拟实现

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
