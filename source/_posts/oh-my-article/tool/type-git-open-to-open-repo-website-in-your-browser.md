---
title: 在命令行中直接打开项目的 GitHub 页面
tags:
  - tool
date: 2018-12-28 21:24:53
---

在命令行中直接打开项目的 GitHub 页面

### 用法

```
git open [remote-name] [branch-name]
```

`git-open` 命令支持我们常用的 GitHub 和 GitLab，以及公司和个人自行搭建的 GitLab。另外，国内的[码云](https://gitee.com/)也是支持的。

完整列表如下（来源：官网文档）:

  + github.com
  + gist.github.com
  + gitlab.com
  + GitLab custom hosted (see below)
  + bitbucket.org
  + Atlassian Bitbucket Server (formerly Atlassian Stash)
  + Visual Studio Team Services
  + Team Foundation Server (on-premises)
  + AWS Code Commit



### 示例

+ 默认打开 origin 的 master 分支
```
$ git open
```

+ 指定 remote 
```
git open someremote
```

+ 指定分支，指定 remote
```
git open someremote somebranch
```

+ 打开 Issues 页面
```
git open --issue
```

### 安装方式

这里介绍使用 npm 命令安装的方式：

```
npm install -g git-open
```

它还支持更多安装方式，详情请看[文档](https://github.com/paulirish/git-open#installation)