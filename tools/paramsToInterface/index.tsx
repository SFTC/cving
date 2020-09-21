import React, { useState } from 'react';
import { Form, Input, Button, Space, Select, Switch, Table } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { firstUpperCase } from './utils';
import styles from './index.less';

export default () => {
  const [inter, setInter] = useState('');
  const [tableData, setTableData] = useState([]);

  const onFinish = (values: any) => {
    console.log('values ---> ', values);
    const fieldStrArr = values.fields.map((field: any) => {
      return [
        `/** ${field.desc}${field.remark && `【${field.remark}】`} */`,
        `${field.fieldName}${field.isRequired ? '' : '?'}: ${field.dataType};`,
      ].join('\n');
    });
    const result = `
export interface ${firstUpperCase(values.name) || 'Object'} {
  ${fieldStrArr.join('\n')}
}`;
    setInter(result);

    setTableData(values.fields);
  };

  const mockFormData = {
    name: 'addshoplabelrecord',
    fields: [
      {
        dataType: 'string',
        desc: '城市',
        fieldName: 'city_ids',
        isRequired: true,
        remark: '格式如“111000000，33000000”，可多选',
      },
      {
        dataType: 'string',
        desc: '商户标签记录名称',
        fieldName: 'record_name',
        isRequired: true,
        remark: '',
      },
      {
        dataType: 'string',
        desc: '品类',
        fieldName: 'product_type',
        isRequired: false,
        remark: '格式如“1，2，3”，可多选',
      },
    ],
  };

  const columns = [
    {
      title: '字段',
      dataIndex: 'fieldName',
    },
    {
      title: '类型',
      dataIndex: 'dataType',
    },
    {
      title: '是否必传',
      dataIndex: 'isRequired',
      render: (text: boolean) => (text ? '是' : '否'),
    },
    {
      title: '说明',
      dataIndex: 'desc',
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
  ];

  /* {
    fields: [
      {
        isRequired: '1',
        dataType: 'string',
      },
    ],
  } */

  return (
    <div>
      <Form
        name="form_json_to_interface"
        onFinish={onFinish}
        initialValues={mockFormData}
      >
        {/* 接口名称 */}
        <Form.Item
          label="接口名称"
          name="name"
          className={styles.formInterfaceName}
          rules={[{ required: true, message: '请输入接口名称' }]}
        >
          <Input placeholder="请输入接口名称" />
        </Form.Item>
        {/* 入参配置 */}
        <Form.List name="fields">
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field, fieldIndex) => (
                <Space
                  key={field.key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...field}
                    label="字段名"
                    name={[field.name, 'fieldName']}
                    fieldKey={[field.fieldKey, 'fieldName']}
                    rules={[{ required: true, message: '请输入字段名' }]}
                  >
                    <Input placeholder="请输入字段名" />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    label="数据类型"
                    name={[field.name, 'dataType']}
                    fieldKey={[field.fieldKey, 'dataType']}
                  >
                    <Select>
                      <Select.Option value="string">string</Select.Option>
                      <Select.Option value="int">int</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...field}
                    label="是否必传"
                    name={[field.name, 'isRequired']}
                    fieldKey={[field.fieldKey, 'isRequired']}
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    label="字段说明"
                    name={[field.name, 'desc']}
                    fieldKey={[field.fieldKey, 'desc']}
                    rules={[{ required: true, message: '请输入字段说明' }]}
                  >
                    <Input placeholder="请输入字段说明" />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    label="备注"
                    name={[field.name, 'remark']}
                    fieldKey={[field.fieldKey, 'remark']}
                  >
                    <Input placeholder="这里可以输入一些额外备注，比如字段可选值" />
                  </Form.Item>

                  {fieldIndex !== 0 && (
                    <Button
                      shape="circle"
                      icon={<MinusOutlined />}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  )}
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add({
                      isRequired: '1',
                      dataType: 'string',
                    });
                  }}
                  block
                >
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            一键生成
          </Button>
        </Form.Item>
      </Form>

      {/* interface 定义 */}
      {/* TODO:代码美化可用：https://github.com/react-syntax-highlighter/react-syntax-highlighter */}
      {/* TODO:提供可一键复制功能 */}
      <pre
        style={{
          padding: 16,
          overflow: 'auto',
          fontSize: '85%',
          lineHeight: 1.45,
          backgroundColor: '#f6f8fa',
          borderRadius: 3,
          width: 'min-content',
        }}
      >
        <code>{inter}</code>
      </pre>

      {/* 参数表格 */}
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        bordered
      />
    </div>
  );
};
