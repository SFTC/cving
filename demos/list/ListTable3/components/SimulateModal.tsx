import React from 'react';
import { Form, Card, Row, Col, Table } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { BPTableData, GLTableData, TitleTableData } from '../data.d';

const FormItem = Form.Item;
const BPColumns = [
  {
    title: '序号',
    dataIndex: 'item_number',
    width: 70,
  },
  {
    title: '公司代码',
    dataIndex: 'company_code',
    width: 200,
  },
  {
    title: '结算BP',
    dataIndex: 'settlement_code',
    width: 200,
  },
  {
    title: '结算协议类型',
    dataIndex: 'settle_protocol_type',
    width: 200,
  },
  {
    title: '结算协议名称',
    dataIndex: 'settle_protocol_type_name',
    width: 200,
  },
  {
    title: '总账科目',
    dataIndex: 'gl_subject',
    width: 200,
  },
  {
    title: '总账科目名称',
    dataIndex: 'gl_subject_name',
    width: 200,
  },
  {
    title: '金额',
    dataIndex: 'amount',
    width: 200,
  },
  {
    title: '成本中心',
    dataIndex: 'cost_center',
    width: 200,
  },
  {
    title: '账期',
    dataIndex: 'bill_period',
    width: 300,
  },
  {
    title: '业务BP',
    dataIndex: 'customer_code',
    width: 200,
  },
  {
    title: '业务BP网点',
    dataIndex: 'customer_express_branch',
    width: 200,
  },
  {
    title: '账单期间止',
    dataIndex: 'bill_end_date',
    width: 300,
  },
  {
    title: '信用账期',
    dataIndex: 'payment_term',
    width: 200,
  },
  {
    title: '到期日',
    dataIndex: 'payment_due_date',
    width: 200,
  },
];

const GLColumns = [
  {
    title: '序号',
    dataIndex: 'item_number',
    width: 70,
  },
  {
    title: '公司代码',
    dataIndex: 'company_code',
    width: 200,
  },
  {
    title: '总账科目',
    dataIndex: 'gl_subject',
    width: 200,
  },
  {
    title: '总账科目名称',
    dataIndex: 'gl_subject_name',
    width: 200,
  },
  {
    title: '成本中心',
    dataIndex: 'cost_center',
    width: 200,
  },
  {
    title: '金额',
    dataIndex: 'amount',
    width: 200,
  },
  {
    title: '本币金额',
    dataIndex: 'transfer_amount',
    width: 200,
  },
  {
    title: '自动拆税',
    dataIndex: 'is_div_tax',
    width: 200,
  },
  {
    title: '税码',
    dataIndex: 'tax_code',
    width: 200,
  },
];

interface SimulateModalProps {
  visibleSimulateModal: boolean;
  onCancel: () => void;
  simulateInfo: {
    title: TitleTableData;
    bp_data: BPTableData[];
    gl_data: GLTableData[];
  };
}

const SimulateModal: React.FC<SimulateModalProps> = props => {
  const { visibleSimulateModal, onCancel, simulateInfo } = props;
  const { title, bp_data, gl_data } = simulateInfo;
  const titleInfo = () => (
    <>
      <Card bordered={false} title="抬头信息">
        <Row gutter={24}>
          <Col span={8}>
            <FormItem label="凭证日期" name={['title', 'date']}>
              <span>{title.date}</span>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="过账日期" name={['title', 'gl_date']}>
              <span>{title.gl_date}</span>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="凭证类型" name={['title', 'type']}>
              <span>{title.type}</span>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <FormItem label="交易货币" name={['title', 'currency']}>
              <span>{title.currency}</span>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="公司代码" name={['title', 'company_code']}>
              <span>{title.company_code}</span>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={16}>
            <FormItem label="文本类型" name={['title', 'text_summary']}>
              <span>{title.text_summary}</span>
            </FormItem>
          </Col>
        </Row>
      </Card>
    </>
  );

  const bpScrollX = BPColumns.map(item => item.width).reduce(
    (sum, ele) => Number(sum) + Number(ele),
  );
  const BPInfo = () => (
    <>
      <Card bordered={false} title="BP行项目概况">
        <Table
          rowKey="item_number"
          bordered
          dataSource={bp_data}
          columns={BPColumns}
          pagination={false}
          scroll={{ x: bpScrollX }}
        />
      </Card>
    </>
  );

  const glScrollX = GLColumns.map(item => item.width).reduce(
    (sum, ele) => Number(sum) + Number(ele),
  );
  const GLInfo = () => (
    <>
      <Card bordered={false} title="GL行项目概况">
        <Table
          rowKey="item_number"
          bordered
          dataSource={gl_data}
          columns={GLColumns}
          pagination={false}
          scroll={{ x: glScrollX }}
        />
      </Card>
    </>
  );

  return (
    <Modal
      title="模拟"
      width={940}
      visible={visibleSimulateModal}
      bodyStyle={{ padding: '32px 40px 48px' }}
      footer={null}
      onCancel={onCancel}
    >
      {titleInfo()}
      {BPInfo()}
      {GLInfo()}
    </Modal>
  );
};
export default SimulateModal;
