import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Space,
  Select,
  Switch,
  Table,
  message,
  Modal,
} from 'antd';
import { MinusOutlined, PlusOutlined, CopyOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { firstUpperCase, tableTextToInterface } from './utils';
import styles from './index.less';

export default () => {
  // interface 定义
  const [inter, setInter] = useState('');
  // 入参配置表格
  const [tableData, setTableData] = useState([]);

  const onFinish = (values: any) => {
    console.log('values ---> ', values);
    const fieldStrArr = values.fields.map((field: any) => {
      return [
        `  /** ${field.desc}${field.remark && `【${field.remark}】`} */`,
        `  ${field.fieldName}${field.isRequired ? '' : '?'}: ${
          field.dataType
        };`,
      ].join('\n');
    });
    const result = `export interface ${firstUpperCase(values.name) ||
      'Object'} {
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

  // #region 导入文本对话框逻辑
  const [uploadParamsModalVisible, setUploadParamsModalVisible] = useState(
    false,
  );
  const [uploadParams, setUploadParams] = useState('');

  const handleUploadParams = () => {
    setUploadParamsModalVisible(true);
  };

  const handleConfirmUploadParams = () => {
    console.log('uploadParams ---> ', tableTextToInterface(uploadParams));
  };
  // #endregion

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
          <Space size="large">
            <Button type="primary" htmlType="submit">
              一键生成
            </Button>
            <Button type="primary" onClick={handleUploadParams}>
              导入配置
            </Button>
          </Space>
        </Form.Item>
      </Form>

      <Space size={50} align="start">
        {/* interface 定义 */}
        {/* TODO:代码美化可用：https://github.com/react-syntax-highlighter/react-syntax-highlighter */}
        {inter && (
          <pre className={styles.interfaceContainer}>
            <code>{inter}</code>
            <CopyToClipboard
              text={inter}
              onCopy={() => {
                message.success('复制成功');
              }}
            >
              <Button type="link" className={styles.interfaceCopyBtn}>
                <CopyOutlined />
              </Button>
            </CopyToClipboard>
          </pre>
        )}
        {/* 参数表格 */}
        {tableData.length > 0 && (
          <Table
            rowKey="fieldName"
            columns={columns}
            dataSource={tableData}
            pagination={false}
            bordered
          />
        )}
      </Space>

      {/* 导入文本对话框 */}
      <Modal
        width="1000px"
        title="参数信息"
        visible={uploadParamsModalVisible}
        onCancel={() => setUploadParamsModalVisible(false)}
        onOk={handleConfirmUploadParams}
      >
        <Input.TextArea
          value={uploadParams}
          rows={10}
          onChange={e => setUploadParams(e.currentTarget.value)}
        />
      </Modal>
    </div>
  );
};
