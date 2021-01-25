import React from 'react';
import { Form, Card, Row, Col, Input, DatePicker, Select } from 'antd';
import { TitleInfoProps } from '../data.d';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

const voucherTypeMap = {
  YA: 'YA-应收',
  YB: 'YB-应付',
  YC: 'YC-仅清账',
  YF: 'YF-预收转应收',
  YH: 'YH-付款进行',
  YI: 'YI-收款',
  YM: 'YM-手工',
  YO: 'YO-付款',
  YQ: 'YQ-期初数据传输',
  YS: '营业外收入',
  YU: 'YU-应收应付暂估',
  YW: 'YW-坏账/抵扣工资',
  YZ: '系统核销',
};
const currencyMap = {
  CAD: '加拿大元',
  CHF: '瑞士法郎',
  CNY: '中国人民币',
  CRB: 'c货币',
  NTD: '新台币',
  USD: '美国 美元',
  VND: '越南盾',
};

const TitleInfo: React.FC<TitleInfoProps> = (props) => {
  // const { disabledDate, dispatch } = props;
  const { disabledDate } = props;

  const getCompanyCode = (e: { target: { value: any } }) => {
    // dispatch({
    //   type: 'manualentry/changeCompanyCode',
    //   payload: e.target.value,
    // });
  };

  return (
    <Card bordered={false} title="抬头信息">
      <Row gutter={24}>
        <Col span={8}>
          <FormItem
            label="凭证日期"
            name={['title', 'date']}
            rules={[{ required: true, message: '请输入凭证日期' }]}
          >
            <DatePicker format="YYYY-MM-DD" placeholder="请输入凭证日期" />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="过账日期"
            name={['title', 'gl_date']}
            rules={[{ required: true, message: '请输入过账日期' }]}
          >
            <DatePicker
              format="YYYY-MM-DD"
              placeholder="请输入过账日期"
              disabledDate={disabledDate}
            />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="凭证类型" name={['title', 'type']}>
            <Select defaultValue="YM" disabled>
              {Object.keys(voucherTypeMap) &&
                Object.keys(voucherTypeMap).map((key) => (
                  <Option value={key} key={key}>
                    {voucherTypeMap[key]}
                  </Option>
                ))}
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <FormItem label="交易货币" name={['title', 'currency']}>
            <Select defaultValue="CNY" disabled>
              {Object.keys(currencyMap) &&
                Object.keys(currencyMap).map((key) => (
                  <Option value={key} key={key}>
                    {key}
                  </Option>
                ))}
            </Select>
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            label="公司代码"
            name={['title', 'company_code']}
            rules={[{ required: true, message: '请输入公司代码' }]}
          >
            <Input placeholder="请输入公司代码" onChange={getCompanyCode} />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={16}>
          <FormItem
            label="文本类型"
            name={['title', 'text_summary']}
            rules={[{ required: true, message: '请输入文本类型' }]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder="请输入文本类型"
              rows={4}
              maxLength={100}
            />
          </FormItem>
        </Col>
      </Row>
    </Card>
  );
};
export default TitleInfo;
