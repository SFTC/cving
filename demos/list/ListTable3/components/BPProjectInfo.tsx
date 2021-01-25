import React, { useState, useEffect } from 'react';
import {
  Form,
  Card,
  Row,
  Input,
  DatePicker,
  Button,
  Table,
  Select,
  message,
  InputNumber,
} from 'antd';
import moment from 'moment';
import { BPTableData, BPProjectInfoProps } from '../data.d';
import styles from '../style.less';
import { getIsMonthCustomer } from '../service';

const FormItem = Form.Item;
const { Option } = Select;
const getKey = () => new Date().getTime();

const settlementProtocolMap = {
  '01': '配送服务费',
  '02': 'COD货款',
  '03': 'COD服务费',
  '06': '储值卡',
  10: '佣金',
  96: '预付费',
  97: '押金',
  98: '其他',
  99: '公司内部往来',
};

const clientGlSubjectMap = {
  112205: '应收账款_ARMS',
  122127: '其他应收款_ARMS_COD',
  220301: '预收账款-ARMS',
  11220501: '应收账款_ARMS(第三方)',
  11220502: '应收账款_ARMS(同城内部)',
  11220503: '应收账款_ARMS(集团关联方)',
  22030101: '预收账款-ARMS(第三方)',
  22030102: '预收账款-ARMS（同城内部）',
  22030103: '预收账款-ARMS（集团关联方）',
  22410102: '其他应付款_押金/保证金_ARMS',
  22410502: '其他应付款_ARMS_COD',
};

