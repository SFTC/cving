import React, { useEffect } from 'react';
import { Form } from 'antd';
import FormSpan from './FormSpan';
import styles from './demo.less';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: 'FormSpan展示的内容',
    });
  });

  return (
    <Form form={form}>
      <Form.Item label="名称" name="username">
        <FormSpan className={styles.formspan} style={{ fontSize: '15px' }} />
      </Form.Item>
    </Form>
  );
};
