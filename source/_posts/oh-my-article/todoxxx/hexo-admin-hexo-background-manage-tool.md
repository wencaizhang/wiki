title: 'hexo-admin: hexo博客的后台管理工具'
author: wencaizhang
tags:
  - hexo
 
date: 2018-05-18 18:01:00
---
## 零、前言

> Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

Hexo 生成静态网站，我们可以很灵活的将其部署在 GitHub Pages 上或者是随便一个静态服务器上。

但随之带来的一个问题就是无法像 wordpress 一样提供一个后台管理界面。hexo-admin 很好的解决了这一痛点需求。

<!-- more -->

## 一、安装

### 1. 安装 hexo 并创建 blog

*如已创建则跳过此步骤*

```bash
npm install -g hexo
cd ~/
hexo init my-blog
cd my-blog
npm install
```

### 2. 安装 hexo-admin 并启动服务

```bash
npm install --save hexo-admin
hexo server -d
```

hexo-admin 管理界面路径为 `博客预览地址` + `admin`，即如果你的博客预览地址为 `http://localhost:4000/` ，则 hexo-admin 管理界面路径为 `http://localhost:4000/admin/`

## 二、启用密码保护

启动 hexo 预览服务之后，进入 `http://localhost:4000/admin/` 即可直接对博客文章进行修改，也就是说如果你的博客安装在静态服务器上，则别人也有可能通过这个地址，对你的博客进行修改，为了避免这一情况，可以启动密码保护服务。步骤如下：

1. 启动 hexo 服务，打开 hexo-admin 界面，找到  ` Settings > Setup authentification`，如图所示：

	![](http://p2btijoky.bkt.clouddn.com/18-5-18/41667201.jpg)

2. 点击进入设置页面，在页面中分别填写 ` Username`, `Password` 和 `Secret`，填写完成之后，页面下方会生成一段配置代码。配置代码示例：

  ```yml
  # hexo-admin authentification
  admin:
    username: username
    password_hash: $2a$10$sTyd76sSKai3FGnSYgi4cO6ibhFaJDMbTXx3dja7SRPh1m1hXN8za
    secret: secret
  ```

3. 将这段代码复制到根目录配置文件 `_config.yml` 中，然后重启 hexo 服务，再次进入 hexo-admin 界面时就需要使用前面设置的用户名和密码进行登录了。

	![](http://p2btijoky.bkt.clouddn.com/18-5-18/32546895.jpg)