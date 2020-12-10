---
title: table 表格
order: 2
toc: menu
nav:
  path: /demos
group:
  path: /
---

# table

table 表格示例是在使用 [pro-tablem@2.13.2](https://procomponents.ant.design/components/table) 开发业务功能中沉淀的一些解决方案，可以在相同或类似的业务场景中参考示例代码快速开发。

## 最简单使用

<code
  src="../table/simple.tsx"
  title="最简单的查询表格"
  background="#f5f5f5"
  thumbnail="https://user-images.githubusercontent.com/19237129/98517311-ad2a1b00-22a8-11eb-9efc-8527d525f265.png"
  tags='["table表格"]'
  description="这是一个'查询表格'最简单的结构"
  previewUrl="https://sftc.github.io/cving/demos/table#%E6%9C%80%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8"
/>

## 基本使用

<code
  src="../table/basic.tsx"
  title="查询表格"
  description="这是一个功能较为完备的'查询表格'"
  tags='["table表格"]'
  background="#f5f5f5"
  thumbnail="https://user-images.githubusercontent.com/19237129/98813472-29665f00-245f-11eb-930b-bf23ea652f18.png"
/>

## 条纹样式

奇数的表格项会增加 `cving-table-row-stripe` 这个类名，可以将下面样式代码添加到 `src/global.[css|less]`中，成为全局样式。

```css
.cving-table-row-stripe {
  background: #f9f9f9;
}
```

<code
  src="../table/stripe.tsx"
  background="#f5f5f5"
  title="条纹样式"
  description="带有条纹样式的查询表格"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814772-1fddf680-2461-11eb-98bc-cd125282c3f5.png"
/>

## 列操作项

在原有 pro-table 基础上修改了一些样式，使得展示更清晰

<code
  src="../table/columnOpera.tsx"
  background="#f5f5f5"
  title="列操作项"
  description="在原有 pro-table 基础上修改了一些样式，使得展示更清晰"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814719-0a68cc80-2461-11eb-8e8c-e2f038f07a0f.png"
/>

## 表格操作按钮

除了"重置"、"查看"之外的按钮都写在 `toolBarRender` 中

<code
  src="../table/tableOpera.tsx"
  background="#f5f5f5"
  title="表格操作按钮"
  description="表格操作按钮"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814714-08067280-2461-11eb-930b-1d7d1bc331e2.png"
/>

## 搜索表单去掉"收起"功能，全部展开

通过设置 `search` 的 `collapsed` 和 `collapseRender` 参数实现

<code
  src="../table/searchCollapse.tsx"
  background="#f5f5f5"
  title="去掉'收起'功能"
  description="搜索表单去掉'收起'功能，全部展开"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814749-16548e80-2461-11eb-9344-671675ae0673.png"
/>

## 横向滚动

通过设置 `scroll.x` 参数实现

<code
  src="../table/tableScroll.tsx"
  background="#f5f5f5"
  title="横向滚动"
  description="横向滚动"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814780-22405080-2461-11eb-90ac-ec1eeb9713e2.png"
/>

## 批量操作

1. 通过设置 `rowSelection` 参数实现，antd 可配置参数[点击查看](https://ant-design.gitee.io/components/table-cn/#rowSelection)
   2.pro-table 在 antd 基础上增加了 alert 用来承载一些信息，可以通过 `tableAlertRender` 和 `tableAlertOptionRender` 参数进行自定义设置，示例代码[点击查看](https://procomponents.ant.design/components/table#%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C)

<code
  src="../table/rowSelection.tsx"
  background="#f5f5f5"
  title="批量操作"
  description="带有批量操作的查询表格"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814741-12c10780-2461-11eb-9e12-6dee77714e5b.png"
/>

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

<code
  src="../table/searchFormLayout.tsx"
  background="#f5f5f5"
  title="搜索表单布局"
  description="搜索表单布局"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814756-181e5200-2461-11eb-8c61-56a7c7d52a69.png"
/>

## 有必填的搜索项

1. 对必填的搜索项使用 `TableSearchRequired` 组件包裹
2. 初次加载不请求数据
3. 自定义"查询"、"重置"、"导出"等按钮，增加搜索项必填校验
4. 可以通过配置 columns 每个 item 的 `order` 属性对搜索项进行排序，权重大的排序靠前

<code
  src="../table/searchQueryRequired.tsx"
  background="#f5f5f5"
  title="有必填的搜索项"
  description="有必填的搜索项的查询表单"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814768-1e143300-2461-11eb-9164-fc6aecf3cb3b.png"
/>

## 各种类型的搜索项

| 字段名   | 搜索项类型   |
| -------- | ------------ |
| 姓名     | 普通 text    |
| 年龄     | 数字         |
| 性别     | 单选         |
| 职位     | 多选         |
| 月薪     | 金额         |
| 出生日期 | 日期         |
| 登记日期 | 时间         |
| 日期范围 | 日期区间     |
| 体重     | 自定义表单项 |

<code
  src="../table/valueType.tsx"
  background="#f5f5f5"
  title="各种类型的搜索项"
  description="带有各种类型的搜索项的查询表单"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814789-266c6e00-2461-11eb-86a0-5f70bf64e1a3.png"
/>

## 后端动态下发列

从后端读取列表数据和表格列配置进行动态渲染

<code
  src="../table/dynamicColumns.tsx"
  background="#f5f5f5"
  title="后端动态下发列"
  description="后端动态下发列的查询表单"
  tags='["table表格"]'
  thumbnail="https://user-images.githubusercontent.com/19237129/98814727-0dfc5380-2461-11eb-85b3-2a212c71e442.png"
/>
