---
title: 判断浏览器类型
date: 2018-02-22 00:28:21
toc: true
tags: [js, 微码]
---

### 判断是否为手机浏览器

```js
function isMobile () {
  // Android
  if (/android/i.test(navigator.userAgent)) {
      return true;
  }
  // iOS
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      return true;
  }
  return false;
};
```

### 判断是否为微信浏览器

```js
function isWeChatBroswer(){
  var ua = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua)
}
```