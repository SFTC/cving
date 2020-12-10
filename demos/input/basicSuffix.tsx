import { Form, Input } from 'antd';
import React from 'react';

export default () => {
  return (
    <Form>
      <Form.Item
        label="金额"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入金额',
          },
        ]}
      >
        <Input placeholder="请输入" suffix="元" />
      </Form.Item>
    </Form>
  );
};
