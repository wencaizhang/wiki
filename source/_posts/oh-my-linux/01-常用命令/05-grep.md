---
title: Linux-grep
date: 2017-02-20 00:28:21
toc: true
tags: [linux]
---

# grep - 强大的文本搜索工具

如果想在文件中搜索指定的文字，那么 `grep` 会助你一臂之力！

使用模式大致为：`grep + "要搜索的文本" + 指定的文件或目录路径 + 相应的参数`。

如果要搜索的文本比较复杂，也可以使用正则表达式匹配。

## 示例

### 1. 要在指定的文件 a.txt 中搜索指定文本 `test` ：

```sh
grep "test" a.txt
```

### 2. 在指定目录 temp 下查找所有包含文字 `test` 的文件

可以使用目录的绝对路径，也可以是相对路径。假设 temp 的绝对路径是 `/var/www/temp`

```sh
grep "test" /var/www/temp/ -r
```