const BPProjectInfo: React.FC<BPProjectInfoProps> = (props) => {
  // const { companyCode, dispatch } = props;
  const { companyCode } = props;
  // BP行项目表格中init数值
  const initDataSource: BPTableData = {
    // item_number: '1',
    company_code: companyCode,
    settlement_code: '',
    settle_protocol_type: '',
    settle_protocol_type_name: '',
    gl_subject: '',
    gl_subject_name: '',
    amount: '',
    cost_center: '',
    bill_period: '',
    customer_code: '',
    customer_express_branch: '',
    bill_end_date: '',
    payment_term: '',
    key: getKey(),
    // payment_due_date: '',
  };

  // BP表格中dataSource数据
  const [dataSource, getDataSource] = useState<BPTableData[]>([initDataSource]);

  // BP表格中存储Key值
  const [datakey, getDataKey] = useState(1);

  // 多选行id数组
  const [selectedBPItemIds, setSelectedBPItemIds] = useState<string[]>([]);

  // 是否是月结客户
  const [monthCustomer, handleIsMonthCustomer] = useState<boolean>(true);

  // 获取是否是月结客户'
  const isMonthCustomer = (
    key: number,
    settlement_code: string,
    newDataSource: BPTableData[],
  ) => {
    const params = {
      settlement_code,
    };
    getIsMonthCustomer(params).then((res) => {
      if (Number(res.message) === 1) {
        handleIsMonthCustomer(true);
      } else {
        handleIsMonthCustomer(false);

        const newData = newDataSource;
        getDataSource(
          newData.map((item, index) => ({
            ...item,
            bill_end_date: index === key ? '' : item.bill_end_date,
            payment_term: index === key ? '' : item.payment_term,
          })),
        );
      }
    });
  };

  // 获取每一行修改的实时数据
  const getRecordData = (type: string, key: number, value: any) => {
    const newDataSource = dataSource.map((item, index) => ({
      ...item,
      [type]: index === key ? value : item[type],
    }));
    getDataSource(newDataSource);
    // 判断是否是月结客户
    if (type === 'settlement_code') {
      isMonthCustomer(key, value, newDataSource);
    }
  };

  // select
  const getSelectRecordData = (
    name: string,
    type: string,
    map: any,
    key: number,
    val: any,
  ) => {
    const newData = dataSource;
    getDataSource(
      newData.map((item, index) => ({
        ...item,
        [name]: index === key ? map[val] : item[type],
        [type]: index === key ? val : item[type],
      })),
    );
  };

  // datapicker
  const handleDatePicker = (
    type: string,
    key: number,
    d: import('moment').Moment | null,
  ) => {
    const newData = dataSource;
    getDataSource(
      newData.map((item, index) => ({
        ...item,
        bill_end_date:
          index === key ? moment(d).format('YYYY-MM-DD') : item[type],
        bill_period: index === key ? moment(d).format('YYYY-MM') : item[type],
      })),
    );
  };

  // BP表格中 colums 数据
  const columns = [
    {
      title: '序号',
      width: 70,
      dataIndex: 'item_number',
      render: (_text: any, _record: any, index: number) => index + 1,
    },
    {
      title: '公司代码',
      dataIndex: 'company_code',
      width: 200,
      render: () => <Input value={companyCode} disabled />,
    },
    {
      title: '结算BP',
      dataIndex: 'settlement_code',
      width: 200,
      render: (text: any, record: BPTableData, index: number) => (
        <Input
          defaultValue={record.settlement_code}
          onChange={(e) =>
            getRecordData('settlement_code', index, e.target.value)
          }
        />
      ),
    },
    {
      title: '结算协议名称',
      dataIndex: 'settle_protocol_type_name',
      width: 200,
      render: (text: any, record: BPTableData, index: number) => (
        <Select
          defaultValue={
            record.settle_protocol_type_name
              ? record.settle_protocol_type_name
              : ''
          }
          onChange={(val) =>
            getSelectRecordData(
              'settle_protocol_type_name',
              'settle_protocol_type',
              settlementProtocolMap,
              index,
              val,
            )
          }
        >
          {Object.keys(settlementProtocolMap) &&
            Object.keys(settlementProtocolMap).map((key) => (
              <Option value={key} key={key}>
                {settlementProtocolMap[key]}
              </Option>
            ))}
        </Select>
      ),
    },
    {
      title: '结算协议类型',
      dataIndex: 'settle_protocol_type',
      width: 200,
    },
    {
      title: '总账科目名称',
      dataIndex: 'gl_subject_name',
      width: 300,
      render: (text: any, record: BPTableData, index: number) => (
        <Select
          defaultValue={record.gl_subject_name ? record.gl_subject_name : ''}
          onChange={(val) =>
            getSelectRecordData(
              'gl_subject_name',
              'gl_subject',
              clientGlSubjectMap,
              index,
              val,
            )
          }
        >
          {Object.keys(clientGlSubjectMap) &&
            Object.keys(clientGlSubjectMap).map((key) => (
              <Option value={key} key={key}>
                {clientGlSubjectMap[key]}
              </Option>
            ))}
        </Select>
      ),
    },
    {
      title: '总账科目',
      dataIndex: 'gl_subject',
      width: 200,
    },
    {
      title: '金额',
      dataIndex: 'amount',
      width: 200,
      render: (text: any, record: BPTableData, index: number) => (
        <InputNumber
          defaultValue={record.amount ? +record.amount : undefined}
          precision={2}
          onChange={(value) => getRecordData('amount', index, value)}
        />
      ),
    },
    {
      title: '成本中心',
      dataIndex: 'cost_center',
      width: 200,
      render: (text: any, record: BPTableData, index: number) => (
        <Input
          defaultValue={record.cost_center}
          onChange={(e) => getRecordData('cost_center', index, e.target.value)}
        />
      ),
    },
    {
      title: '账期',
      dataIndex: 'bill_period',
      width: 300,
      render: (text: any, record: BPTableData, index: number) => (
        <DatePicker
          picker="month"
          allowClear={false}
          defaultValue={
            record.bill_period
              ? moment(record.bill_period, 'YYYY-MM')
              : undefined
          }
          format="YYYY-MM"
          onChange={(d) => handleDatePicker('bill_period', index, d)}
        />
      ),
    },
    {
      title: '业务BP',
      dataIndex: 'customer_code',
      width: 200,
      render: (text: any, record: BPTableData, index: number) => (
        <Input
          defaultValue={record.customer_code}
          onChange={(e) =>
            getRecordData('customer_code', index, e.target.value)
          }
        />
      ),
    },
    {
      title: '业务BP网点',
      dataIndex: 'customer_express_branch',
      width: 200,
      render: (text: any, record: BPTableData, index: number) => (
        <Input
          defaultValue={record.customer_express_branch}
          onChange={(e) =>
            getRecordData('customer_express_branch', index, e.target.value)
          }
        />
      ),
    },
    {
      title: '账单期间止',
      dataIndex: 'bill_end_date',
      width: 300,
      render: (text: any, record: BPTableData, index: number) => (
        <DatePicker
          allowClear={false}
          defaultValue={
            record.bill_end_date
              ? moment(record.bill_end_date, 'YYYY-MM-DD')
              : undefined
          }
          disabled={!monthCustomer}
          format="YYYY-MM-DD"
          onChange={(d) => handleDatePicker('bill_end_date', index, d)}
        />
      ),
    },
    {
      title: '信用账期',
      dataIndex: 'payment_term',
      width: 200,
      render: (text: any, record: BPTableData, index: number) => (
        <Input
          disabled={!monthCustomer}
          defaultValue={record.payment_term}
          onChange={(e) => getRecordData('payment_term', index, e.target.value)}
        />
      ),
    },
  ];

  // 多选回调事件
  const onSelectChange = (selected: any) => {
    // 获取选中的数组的id集合
    setSelectedBPItemIds(selected);
  };

  // 新增 / 复制 / 删除
  const handleOperateDataSoure = (type: string) => {
    const keys = dataSource.map(({ key }) => key);
    // 新增
    if (type === 'add') {
      // 序号递增1
      getDataKey(datakey + 1);
      const newData = {
        ...initDataSource,
        item_number: String(datakey + 1),
        key: getKey(),
      };
      getDataSource([...dataSource, newData]);
    }

    // 复制
    if (type === 'copy') {
      if (selectedBPItemIds.length < 1) {
        message.warn('请选择复制行');
      } else {
        getDataSource(
          dataSource.concat(
            selectedBPItemIds.map((order, index) => ({
              ...dataSource[keys.indexOf(Number(order))],
              key: getKey() + index,
            })),
          ),
        );
        setSelectedBPItemIds([]);
      }
    }

    // 删除
    if (type === 'delete') {
      getDataSource(
        dataSource.filter(
          (res) =>
            !selectedBPItemIds.some((order) => res.key === Number(order)),
        ),
      );
      setSelectedBPItemIds([]);
    }
  };

  useEffect(() => {
    // dispatch({
    //   type: 'manualentry/changeBPProjectDataSource',
    //   payload: dataSource,
    // });
  }, [dataSource]);

  const scrollX = columns
    .map((item) => item.width)
    .reduce((sum, ele) => Number(sum) + Number(ele));
  return (
    <Card bordered={false} title="BP行项目概况">
      <Row>
        <FormItem>
          <Button
            type="primary"
            className={styles.btn}
            onClick={() => handleOperateDataSoure('add')}
          >
            新增
          </Button>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            className={styles.btn}
            onClick={() => handleOperateDataSoure('copy')}
          >
            复制
          </Button>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            className={styles.btn}
            onClick={() => handleOperateDataSoure('delete')}
            disabled={
              dataSource.length <= 1 ||
              selectedBPItemIds.length === dataSource.length
            }
          >
            删除
          </Button>
        </FormItem>
      </Row>

      <FormItem name={['bp_data']}>
        <Table
          rowKey="key"
          rowSelection={{
            fixed: true,
            selectedRowKeys: selectedBPItemIds,
            onChange: onSelectChange,
          }}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ x: scrollX }}
        />
      </FormItem>
    </Card>
  );
};
export default BPProjectInfo;
