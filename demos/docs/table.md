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

奇数的表格项会增加 `cving-table-row-stripe` 这个类名，可以将下面样式代码添加到 `src/global.[css|less]`中，成为全局样式。

```css
.cving-table-row-stripe {
  background: #f9f9f9;
}
```

<code src="../table/stripe.tsx" background="#f5f5f5" />

## 列操作项

在原有 pro-table 基础上修改了一些样式，使得展示更清晰

<code src="../table/columnOpera.tsx" background="#f5f5f5" />

## 表格操作按钮

除了"重置"、"查看"之外的按钮都写在 `toolBarRender` 中

<code src="../table/tableOpera.tsx" background="#f5f5f5" />

## 搜索表单去掉"收起"功能，全部展开

通过设置 `search` 的 `collapsed` 和 `collapseRender` 参数实现

<code src="../table/searchCollapse.tsx" background="#f5f5f5" />

## 横向滚动

通过设置 `scroll.x` 参数实现

<code src="../table/tableScroll.tsx" background="#f5f5f5" />

## 批量操作

1. 通过设置 `rowSelection` 参数实现，antd 可配置参数[点击查看](https://ant-design.gitee.io/components/table-cn/#rowSelection)
   2.pro-table 在 antd 基础上增加了 alert 用来承载一些信息，可以通过 `tableAlertRender` 和 `tableAlertOptionRender` 参数进行自定义设置，示例代码[点击查看](https://procomponents.ant.design/components/table#%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C)

<code src="../table/rowSelection.tsx" background="#f5f5f5" />

## 搜索表单布局

1. 改变 `search.labelWidth` 参数可以设置 label 的宽度
2. 改变 `search.span` 参数可以设置每一行放几个搜索项，支持响应式布局，默认值：

```tsx | pure
const defaultColConfig = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 6,
};
```

<code src="../table/searchFormLayout.tsx" background="#f5f5f5" />

## 有必填的搜索项

1. 对必填的搜索项使用 `TableSearchRequired` 组件包裹
2. 自定义"查询"、"重置"、"导出"等按钮，增加搜索项必填校验
3. 可以通过配置 columns 每个 item 的 `order` 属性对搜索项进行排序，权重大的排序靠前

<code src="../table/searchQueryRequired.tsx" background="#f5f5f5" />

## 各种类型的搜索项

包含类型：

1. 普通 text
2. 单选
3. 多选

<code src="../table/valueType.tsx" background="#f5f5f5" />
