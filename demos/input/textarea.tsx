import { Form, Input } from 'antd';
import React from 'react';

const { TextArea } = Input;

export default () => {
  return (
    <Form>
      <Form.Item
        label="备注"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入备注',
          },
        ]}
      >
        <TextArea placeholder="请输入100字以内字符" rows={4} maxLength={100} />
      </Form.Item>
    </Form>
  );
};
