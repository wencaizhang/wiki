---
title: 修改commit信息
date: 2017-02-20 00:28:21
toc: true
tags: [git, tool]
---

> amend: *vi.&vt.* 修改，修订。

如果要修改最近一次 commit 信息，且这次 commit 尚未 push 到远程，可以通过参数 `--amend` 直接进行修改：

```bash
git commit --amend -m "your message"
```
