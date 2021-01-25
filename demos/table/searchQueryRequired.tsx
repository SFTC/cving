import React, { useRef } from 'react';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';
import { TableSearchRequired } from 'cving';
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
    title: (_, type) => <TableSearchRequired title="姓名" type={type} />,
    dataIndex: 'name',
    fieldProps: {
      placeholder: '请输入姓名',
    },
    order: 1,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    order: 2,
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance<SearchParams>>();

  /** 搜索条件查询或者导出前校验必填字段 */
  const beforeSubmitJudgeRequiredFields = (cb: () => void) => {
    const requiredFields = formRef.current?.getFieldsValue(['name']) as Pick<
      SearchParams,
      'name'
    >;
    if (!requiredFields.name) {
      message.warning('请选择"姓名"');
    } else {
      cb();
    }
  };

  // 导出
  const exportList = () => {
    beforeSubmitJudgeRequiredFields(() => {
      // ...
    });
  };

  return (
    <ProTable<TableListItem, SearchParams>
      manualRequest
      headerTitle="查询表格"
      rowKey="id"
      actionRef={actionRef}
      formRef={formRef}
      form={{
        requiredMark: true,
        hideRequiredMark: false,
      }}
      search={{
        optionRender: ({ searchText, resetText }, { form }) => [
          <Button
            key="reset"
            style={{ marginRight: '8px' }}
            onClick={() => form?.resetFields()}
          >
            {resetText}
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              beforeSubmitJudgeRequiredFields(() => form?.submit());
            }}
          >
            {searchText}
          </Button>,
        ],
      }}
      toolBarRender={() => [
        <Button key="export" type="primary" onClick={exportList}>
          <CloudDownloadOutlined /> 导出
        </Button>,
      ]}
      request={async (params) =>
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
