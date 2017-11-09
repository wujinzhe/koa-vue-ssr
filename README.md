# Koa-vue-ssr 搭建服务端渲染

这个是一个根据vue-ssr官方文档搭建的初步的服务端渲染项目，服务端使用了koa2

> 背景

之前使用nuxt作为服务端渲染的开发框架，遇到了许多的问题，（大大小小可能现在都解决了），但是对于我们开发来说这个框架还是不可控的，不了解其中服务端渲染的原理，框架的一些配置达不到我们的要求，从而想自己根据官方文档搭建一个服务端渲染小的项目，初始的项目只保留了很基础的功能（后面会一步一步增加），对于从零开始研究服务端渲染还是不错的，大家可以一起学习探讨。

> 目录介绍

```
|____build                              构建目录
| |____webpack.base.config.js           基础打包配置
| |____webpack.client.config.js         客户端的打包配置
| |____webpack.server.config.js         服务端的打包配置
|____src
| |____App.vue
| |____index.html                       模板文件
| |____components
| | |____main.vue
| | |____one.vue
| | |____three.vue
| | |____two.vue
| |____entry
| | |____app.js                         通用入口文件
| | |____client.js                      客户端入口文件
| | |____server.js                      服务端入口   
| |____router                           
| | |____index.js                       路由文件
| |____static                           静态资源目录
| | |____image
| |____store                            store数据目录
| | |____index.js
|____server.js                          服务启动文件
```

> 目录启动

1. 使用``` npm i ```安装依赖包
2. ```npm run build ``` 打包构建
3. ```npm run start ``` 启动项目 在build的基础上开启 （端口为3000）
4. ```npm run dev ``` 在开发环境下启动项目（实现热更新）
4. 访问http://localhost:3000


> 注

2. 端口号可以在server.js里面修改