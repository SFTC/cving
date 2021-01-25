import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Radio, Space } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import request from 'umi-request';
import { RadioChangeEvent } from 'antd/lib/radio';
import { SpanConfig } from '@ant-design/pro-form/lib/layouts/QueryFilter';

export interface TableListItem {
  name: string;
  age: number;
  sex: string;
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '这是“姓名”搜索条件',
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
    title: '身份证号',
    dataIndex: 'idcard',
  },
  {
    title: '生日',
    dataIndex: 'birthday',
  },
  {
    title: '学历',
    dataIndex: 'class',
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  const [labelWidth, setLabelWidth] = useState<number | 'auto' | undefined>(
    undefined,
  );
  const [span, setSpan] = useState<SpanConfig>();

  const handleChangeLabelWidth = (e: RadioChangeEvent) => {
    setLabelWidth(e.target.value);
  };

  const handleChangeSpan = (e: RadioChangeEvent) => {
    setSpan(e.target.value);
  };

  return (
    <div>
      <Space size="large" style={{ marginBottom: '10px' }}>
        <div>
          <span>labelWidth 值：</span>
          <Radio.Group onChange={handleChangeLabelWidth}>
            <Radio.Button value={undefined}>默认值</Radio.Button>
            <Radio.Button value="auto">&quot;auto&quot;</Radio.Button>
            <Radio.Button value={150}>150</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <span>span 值：</span>
          <Radio.Group onChange={handleChangeSpan}>
            <Radio.Button value={6}>6</Radio.Button>
            <Radio.Button value={8}>8</Radio.Button>
            <Radio.Button value={12}>12</Radio.Button>
            <Radio.Button value={24}>24</Radio.Button>
          </Radio.Group>
        </div>
      </Space>
      <ProTable<TableListItem>
        headerTitle="查询表格"
        rowKey="id"
        actionRef={actionRef}
        search={{
          labelWidth,
          span,
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
    </div>
  );
};
