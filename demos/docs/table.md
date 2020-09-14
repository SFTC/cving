---
title: table 表格
nav:
  path: /demos
group:
  path: /
  order: 3
---

# table

table 表格示例是在使用 [pro-table](https://procomponents.ant.design/components/table) 开发业务功能中沉淀的一些解决方案，可以在相同或类似的业务场景中参考示例代码快速开发。

## 最基本使用

这是一个"查询表格"最简单的结构

<code src="../table/simple.tsx" background="#f5f5f5" />

## 条纹样式

奇数的表格项会增加 `dark-row` 这个类名，可以将下面样式代码添加到 `src/global.[css|less]`中，成为全局样式。

```css
.dark-row {
  background: #f9f9f9;
}
```

<code src="../table/stripe.tsx" background="#f5f5f5" />

## 列操作项

在原有 pro-table 基础上修改了一点样式，使得展示更清晰

<code src="../table/columnOpera.tsx" background="#f5f5f5" />
