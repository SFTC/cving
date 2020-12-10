import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';
import { Key } from 'antd/lib/table/interface';

export interface TableListItem {
  name: string;
  age: number;
  sex: string;
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

  return (
    <ProTable<TableListItem>
      headerTitle="查询表格"
      rowKey="id"
      actionRef={actionRef}
      rowSelection={{
        selectedRowKeys: selectedKeys,
        onChange(selectedRowKeys) {
          setSelectedKeys(selectedRowKeys);
        },
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
          'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/demo/table/simple',
          {
            params,
          },
        )
      }
      columns={columns}
    />
  );
};
