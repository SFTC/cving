---
title: 权限按钮
order: 5
nav:
  path: /components
group:
  path: /
---

## 权限组件

权限组件主要是 Ant Design Button 的拓展,支持 Button 所有属性，另外支持通过权限来控制按钮的显隐

_[@umijs/plugin-access](https://umijs.org/zh-CN/plugins/plugin-access#access-1)也提供了 React hook `useAccess` 以及组件 `<Access />` 对应用进行权限控制_

## 基本使用

<code src="./demos/authButton.tsx">

## 参数配置

**AuthButton 默认接收 Button 组件所有参数,另外的参数如下**
| 参数 | 说明 | 类型 | 默认值 |
| -----------------| --------------------------------------- | --------------- | ---------|
| authNumber | 按钮对应的权限 | `Number`\|`Array<Number>` | `-` |
| authArray | 用户所有的权限 | `Array<Number>` | `-` |
| personalAuthFun | 自定义的权限函数 | `Function` | `-` |
