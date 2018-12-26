---
title: 将时间戳转换为格式化日期
tags:
  - javascript
  - 时间戳
date: 2018-12-14 10:51:00
---

`timestamp` 缺省表示使用当前时间戳，`formats` 默认格式是 `YYYY-MM-DD HH:mm:ss`，例如 `2000-01-01 12:00:00`。

```js
/*
* 时间戳转换成指定格式日期
* eg. 
* dateFormat(11111111111111, 'YYYY年MM月DD日 HH时mm分')
* → "2322年02月06日 03时45分"
*/
function dateFormat (timestamp, formats) {
  formats = formats || 'YYYY-MM-DD HH:mm:ss'
  var date = timestamp ? new Date(timestamp) : new Date()
  
  var zero = function (num) {
    if (num < 10) {
      return '0' + num
    }
    return num
  }

  var dateObj = {
    YYYY: date.getFullYear(),
    MM: zero(date.getMonth() + 1),
    DD: zero(date.getDate()),
    HH: zero(date.getHours()),
    mm: zero(date.getMinutes()),
    ss: zero(date.getSeconds()),
  }

  return formats.replace(/YYYY|MM|DD|HH|mm|ss/ig, function (matches) {
    return dateObj[matches]
  })
}
```
