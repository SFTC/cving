# cving

[![NPM version](https://img.shields.io/npm/v/cving.svg?style=flat)](https://www.npmjs.com/package/cving)
[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi)

用于提效的业务物料库

## npm 发版流程

修改 package.json 中的版本号，执行 `npm run release`

## 部署 github.io

```bash
$ npm run deploy
```

# Todo

- [tab 切换空白问题] `dumi` 源码中存在 `bug`，多个文件时导致文件间进行切换的时候出现空白
- [页面场景] 场景底部 `title` 跟背景色不搭调
- [区块&模版] 目前通过 `umi ui` 引入的话只支持 `block`，看看如何能支持 `template` 模版

# Done

- [控制台报错] 目前代码示例那块，由于 `div` 被嵌入到 `p` 标签中了，控制台总是报错 `warning`
