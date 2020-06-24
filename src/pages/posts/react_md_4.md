---
title: "从零搭建一个react-hooks项目（四）"
date: 2020-06-24
name: 'francis'
age: '25'
tags: [react, react hooks, redux, webpack]
categories: Webpack
---

# 从零搭建一个react-hooks项目（四）

- 前面我们搭建了基于react与typescript的开发环境，接下来就是我们项目开发中遇到的一些问题处理了

## 图片引入申明报错问题处理

- 之前我们配置了图片引入并且在页面中进行了图片引入，当我们把页面变为ts之后会发现图片引入的地方被标红了，报错为 Cannot find module './image/img.png' or its corresponding type declarations，这里是因为图片类型我们没有为其设定类型文件，所以报错，这种情况下，我们可以在src目录下新建image.d.ts文件来为其进行声名，声明文件如下

```js
// image.d.ts
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
```

- 这样就能发现我们的ts类型错误消失了

## 非组件页面进行页面跳转

- 传统中使用react-router-dom进行页面跳转需要在页面中获取props，然后props中获取history，然后采用history.push('/home')的形式进行页面跳转
- 要是想在别的非组件页面，如request文件或者入口index.tsx中进行页面跳转就需要依赖三方库如history进行页面路由跳转，如下

```js
// index.tsx 这样就实现了在非组件页面中的跳转，页面打开后两秒自动跳转登录
// 需安装依赖history：npm i history -S
import { createHashHistory  } from 'history'
const history = createHashHistory() 
setTimeout(() =>{
  history.push('/login')
}, 2000)

``` 

- 我们简单的将该方法封装一下，方便后续的使用，在src文件夹下创建lib/untils.ts文件用于我们的工具函数封装，如下
  
```js
// src/lib/untils.js
import { createHashHistory  } from 'history'
const history = createHashHistory() 
export {
  history
}

// index.tsx
import { history } from './src/lib/untils'
setTimeout(() =>{
  history.push('/home')
}, 2000)

```

- 这样就可以实现在其他工具页面进行页面跳转了