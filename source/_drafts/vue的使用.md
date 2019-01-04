---
title: vue中动态监听数据变化——vm.$set
tags: [vue]
---

先来看这样一个案例

```html
<h3>选择你最爱吃的蔬菜：</h3>
<ul>
  <li
    v-for="item in list"
    :key="item.id"
    @click="handleClick(item)"
    :class="{active: item.checked}"
  >
    {{item.name}}
  </li>
</ul>
```

```js
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      // 假设 list 是从服务端请求得到的数据
      const list = [
        { id: 1, name: '土豆', checked: false },
        { id: 2, name: '番茄', checked: false },
        { id: 3, name: '黄瓜', checked: false },
      ]
      list[0].checked = true
      this.list = list
    },
    handleClick (item) {
      this.list.forEach(item => item.checked = false)
      item.checked = true
    },
  }
}
```