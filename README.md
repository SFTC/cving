# cving

[![NPM version](https://img.shields.io/npm/v/cving.svg?style=flat)](https://www.npmjs.com/package/cving)
[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi)

集成组件库、物料库、工具库于一体的业务提效平台

## npm 发版流程

修改 package.json 中的版本号，执行 `npm run release`

## 部署 github.io

```bash
$ npm run deploy
```

## [Todo](./TODO.md)

## 目录结构

```md
cving
├─ demos --------------------- **物料**
│ ├─ docs
│ │ └─ index.md
│ └─ table
│ └─ basic.tsx
├─ docs ---------------------- 首页文档
├─ src ----------------------- **组件**
│ ├─ docs
│ │ └─ index.md
│ ├─ components
│ │ └─ request
│ └─ index.tsx -------------- 对外入口
├─ tools --------------------- **工具**
│ ├─ docs
│ │ └─ index.md
│ └─ paramsToInterface
│ └─ index.ts
├─ .fatherrc.ts -------------- 打包配置
├─ webpack.config.js
└─ package.json
```
