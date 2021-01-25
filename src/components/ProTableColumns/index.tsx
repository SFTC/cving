import React from 'react';
import { NP } from 'better-js-lib';
import LinkButton, { LinkButtonType } from './LinkButton/index';

import type { ProColumns } from '@ant-design/pro-table';

/**
 * 用于简单展示的 column 配置
 * @param title 标题
 * @param dataIndex 字段名
 * @param width 宽度，默认为120
 * @param other 其他配置项
 */
export const getColumnSimple = (
  title: ProColumns['title'],
  dataIndex: ProColumns['dataIndex'],
  width: ProColumns['width'] = 120,
  other?: ProColumns,
): ProColumns => ({
  title,
  dataIndex,
  width,
  search: false,
  ...other,
});

/**
 * 用于简单展示可搜索的 column 配置
 * @param title 标题
 * @param dataIndex 字段名
 * @param width 宽度，默认为120
 * @param other 其他配置项
 */
export const getColumnSimpleSearch = (
  title: ProColumns['title'],
  dataIndex: ProColumns['dataIndex'],
  width: ProColumns['width'] = 120,
  other?: ProColumns,
): ProColumns => ({
  title,
  dataIndex,
  width,
  ...other,
});

/**
 * 渲染金额的 column 配置
 * @param title 标题
 * @param dataIndex 字段名
 * @param width 宽度，默认为140
 * @param unit 金额单位，默认是分
 * @param other 其他配置项
 */
export const getColumnMoney = (
  title: ProColumns['title'],
  dataIndex: ProColumns['dataIndex'],
  width: ProColumns['width'] = 140,
  unit: 'yuan' | 'fen' = 'fen',
  other?: ProColumns,
): ProColumns => ({
  ...getColumnSimple(title, dataIndex, width, {
    valueType: 'money',
    renderText: (text) => (unit === 'fen' ? NP.divide(text, 100) : text),
    ...other,
  }),
});

/**
 * 渲染百分比的 column 配置
 * @param title 标题
 * @param dataIndex 字段名
 * @param width 宽度，默认为120
 * @param other 其他 columns 配置项
 * @param percentOptions valueType 的配置项
 */
export const getColumnPercent = (
  title: ProColumns['title'],
  dataIndex: ProColumns['dataIndex'],
  width: ProColumns['width'] = 120,
  other?: ProColumns,
  percentOptions?: { showSymbol?: boolean; precision?: number },
): ProColumns => ({
  ...getColumnSimple(title, dataIndex, width, {
    valueType: {
      type: 'percent',
      ...percentOptions,
    },
    ...other,
  }),
});

/**
 * 用于展示可跳转按钮的 column 配置
 * @param title 标题
 * @param dataIndex 字段名
 * @param onClick 点击按钮的执行事件，可获取到的参数同 render 方法
 * @param width 宽度(可选，默认为 140)
 * @param other 其他配置项（可选）
 * @param buttonOptions 按钮配置项（可选）
 */
export const getColumnLinkButton = <T extends Record<string, unknown>>(
  title: ProColumns['title'],
  dataIndex: ProColumns['dataIndex'],
  onClick: (
    text: React.ReactNode,
    entity: T,
    index: number,
    action: any,
  ) => void,
  width: ProColumns['width'] = 140,
  other?: ProColumns,
  buttonOptions?: LinkButtonType,
): ProColumns => ({
  ...getColumnSimpleSearch(title, dataIndex, width, {
    render: (text, record, index, action) => (
      <LinkButton
        onClick={() => onClick(text, record, index, action)}
        {...buttonOptions}
      >
        {text}
      </LinkButton>
    ),
    ...other,
  }),
});
