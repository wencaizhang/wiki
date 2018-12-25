---
title: 为 Markdown 写作配置七牛云图床
tags:
  - markdown
  - 图床
  - chrome 插件
date: 2018-10-12 20:20:51
updated: 2018-10-12 22:20:33
---

## What is This

使用 Markdown 写作大家带来了很大的方便，但是如何处理图片一直是个问题，这里分享一个我使用的解决方案。

## 如何使用

首先要拥有一个七牛云的账号（[七牛云注册地址](https://portal.qiniu.com/signup?code=3ln23pc0t2xci)），然后通过 Chrome 网上应用商店安装 qiniu upload files 插件（[点击这里进行安装](https://chrome.google.com/webstore/detail/qiniu-upload-files/emmfkgdgapbjphdolealbojmcmnphdcc?utm_source=chrome-ntp-icon)）。

插件安装之后进行配置（截图如下）：

1. AccessKey 和 SecretKey 可以从七牛云网站个人面板下的密钥管理界面获取
2. 域名末尾记得加上 `/`，否则插件生成的链接可能有问题
3. bucket 是创建的储存空间的名字
4. 其他配置项可以不填

![插件配置](http://qiniu.wencaizhang.com/qiniu-upload-files-config.png)


## 可能有用的链接：

1. [qiniu upload files 插件下载地址](https://chrome.google.com/webstore/detail/qiniu-upload-files/emmfkgdgapbjphdolealbojmcmnphdcc?utm_source=chrome-ntp-icon)
2. [七牛云注册地址](https://portal.qiniu.com/signup?code=3ln23pc0t2xci)
