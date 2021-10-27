---
title: "Linux操作--01"
date: "2021-10-27"
name: 'francis'
age: '26'
tags: [Linux基本操作]
categories: Linux
---

# Linux

## 环境变量更新

- yarn环境变量配置
  - 更新Users/.zshrc 文件，在后面补充变量
  - 更新.zshrc

```js
export PATH="$PATH:`yarn global bin`:$HOME/.config/yarn/global/node_modules/.bin"

source .zshrc
```
