---
title: 时间戳显示为多少分钟前，多少天前的JS处理
tags:
  - javascript
  - 时间戳
date: 2018-12-13 10:51:00
---

方法名为 `getTimeAgoAt`，支持一个时间戳参数 `stamptime`（必需）。

### 先上代码

因为后端返回时间戳通常精确到秒（10位），而 JS 获取时间戳精确到毫秒（13位），本方法处理以秒进行计算。

```js
function getTimeAgoAt(stamptime) {
  var currentStamptime = Date.parse(new Date()) / 1000;
  var agoAt = '刚刚';
  var diff = currentStamptime - stamptime;
  var points = [
    { value: 365 * 24 * 60 * 60, suffix: '年前', max: 2 },
    { value: 30 * 24 * 60 * 60, suffix: '月前', max: 11 },
    { value: 7 * 24 * 60 * 60, suffix: '周前', max: 4 },
    { value: 24 * 60 * 60, suffix: '天前', max: 6 },
    { value: 60 * 60, suffix: '小时前', max: 23 },
    { value: 10 * 60, suffix: '0分钟前', max: 5 }
  ];

  for (var i = 0; i < points.length; i++) {
    var item = points[i];
    var mode = Math.floor(diff / item.value);
    if (mode >= 1) {
      agoAt = Math.min(mode, item.max) + item.suffix;
      break;
    }
  }
  return agoAt;
}
```

### 代码解析

为了帮助大家理解，同时也为了备忘，这里简单解释一下子。

本方法分为两部分，数据部分（ 数组 `points`）和逻辑部分（遍历）。

数组 `points` 中每项元素都是一个时间点（对象），它拥有三个属性：

+ `suffix`: 最终结果的文字后缀部分，例如最终结果是“2年前”，则“年前”由 `suffix` 属性而来，2 是后面的计算得来；另外，它还有指代时间单位的功能，例如通过“年前”，就可以看出其时间单位是“年”。
+ `value`: 将 `suffix` 指代的时间单位换算成秒
+ `max`: 当前时间单位的最大值，例如时间单位是“小时前”的时候，因为一天只有24小时，所以 `max` 应当是 23，它和它的更大一级的时间单位有关。

另外可以看到 `points` 的元素顺序按照时间单位由大到小排序，分别是“年”，“月”，“周”等等。

而逻辑部分（`for` 循环），则是逐个判断当前时间和通过参数传入的时间差和每个时间单位的商是否大于或等于 1 。如果商大于或等于 1，那么就直接对商进行处理，拼接成我们想要的结果，然后跳出循环。

拼接的时候取的是商和 `max` 属性值的较小者，事实上直接取商的值就可以，但是考虑到一些特殊情况，比如本方法中以“年”为单位的时候其 `max` 属性值为 2，其用意是当实际时间远大于“2两年前”的时候，不管是“3年前”还是“4年前”，返回的结果一律都是“2年前”。因此这里使用了商和 `max` 属性值的较小者和 `suffix` 进行拼接。