import React, { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';
import { FormInstance } from 'antd/lib/form';

export interface SearchParams {
  name: string;
  age: number;
  sex: string;
  class: number[];
  salary: number;
  birthday: string;
  record_time: string | number;
  range_time: string[];
}

export interface TableListItem {
  name: string;
  age: number;
  sex: string;
  class: number;
  salary: number;
  birthday: string;
  record_time: string;
  range_time: string;
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
    title: '体重',
    dataIndex: 'weight',
    hideInTable: true,
    // renderFormItem 多用来做一些和其他搜索项有关联的逻辑判断，详见：https://procomponents.ant.design/components/table#自定义表单项-1
    renderFormItem: (_, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const sex = form.getFieldValue('sex');
      // 男生才可以用体重搜素
      if (sex === '1') {
        return <Input {...rest} placeholder="请输入" />;
      }
      return null;
    },
  },
  {
    title: '职位',
    dataIndex: 'class',
    valueEnum: classMap,
    fieldProps: {
      mode: 'tags',
      tokenSeparators: [',', '，', ' '],
    },
  },
  {
    title: '月薪',
    dataIndex: 'salary',
    valueType: 'money',
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
    valueType: 'date',
  },
  {
    title: '登记时间',
    dataIndex: 'record_time',
    valueType: 'dateTime',
  },
  {
    title: '月份',
    dataIndex: 'month',
    valueType: 'dateMonth',
  },
  {
    title: '日期范围',
    dataIndex: 'range_time',
    valueType: 'dateRange',
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance<SearchParams>>();

  return (
    <ProTable<TableListItem, SearchParams>
      headerTitle="查询表格"
      rowKey="id"
      formRef={formRef}
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
      request={async (params) =>
        request<{
          data: TableListItem[];
        }>(
          'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/demo/table/value-type',
          {
            params,
          },
        )
      }
      beforeSearchSubmit={(params) => {
        // 这里处理数据
        const processParams = {
          ...params,
          class: params.class?.join(),
          record_time: params.record_time
            ? +new Date(params.record_time)
            : undefined,
          range_time_start: (params.range_time ?? [])[0],
          range_time_end: (params.range_time ?? [])[1],
        };

        delete processParams.range_time;

        return processParams as Partial<SearchParams>;
      }}
      columns={columns}
    />
  );
};
