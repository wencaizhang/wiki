---
title: 正则表达式使用案例
date: 2017-02-20 00:28:21
toc: true
tags: [js, regexp]
---

## 隐藏手机号码中间 4 位数字：

+ 前三位数字：`^(\d{3})`
+ 中间 4 位数字：`\d{4}`
+ 最后 4 位数字：`(\d{4})$`
+ 子表达式：`()` 中的内容是一个子表达式，`$1` 表示第一个子表达式，`$2` 表示第二个子表达式，依次类推。

```js
var str = '18012345678'
var newStr = str.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
console.log(newStr)  // 180****5678
```

## 判断字符串是否为数字

要考虑的问题：

+ 数字有正负
+ 数字有整数和小数之分
+ 特殊数字 `0`

进一步分析：

+ 正负：以 `-` 开头为负数，直接以数字开头为正数，因此可以确定正则开头部分为 `/^-?/`；
+ 整数：整数的第一位应当是大于 0 的数字，如果是多位整数，则后面几位数字范围是 `0-9` ，对应的正则为 `/[1-9][0-9]*$/`
+ 小数：小数有整数部分和小数部分，通过小数点 `.` 分隔开。通过上面分析，整数部分应该是 `/[1-9][0-9]*/` 。而小数点需转义为 `/\./` 。小数部分可以全为 `0` ，如 `10.00` ，因此小数部分无需过多限制，对应的正则为 `/[0-9]+/` 。
+ `0`：对应的正则是 `/0/` 。

整数、小数、`0` 三种情况的逻辑关系为“或”，因此需要将他们使用 `|` 连接合并起来:

```js
var regNum = /(^-?[1-9][0-9]*$)|(^-?[1-9][0-9]*\.[0-9]+)|(^-?0$)/
```

另外，元字符 `\d` 等价于 `[0-9]`，上面正则也可以写成这样：

```js
var regNum = /(^-?[1-9]\d*$)|(^-?[1-9]\d*\.\d+)|(^-?0$)/
```



## 取出指定字符

有这样一个字符串，穿插着“【男播】”、“【女播】”、“【正文】”、“同期声”、“【CLIP】”五个随机出现的词组，现在需要对这个字符串进行一些操作。

提取“【男播】”与下一个相邻词组之间的内容：

```js
var str = "【男播】aaa【男播】bbb【女播】ccc【正文】ddd【同期声】ccc【CLIP】ddd【男播】eee【女播】fff【男播】ggg";
var reg = /男播】([^【]*)【|男播】([^【]*)$/gi;
var arr = [];
str.replace(reg, function (match, $1, $2) {
	$1 ? arr.push($1) : '';
	$2 ? arr.push($2) : '';
})
var result = arr.join(' ');
console.log(result);
```
