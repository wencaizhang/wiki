---
title: VScode 编辑器自定义代码段
tags:
  - tool
date: 2017-11-24 20:20:53
updated: 2017-12-30 10:20:33
---

创建方式：
vscode 编辑器中依次选择 **文件** -> **首选项** -> **用户代码片段**，此时会打开一个选择框，用于选择代码片段文件或者创建代码片段，在下拉框中找到对应的 vue 选项，点击选中 vue 选项后会自动打开 vue.json 文件，用下面代码段将文件中内容全部替换掉。

然后在后缀为 vue 的空白文件中，打印 vue 并按下 `tab` 键，即可自动生成刚刚定义好的代码段。

// vue.json
```json
{
  "Print to console": {
  "prefix": "vue",
  "body": [
    "<template>",
    "  <section>",
    "    $1",
    "  </section>",
    "</template>",
    "",
    "<script>",
    "export default {",
    "  name: '',",
    "  data () {",
    "    return {",
    "      $2",
    "    }",
    "  },",
    "  methods: {",
    "  },",
    "}",
    "</script>",
    "",
    "<style scoped>",
    "",
    "</style>",
  ],
  "description": "生成vue文件模板"
}
```

生成对应的代码

```vue
<template>
  <section>
    
  </section>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
```
