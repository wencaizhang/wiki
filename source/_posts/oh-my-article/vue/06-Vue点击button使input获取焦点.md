---
title: vue 项目中操作 dom
tags: [vue]
toc: true
date: 2017-11-24 20:20:53
---

在某些时候我们希望点击一个按钮可以让输入框获取焦点，但是 Vue 中不建议直接操作 DOM 元素，这时候可以利用 Vue 提供的 `ref` 属性来实现。

> [vue-refs](https://cn.vuejs.org/v2/api/#vm-refs): 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例。

在 `input` 上面绑定属性 `ref="content"`，然后就可以通过 `this.$refs.content` 获取到对应的 input 的 dom 元素。

代码如下：

HTML
```html
<input type="text" ref="content" />
<button @click="clickHandler">Button</button>
```
VUE
```js
methods: {
    clickHandler(){
        this.$refs.content.focus()
    }
}
```