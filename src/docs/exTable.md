---
title: 可编辑表格
order: 2
nav:
  path: /components
group:
  path: /
---

## 可编辑表格组件

可编辑表格组件基于 antdesgin Table 组件扩展开发，在继承 table 所有属性的基础上，扩展了单元格内渲染为 Input 输入框并且可编辑的能力，同时可以传入 antd form 实例,进行值的统一收集，后续会扩展更多的输入类型，如 Select，DatePicker 等，并加入表单校验能力。当前组件仅为基本功能，只支持 Input，并用 form 实现简单的表单数据收集。

**该组件提供的能力较为基础，更多功能推荐使用 [EditableProTable](https://procomponents.ant.design/components/editable-table)**

<code src="./demos/exTable/basic.tsx">

## 参数配置

**Table 默认接收 Table 组件所有参数**
| 参数 | 说明 | 类型 | 默认值 |
|---------|-------------------------------------------------|----------------|--------|
| columns | 表格列数组，具体项见下表 | `ExColumns` | `[]` |
| form | 表格对应的 form 实例，用于表格内可编辑对象的值收集 | `FormInstance` | `-` |

**Column 默认接收 Table Column 所有参数**
| 参数 | 说明 | 类型 | 默认值 |
|----------|----------------|------------|---------|
| editable | 该列是否可编辑 | `boolean` | `false` |
| name | 可编辑列的字段名 | `NamePath` | `-` |
