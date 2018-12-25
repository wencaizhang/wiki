---
title: anywhere使用笔记
tags:
  - server
  - node
date: 2018-12-13 10:51:00
---

> 随时随地将你的当前目录变成一个静态文件服务器的根目录

## 场景

某天你需要临时把自己的电脑当做一个静态服务器，你可以选择使用 nginx，但如果你不想写一些复杂的配置，仅仅是想把某个目录向外暴露，那么你还可以选择 anywhere。

anywhere 是一个 nodejs 的 npm 包，安装和使用都非常的简单。

## 全局安装

需要提前安装 nodejs

```bash
npm install anywhere -g
```

## 命令介绍

### 仅有一个命令

命令 `anywhere` 会将当前目录作为服务器根目录，调用默认浏览器在默认端口 8000 打开主页。

```bash
anywhere
```

### 如果你需要指定端口：

```bash
anywhere -p 1234
```

甚至你可以忽略 `-p`，命令后面直接紧跟端口号：

```bash
anywhere 1234
```

### 如果你不想调用让浏览器直接打开主页

当你在 linux 服务器上面使用时，这会很有用。

```bash
anywhere -s
```

### 如果你想指定服务器根目录

根目录默认是命令行当前目录，但你也可以自己指定

可以指定绝对路径

```bash
anywhere /home
```

也可以指定相对路径

```bash
anywhere ./www
```

### 如果你想指定服务器首页

`anywhere` 命令会默认打开根目录下的 index.html 当做首页，你可以手动指定另外一个 html 文件当做首页。

```bash
anywhere -f login.html
```

### 如果你想指定主机名

`anywhere` 启动的服务器默认主机名是本机的 ip 地址，你可以指定为 `localhost`

```bash
anywhere -h localhost
```

## 最后

如果你忘记某个参数，随时可以使用 `anywhere --help` 查看帮助手册。

或者查看 anywhere 文档：https://www.npmjs.com/package/anywhere
