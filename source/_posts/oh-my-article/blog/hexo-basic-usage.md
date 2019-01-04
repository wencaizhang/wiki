title: hexo 基本使用备忘
author: wencaizhang
tags: [blog, hexo]
date: 2018-05-18 20:35:00
---

## 简介

> Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

<!-- more -->

## 安装

全局安装 hexo 脚手架：
```bash
npm install -g hexo-cli
```

## 创建博客

在 `blog` 目录下新建一个网站，然后安装 `npm` 依赖：

```bash
hexo init blog
cd blog
npm install
```

## 常用命令

+ 生成静态网站
```bash
hexo generate
```

+ 启动服务器
```bash
hexo server
```

+ 清除缓存文件 (db.json) 和已生成的静态文件 (public)
```
hexo clean
```

+ 新建一篇文章
```bash
hexo new [layout] <title>
```

## 小Tips

在 `package.json` 中自定义 `npm scripts` 脚本：
```json
"scripts": {
  "dev": "hexo clean && hexo g && hexo s",
	"build": "hexo clean && hexo g && hexo d"
}
```



[Hexo 文档](https://hexo.io/zh-cn/docs/)