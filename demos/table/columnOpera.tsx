import React, { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';
import { TableColumnOperateBtnList } from 'cving';

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
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    fixed: 'right',
    render: (_, record, _index, action) => (
      <TableColumnOperateBtnList
        list={[
          Math.random() > 0.5 ? (
            <a key="check" onClick={() => console.log(record)}>
              查看
            </a>
          ) : null,
          <a key="edit" onClick={() => console.log(record)}>
            修改
          </a>,
          <a key="delete" onClick={() => action.reload()}>
            删除
          </a>,
        ]}
      />
    ),
  },
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
          'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/demo/table/basic',
          {
            params,
          },
        )
      }
      columns={columns}
    />
  );
};
