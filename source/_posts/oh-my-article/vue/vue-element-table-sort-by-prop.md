---
title: ElementUI（Vue）中按照百分比对表格排序
tags:
  - vue
  - 排序
  - js
date: 2018-12-26 18:20:53
---

示例代码如下，在配置 vue 和 element-ui 的项目中可以直接拷贝查看效果。

```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
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
          date: '2016-05-02',
          name: '王小虎',
          percent: '0%',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          percent: '20%',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          percent: '30%',
        }, {
          date: '2016-05-03',
          name: '王小虎',
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