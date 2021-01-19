import React, { useRef } from 'react';
import { PlusOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';
import { TableColumnOperateBtnList } from 'cving';
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
  class: string;
}

/** 性别映射 */
const sexMap = {
  1: '男',
  2: '女',
};

const columns: ProColumns<TableListItem>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
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
    title: '学历',
    dataIndex: 'class',
    search: false,
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
  const formRef = useRef<FormInstance<SearchParams>>();

  // 导出
  const exportList = () => {
    const searchFormData = formRef.current?.getFieldsValue();
    console.log('searchFormData ---> ', searchFormData);
  };

  return (
    <ProTable<TableListItem>
      headerTitle="查询表格"
      rowKey="id"
      formRef={formRef}
      actionRef={actionRef}
      scroll={{
        x: 'max-content',
      }}
      rowClassName={(_, index) =>
        index % 2 === 1 ? 'cving-table-row-stripe' : ''
      }
      toolBarRender={() => [
        <Button key="1" type="primary">
          <PlusOutlined /> 新建
        </Button>,
        <Button key="export" type="primary" onClick={exportList}>
          <CloudDownloadOutlined /> 导出
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
