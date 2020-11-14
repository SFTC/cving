import { Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import ExTable, { ExColumns } from '../../../components/ExTable';

export default () => {
  const [form] = useForm();
  const columns: ExColumns = [
    {
      title: '姓名',
      dataIndex: 'name',
      editable: true,
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <>
      <ExTable
        form={form}
        columns={columns}
        dataSource={[
          {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
          },
          {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
          },
        ]}
      />
      <Button
        onClick={() => {
          console.log(form.getFieldsValue());
        }}
      >
        提交
      </Button>
    </>
  );
};
