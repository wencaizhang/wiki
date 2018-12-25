---
title: 按钮添加一个类名自动变loading动画版
tags:
  - css
  - loading
date: 2018-12-13 10:51:00
---

有了下面的 css 代码，给任意的标签（button、a、span等等）加上一个类名 `spin-loading`，标签自动变成 loading 状态，方便快捷效果好。

<!-- more -->

```css
/* 按钮loading */
.spin-loading {
  position: relative;
}

.spin-loading::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  /* center */

  width: 4px;
  height: 4px;
  content: '';

  -webkit-animation: spinZoom 1s steps(8) infinite;
  animation: spinZoom 1s steps(8) infinite;
  border-radius: 100%;
  box-shadow:
    0 -10px 0 1px currentColor,
    10px 0 currentColor,
    0 10px currentColor,
    -10px 0 currentColor,
    -7px -7px 0 .5px currentColor,
    7px -7px 0 1.5px currentColor,
    7px 7px currentColor,
    -7px 7px currentColor;
}

/* loading动画 */
@-webkit-keyframes spinZoom {
  0% {
    -webkit-transform: scale(.75) rotate(0);
  }

  100% {
    -webkit-transform: scale(.75) rotate(360deg);
  }
}

@keyframes spinZoom {
  0% {
    transform: scale(.75) rotate(0);
  }

  100% {
    transform: scale(.75) rotate(360deg);
  }
}
```