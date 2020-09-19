---
title: "从零搭建一个react-hooks项目（五）"
date: "2020-09-18"
name: 'francis'
age: '25'
tags: [react, react hooks, redux, webpack]
categories: Webpack
---

# 从零搭建一个react-hooks项目（五）

- 项目完成大概建起来了，但是当我打个生产包的时候都快哭了，一开始使用的devtool: "source-map"，用时高达 34 s，这当然是不可容忍的
- 然后我们先将devtool改为"none"，然后发现变为了29s

![图片](../source/webpack.png)

