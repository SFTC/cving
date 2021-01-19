import React, { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';
import { ProTableColumns } from 'cving';

import type { ProColumns, ActionType } from '@ant-design/pro-table';

const {
  getColumnSimple,
  getColumnSimpleSearch,
  getColumnMoney,
  getColumnPercent,
  getColumnLinkButton,
} = ProTableColumns;

export type TableListItem = {
  name: string;
  age: number;
  sex: string;
};

const columns: ProColumns<TableListItem>[] = [
  getColumnLinkButton('ID', 'id', () => {}),
  getColumnSimple('姓名', 'name'),
  getColumnSimpleSearch('年龄', 'age'),
  getColumnMoney('薪资', 'pay', undefined, 'yuan'),
  getColumnPercent('占比', 'percent'),
];

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<TableListItem>
      headerTitle="查询表格"
      rowKey="id"
      actionRef={actionRef}
      toolBarRender={() => [
        <Button key="1" type="primary">
          <PlusOutlined /> 新建
        </Button>,
      ]}
      request={async (params = {}) =>
        request<{
          data: TableListItem[];
        }>(
          'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/pro-table-columns',
          {
            params,
          },
        )
      }
      columns={columns}
    />
  );
};
