import React, { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';

export interface SearchParams {
  name: string;
  age: number;
  sex: string;
  class: string[];
}

export interface TableListItem {
  name: string;
  age: number;
  sex: string;
}

/** 性别映射 */
const sexMap = {
  1: '男',
  2: '女',
};

/** 职位映射 */
const classMap = {
  1: '学生',
  2: '教师',
  3: '工人',
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    valueType: 'digit',
    fieldProps: {
      precision: 0, // 数字精度
    },
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueEnum: sexMap,
  },
  {
    title: '职位',
    dataIndex: 'class',
    valueEnum: classMap,
    fieldProps: {
      mode: 'multiple',
    },
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<TableListItem, SearchParams>
      headerTitle="查询表格"
      rowKey="id"
      actionRef={actionRef}
      toolBarRender={() => [
        <Button key="1" type="primary">
          <PlusOutlined /> 新建
        </Button>,
      ]}
      search={{
        collapsed: false,
        collapseRender: () => null,
      }}
      request={async params =>
        request<{
          data: TableListItem[];
        }>(
          'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/demo/table/value-type',
          {
            params,
          },
        )
      }
      beforeSearchSubmit={params => {
        const processParams = {
          ...params,
          class: params.class?.join(),
        };
        return processParams as Partial<SearchParams>;
      }}
      columns={columns}
    />
  );
};
