import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';

export interface TableListItem {
  name: string;
  age: number;
  sex: string;
}

export interface List {
  id: number;
  name: string;
  age: number;
  sex: string;
}

export interface Column {
  title: string;
  dataIndex: string;
}

/** 接口请求结果 */
export interface RequestResult {
  /** 列表数据 */
  list: List[];
  /** 列配置信息 */
  columns: Column[];
}

export default () => {
  const actionRef = useRef<ActionType>();
  const [columns, setColumns] = useState<ProColumns<TableListItem>[]>([]);

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
          'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/demo/table/dynamic',
          {
            params,
          },
        )
      }
      postData={requestResult => {
        // @ts-ignore
        setColumns((requestResult as RequestResult).columns);
        // @ts-ignore
        return (requestResult as RequestResult).list;
      }}
      columns={columns}
    />
  );
};
