import React, { useState, Fragment } from 'react';
import { Form, Input, Button, Space, Select, Switch } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

const Demo = () => {
  const [inter, setInter] = useState('');

  const onFinish = (values: any) => {
    console.log('values ---> ', values);
    const fieldStrArr = values.fields.map((field: any) => {
      return [
        `/** ${field.desc} */`,
        `${field.fieldName}${field.isRequired ? '' : '?'}: ${field.dataType};`,
      ].join('\n');
    });
    const result = `
export interface ${values.name || 'Object'} {
  ${fieldStrArr.join('\n')}
}
    `;
    setInter(result);
  };

  return (
    <Fragment>
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item name="name">
          <Input placeholder="请输入接口名称" />
        </Form.Item>
        <Form.List name="fields">
          {(fields, { add, remove }) => (
            <div>
              {fields.map(field => (
                <Space
                  key={field.key}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, 'fieldName']}
                    fieldKey={[field.fieldKey, 'fieldName']}
                    rules={[{ required: true, message: '请输入字段名' }]}
                  >
                    <Input placeholder="请输入字段名" />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    name={[field.name, 'isRequired']}
                    fieldKey={[field.fieldKey, 'isRequired']}
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    name={[field.name, 'dataType']}
                    fieldKey={[field.fieldKey, 'dataType']}
                  >
                    <Select>
                      <Select.Option value="string">string</Select.Option>
                      <Select.Option value="number">number</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...field}
                    name={[field.name, 'desc']}
                    fieldKey={[field.fieldKey, 'desc']}
                    rules={[{ required: true, message: '请输入注释' }]}
                  >
                    <Input placeholder="请输入注释" />
                  </Form.Item>

                  <MinusCircleOutlined
                    style={{ fontSize: '24px' }}
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
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
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className={styles['result-content']}>{inter}</div>
    </Fragment>
  );
};

export default () => {
  return (
    <div className={styles.container}>
      <Demo />
    </div>
  );
};
