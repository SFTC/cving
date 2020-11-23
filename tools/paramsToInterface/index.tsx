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
  Card,
} from 'antd';
import {
  MinusOutlined,
  PlusOutlined,
  CopyOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { deepCopy } from 'better-js-lib';
import { FormListOperation } from 'antd/es/form/FormList';
import { ColumnsType } from 'antd/es/table';
import { HowToUseParamsTable, ImportTableText } from './components';
import { tableTextToFormData, formToInterface, getInitField } from './utils';
import { FormParams, FormField } from './typing.d';

import styles from './index.less';

export default () => {
  /** interface 定义 */
  const [inter, setInter] = useState('');
  // 入参配置表格
  const [tableData, setTableData] = useState<FormParams['fields']>([]);
  // 表单实例
  const [form] = Form.useForm<FormParams>();
  const [
    howToUseParamsTableModalVisible,
    setHowToUseParamsTableModalVisible,
  ] = useState(false);

  const columns: ColumnsType<FormField> = [
    {
      title: '字段',
      dataIndex: 'fieldName',
    },
    {
      title: '类型',
      dataIndex: 'dataType',
      render: (text: FormField['dataType']) => text.join('、'),
    },
    {
      title: '是否必传',
      dataIndex: 'isRequired',
      render: (text: FormField['isRequired']) => (text ? '是' : '否'),
    },
    {
      title: '说明',
      dataIndex: 'desc',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      render: (text: FormField['remark']) => text ?? '-',
    },
  ];

  /** 全部重置 */
  const handleResetAll = () => {
    form.resetFields();

    setTableData([]);

    setInter('');
  };

  const handleChangeFieldName = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    add: FormListOperation['add'],
  ) => {
    if (e.target.value && index === form.getFieldValue('fields').length - 1) {
      add(getInitField());
    }
  };

  // #region 导入文本对话框逻辑
  const [uploadParamsModalVisible, setUploadParamsModalVisible] = useState(
    false,
  );

  const handleConfirmUploadParams = (text: string) => {
    form.setFieldsValue({
      name: 'Object',
      fields: tableTextToFormData(text),
    });

    setUploadParamsModalVisible(false);

    form.submit();
  };
  // #endregion

  const onFinish = (values: FormParams) => {
    console.log('values ---> ', values);
    // 过滤掉 fieldName 为空的字段
    const formData = deepCopy(values);
    formData.fields = formData.fields.filter(v => v.fieldName);

    setInter(formToInterface(formData));

    setTableData(formData.fields);
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <Form
          form={form}
          name="form_json_to_interface"
          onFinish={onFinish}
          initialValues={{
            fields: [getInitField()],
          }}
        >
          {/* 接口名称 */}
          <Form.Item
            label="接口名称"
            name="name"
            className={styles.formInterfaceName}
            rules={[{ required: true, message: '请输入接口名称' }]}
          >
            <Input allowClear placeholder="请输入接口名称" />
          </Form.Item>
          {/* 入参配置 */}
          <Form.List name="fields">
            {(fields, { add, remove }) => (
              <div>
                {fields.map((field, fieldIndex) => (
                  <Space key={field.key} size={30} align="start">
                    <Form.Item
                      {...field}
                      label="字段名"
                      name={[field.name, 'fieldName']}
                      fieldKey={[field.fieldKey, 'fieldName']}
                    >
                      <Input
                        allowClear
                        placeholder="请输入字段名"
                        onChange={e =>
                          handleChangeFieldName(e, fieldIndex, add)
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="数据类型"
                      name={[field.name, 'dataType']}
                      fieldKey={[field.fieldKey, 'dataType']}
                    >
                      <Select style={{ width: '110px' }} mode="multiple">
                        <Select.Option value="string">string</Select.Option>
                        <Select.Option value="int">int</Select.Option>
                        <Select.Option value="boolean">boolean</Select.Option>
                        <Select.Option value="null">null</Select.Option>
                        <Select.Option value="undefined">
                          undefined
                        </Select.Option>
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
                    >
                      <Input allowClear placeholder="请输入字段说明" />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="备注"
                      name={[field.name, 'remark']}
                      fieldKey={[field.fieldKey, 'remark']}
                    >
                      <Input
                        allowClear
                        placeholder="这里可以输入一些额外备注，比如字段可选值"
                      />
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
                      add(getInitField());
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
                生成interface
              </Button>
              <Button
                type="primary"
                onClick={() => setUploadParamsModalVisible(true)}
              >
                导入表格文本
              </Button>
              <Button onClick={handleResetAll}>全部重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>

      <Space size={50} align="start">
        {/* interface 定义 */}
        {/* TODO:代码美化可用：https://github.com/react-syntax-highlighter/react-syntax-highlighter */}
        <Card
          title="interface 定义"
          extra={
            inter && (
              <CopyToClipboard
                text={inter}
                onCopy={() => {
                  message.success('复制成功');
                }}
              >
                <Button icon={<CopyOutlined />}>复制</Button>
              </CopyToClipboard>
            )
          }
        >
          {inter && (
            <pre className={styles.interfaceContainer}>
              <code>{inter}</code>
            </pre>
          )}
        </Card>
        {/* 参数表格 */}
        <Card
          title="参数表格"
          extra={
            <Button
              icon={<QuestionCircleOutlined />}
              onClick={() => setHowToUseParamsTableModalVisible(true)}
            >
              如何使用
            </Button>
          }
        >
          {tableData.length > 0 && (
            <Table<FormField>
              rowKey="fieldName"
              columns={columns}
              dataSource={tableData}
              pagination={false}
              bordered
            />
          )}
        </Card>
      </Space>

      <ImportTableText
        visible={uploadParamsModalVisible}
        changeVisible={visible => setUploadParamsModalVisible(visible)}
        onConfirm={text => handleConfirmUploadParams(text)}
      />

      <HowToUseParamsTable
        visible={howToUseParamsTableModalVisible}
        changeVisible={visible => setHowToUseParamsTableModalVisible(visible)}
      />
    </div>
  );
};
