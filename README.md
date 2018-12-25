#《Oh-My-Wiki》

本博客遵循MIT开源协议。

## 如何组建出我的博客

+ hexo: 静态网站模版引擎
+ gitee Pages: 挂载博客的服务器
+ 七牛云: 将静态图片都存放于又拍云上
+ gulp: 用于网站的静态文件自动合并压缩，并部署

## 安装依赖环境

```
# 如果系统中没有 nodejs 环境，请先安装
# 安装依赖的 npm 包
npm install
# or
yarn
```

## 编译与部署
npm run build    # 本地编译
npm run dev      # 本地编译并启动测试服务器
gulp             # 压缩静态文件