import { Form, Select } from 'antd';
import React from 'react';

const spLicenseMap = {
  1: '顺丰同城科技有限公司',
  2: '顺达同行科技有限公司',
  3: '顺丰控股有限公司',
};
const { Option } = Select;

export default () => {
  return (
    <Form>
      <Form.Item
        label="公司名称"
        name="license"
        rules={[{ required: true, message: '公司名称必选' }]}
      >
        <Select placeholder="请选择公司名称">
          {Object.keys(spLicenseMap).map(key => (
            <Option value={key} key={key}>
              {spLicenseMap[key]}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
