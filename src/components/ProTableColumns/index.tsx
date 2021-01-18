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
