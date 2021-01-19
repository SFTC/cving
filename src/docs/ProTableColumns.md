---
title: ProTableColumns
toc: menu
order: 3
nav:
  path: /components
group:
  path: /
---

# ProTableColumns

ProTableColumns 对 [pro-table](https://procomponents.ant.design/components/table) 中一些常用的、功能比较简单的 columns 进行了二次封装，目的是为了减少一些模板代码。

## 如何使用

ProTableColumns 暴露出了一些方法，每个方法接收一些配置参数，返回一个 pro-table 的 column 对象。

举个例子：

```tsx | pure
import React from 'react';
import ProTable from '@ant-design/pro-table';
import { ProTableColumns } from 'cving';

const { getColumnSimple } = ProTableColumns;

const columns = [getColumnSimple('姓名', 'name')];

export default () => <ProTable columns={columns} />;
```

## API

### `getColumnSimple`

用于表格中展示数据，筛选条件中默认隐藏该字段，接收参数如下：

| 参数      | 说明     | 类型                      | 是否必传 | 默认值 | 可选值 |
| --------- | -------- | ------------------------- | -------- | ------ | ------ |
| title     | 标题     | `ProColumns['title']`     | 是       | `--`   | `--`   |
| dataIndex | 字段名   | `ProColumns['dataIndex']` | 是       | `--`   | `--`   |
| width     | 宽度     | `ProColumns['width']`     | 否       | `120`  | `--`   |
| other     | 其他配置 | `ProColumns`              | 否       | `--`   | `--`   |

### `getColumnSimpleSearch`

用于表格中展示数据，同时筛选条件中展示该字段，接收参数如下：

| 参数      | 说明     | 类型                      | 是否必传 | 默认值 | 可选值 |
| --------- | -------- | ------------------------- | -------- | ------ | ------ |
| title     | 标题     | `ProColumns['title']`     | 是       | `--`   | `--`   |
| dataIndex | 字段名   | `ProColumns['dataIndex']` | 是       | `--`   | `--`   |
| width     | 宽度     | `ProColumns['width']`     | 否       | `120`  | `--`   |
| other     | 其他配置 | `ProColumns`              | 否       | `--`   | `--`   |

### `getColumnMoney`

用于表格中展示**金额类**数据，筛选条件中默认隐藏该字段，接收参数如下：

| 参数      | 说明     | 类型                      | 是否必传 | 默认值 |
| --------- | -------- | ------------------------- | -------- | ------ |
| title     | 标题     | `ProColumns['title']`     | 是       | `--`   |
| dataIndex | 字段名   | `ProColumns['dataIndex']` | 是       | `--`   |
| width     | 宽度     | `ProColumns['width']`     | 否       | `120`  |
| unit      | 金额单位 | `'yuan'` \| `'fen'`       | 否       | `fen`  |
| other     | 其他配置 | `ProColumns`              | 否       | `--`   |

### `getColumnPercent`

用于表格中展示**百分比类**数据，筛选条件中默认隐藏该字段，接收参数如下：

| 参数           | 说明       | 类型                                           | 是否必传 | 默认值                                  |
| -------------- | ---------- | ---------------------------------------------- | -------- | --------------------------------------- |
| title          | 标题       | `ProColumns['title']`                          | 是       | `--`                                    |
| dataIndex      | 字段名     | `ProColumns['dataIndex']`                      | 是       | `--`                                    |
| width          | 宽度       | `ProColumns['width']`                          | 否       | `120`                                   |
| other          | 其他配置   | `ProColumns`                                   | 否       | `--`                                    |
| percentOptions | 百分比配置 | `{ showSymbol?: boolean; precision?: number }` | 否       | `{ showSymbol?: false; precision?: 2 }` |

### `getColumnLinkButton`

用于表格中展示**可跳转的**数据，同时筛选条件中展示该字段，接收参数如下：

| 参数          | 说明           | 类型                                                                     | 是否必传 | 默认值 |
| ------------- | -------------- | ------------------------------------------------------------------------ | -------- | ------ |
| title         | 标题           | `ProColumns['title']`                                                    | 是       | `--`   |
| dataIndex     | 字段名         | `ProColumns['dataIndex']`                                                | 是       | `--`   |
| onClick       | 点击回调       | `(text: React.ReactNode, entity: T, index: number, action: any) => void` | 是       | `--`   |
| width         | 宽度           | `ProColumns['width']`                                                    | 否       | `140`  |
| other         | 其他配置       | `ProColumns`                                                             | 否       | `--`   |
| buttonOptions | 可点击按钮配置 | `同 antd 的 Button 组件`                                                 | 否       | `--`   |

## 示例

<code
  src="./demos/ProTableColumns/simple.tsx"
  background="#f5f5f5"
/>
