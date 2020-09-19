import React, { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';

export interface TableListItem {
  name: string;
  age: number;
  sex: string;
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 60,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    width: 60,
  },
  {
    title: '身份证号',
    dataIndex: 'idcard',
    width: 180,
  },
  {
    title: '生日',
    dataIndex: 'birthday',
    width: 120,
  },
  {
    title: '学历',
    dataIndex: 'class',
    width: 100,
  },
  {
    title: '占位1',
    dataIndex: 'value1',
  },
  {
    title: '占位2',
    dataIndex: 'value2',
  },
  {
    title: '占位3',
    dataIndex: 'value3',
  },
  {
    title: '占位4',
    dataIndex: 'value4',
    ellipsis: true,
    copyable: true,
    width: 200,
  },
  {
    title: '占位5',
    dataIndex: 'value5',
  },
  {
    title: '占位6',
    dataIndex: 'value6',
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<TableListItem>
      headerTitle="查询表格"
      rowKey="id"
      actionRef={actionRef}
      scroll={{
        x: 'max-content',
      }}
      toolBarRender={() => [
        <Button key="1" type="primary">
          <PlusOutlined /> 新建
        </Button>,
      ]}
      request={async (params = {}) =>
        request<{
          data: TableListItem[];
        }>(
          'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/demo/table/scroll',
          {
            params,
          },
        )
      }
      columns={columns}
    />
  );
};
