---
title: ElementUI（Vue）中按照百分比对表格排序
tags:
  - vue
  - 排序
  - js
date: 2018-12-26 18:20:53
---

首先，Element Vue 的[表格组件](http://element-cn.eleme.io/#/zh-CN/component/table#pai-xu)支持排序功能，并且支持自定义排序。

然后，需求是让表格可以按照某一列（百分比）排序。

因为默认提供的排序功能实际上是 Array.prototype.sort() 来实现的，它是按照字符串 Unicode 码点进行排序，而我们是要根据百分比的大小排序。所以只能自定义一个排序的规则。

排序方法的实现如下：

```js
sortPercentMethod(obj1, obj2, prop) {
  let v1 = parseFloat(obj1[prop]);
  let v2 = parseFloat(obj2[prop]);
  return v1 - v2;
}
```

Element Vue 的[表格组件](http://element-cn.eleme.io/#/zh-CN/component/table#pai-xu)提供了指定排序方法的属性 `sort-method` ，所以可以这样来指定排序方法:

```js
:sort-method="(a, b) => { return sortPercentMethod(a, b, 'percent') }"
```

这里没有直接将 `sort-method` 属性值指定为 `sortPercentMethod`，而是指定为一个匿名函数，在匿名函数中将 `sortPercentMethod` 的执行结果返回。其主要目的是为了让其他的需要按照这一排序规则的列也能够共用此排序方法。

### 完整实例

示例代码如下，在配置 vue 和 element-ui 的项目中可以直接拷贝查看效果。

```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    >
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="percent"
      label="百分比"
      sortable
      :sort-method="(a, b) => { return sortPercentMethod(a, b, 'percent') }"
      width="180">
    </el-table-column>
  </el-table>
</template>
```

```js
<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '王大虎',
          percent: '10%',
        }, {
          name: '王二虎',
          percent: '20%',
        }, {
          name: '王三虎',
          percent: '30%',
        }, {
          name: '王四虎',
          percent: '40%',
        }]
      }
    },
    methods: {
      sortPercentMethod(obj1, obj2, prop) {
        let v1 = parseFloat(obj1[prop]);
        let v2 = parseFloat(obj2[prop]);
        return v1 - v2;
      }
    }
  }
</script>
```