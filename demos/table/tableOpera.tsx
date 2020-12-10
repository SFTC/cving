import React, { useRef } from 'react';
import { EditOutlined, RedoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';
import { FormInstance } from 'antd/lib/form';

export interface SearchParams {
  name: string;
  age: number;
  sex: string;
}

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
  const formRef = useRef<FormInstance<SearchParams>>();

  const handleCreate = () => {
    formRef.current?.setFieldsValue({
      name: '张三',
    });
  };

  const handleRefresh = () => {
    actionRef.current?.reload();
  };

  return (
    <ProTable<TableListItem>
      headerTitle="查询表格"
      rowKey="id"
      actionRef={actionRef}
      formRef={formRef}
      toolBarRender={() => [
        <Button key="edit" type="primary" onClick={handleCreate}>
          <EditOutlined /> 赋值
        </Button>,
        <Button key="reload" onClick={handleRefresh}>
          <RedoOutlined /> 刷新
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
