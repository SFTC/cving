import { Form, Select } from 'antd';
import React, { useEffect } from 'react';

const spLicenseMap = {
  10: '顺丰同城科技有限公司',
  20: '顺达同行科技有限公司',
  30: '顺丰控股有限公司',
  40: '顺丰控股有限公司4',
  50: '顺丰控股有限公司5',
  60: '顺丰控股有限公司6',
};

const { Option } = Select;

export default () => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      company_list: [{ license: '10' }, { license: '20' }, { license: '30' }],
    });
  });
  return (
    <Form form={form}>
      <Form.List name="company_list">
        {fields => {
          return (
            <>
              {fields.map(field => (
                <Form.Item key={field.fieldKey} shouldUpdate>
                  {() => {
                    return (
                      <Form.Item
                        {...field}
                        label={`公司名称${field.name}`}
                        name={[field.name, 'license']}
                        fieldKey={[field.fieldKey, 'license']}
                        rules={[{ required: true, message: '公司名称必选' }]}
                      >
                        <Select placeholder="请选择公司名称">
                          {Object.keys(spLicenseMap)
                            .filter(item => {
                              const licenseList = (form.getFieldValue(
                                'company_list',
                              ) as {
                                license: string;
                              }[]).map(company => company.license);
                              const licIndex = licenseList.indexOf(item);
                              return (
                                licIndex === -1 ||
                                item ===
                                  form.getFieldValue([
                                    'company_list',
                                    field.name,
                                    'license',
                                  ])
                              );
                            })
                            .map(key => (
                              <Option value={key} key={key}>
                                {spLicenseMap[key]}
                              </Option>
                            ))}
                        </Select>
                      </Form.Item>
                    );
                  }}
                </Form.Item>
              ))}
            </>
          );
        }}
      </Form.List>
    </Form>
  );
};
