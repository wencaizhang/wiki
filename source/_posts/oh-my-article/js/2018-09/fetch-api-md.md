---
title: 网络请求接口-fetch
date: 2018-09-30 19:30:13
tags: 
  - javascript
  - fetch
  - ajax
  - react-native
---


## fetch 简介

最简单的 fetch 请求如下

```js
fetch('http://example.com/movies.json')
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
  });
```

fetch 请求

## 封装

### 1 GET 请求    

```js
getData (url) {
  return fetch(url)
}
```

### 2 POST 请求

以 form-data 形式提交数据

```js
postData (url, payload) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  })
}
```

以 json 形式提交数据
```js
postJSON (url, payload) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
}
```

## 应用

example

```js
let url = 'http://example.com/api/goods_list/'
const data = {

}

postJSON(url, data)
.then(resp => resp.json())
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```

example2

```js

async fn () {
  let url = 'http://example.com/api/goods_list/'
  const data = {

  }

  try {
    const resp = await postJSON(url, data)
    const data = await resp.json()

    // 下面开始对返回的数据进行处理
    if (resp.status == 200) {
      console.log('success')
    } else {
      console.log()
    }
  } catch (err) {
    console.log(err)
  }
}

```