# 正则表达式使用案例

## 隐藏手机号码中间 4 位数字：
```js
var str = '18037143856'
var newStr = str.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
console.log(newStr)  // 180****3856
```
