import React, { useState, useEffect } from 'react';
import {
  Form,
  Card,
  Row,
  Input,
  Button,
  Table,
  Select,
  message,
  InputNumber,
} from 'antd';
import { GLTableData, GLProjectInfoProps } from '../data.d';
import styles from '../style.less';

const FormItem = Form.Item;
const { Option } = Select;
const getKey = () => new Date().getTime();
const commonGlSubjectMap = {
  1002: '银行存款',
  2241: '其他应付款',
  101301: '在途资金一网通',
  101302: '在途资金_云闪付',
  122106: '其他应收款_代收款',
  122121: '其他应收款_存出款(ARMS)',
  122123: '其他应收款_微信',
  122124: '其他应收款_支付宝',
  600204: '其他业务收入_服务费收入',
  12210102: '坏账准备_应收账款_核销',
  12210601: '其他应收款_代收款(集团关联方)',
  12210602: '其他应收款_代收款(同城内部)',
  12210603: '其他应收款_代收款(第三方)',
  22410501: '其他应付款_ARMS_充值卡',
  60010103: '主营业务收入_物流辅助业_搬运装卸',
  60010105: '主营业务收入_物流辅助业_同城收派',
  60010108: '主营业务收入-物流辅助业-收派业务(免税)',
  60010203: '主营业务收入_交通运输业_运输收入',
  64010401: '主营业务成本_理赔成本_保价理赔',
  64010402: '主营业务成本_理赔成本_普通理赔',
  2221040305: '应交税费_增值税_销项税额_6%(ARMS)',
  2221040310: '应交税费_增值税_销项税额_9%(ARMS)',
  6301900000: '营业外收入_其他',
  7002050000: '中转_代收货款',
};

const taxCodeMap = {
  X0: 0,
  X1: 0.06,
  X2: 0.13,
};

const GLProjectInfo: React.FC<GLProjectInfoProps> = (props) => {
  // const { companyCode, dispatch } = props;
  const { companyCode } = props;
  // GL行项目表格中init数值
  const initDataSource: GLTableData = {
    // item_number: '1',
    company_code: companyCode,
    gl_subject: '',
    gl_subject_name: '',
    amount: '',
    cost_center: '',
    transfer_amount: '',
    is_div_tax: '',
    tax_code: '',
    key: getKey(),
  };
  // BP表格中dataSource数据
  const [dataSource, getDataSource] = useState<GLTableData[]>([initDataSource]);

  // BP表格中存储Key值
  const [datakey, getDataKey] = useState(1);

  // 获取每一行修改的实时数据
  const getRecordData = (type: string, key: number, value: any) => {
    const newData = dataSource;
    getDataSource(
      newData.map((item, index) => ({
        ...item,
        [type]: index === key ? value : item[type],
      })),
    );
  };

  // select
  /**
   * name: 展示的name
   * type: 选中的对应Key
   * map: 循环数常量
   * key: 修改第几行
   * val: 修改后的值
   * */

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
        [name]: index === key ? map[val] : item[name],
        [type]: index === key ? val : item[type],
      })),
    );
  };

  const getSelectData = (type: string, key: number, val: string) => {
    const newData = dataSource;
    getDataSource(
      newData.map((item, index) => ({
        ...item,
        [type]: index === key ? val : item[type],
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
      title: '总账科目名称',
      dataIndex: 'gl_subject_name',
      width: 300,
      render: (text: any, record: GLTableData, index: number) => (
        <Select
          defaultValue={record.gl_subject_name ? record.gl_subject_name : ''}
          onChange={(val) =>
            getSelectRecordData(
              'gl_subject_name',
              'gl_subject',
              commonGlSubjectMap,
              index,
              val,
            )
          }
        >
          {Object.keys(commonGlSubjectMap).map((key) => (
            <Option value={key} key={key}>
              {commonGlSubjectMap[key]}
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
      title: '成本中心',
      dataIndex: 'cost_center',
      width: 200,
      render: (text: any, record: GLTableData, index: number) => (
        <Input
          defaultValue={record.cost_center}
          onChange={(e) => getRecordData('cost_center', index, e.target.value)}
        />
      ),
    },
    {
      title: '金额',
      dataIndex: 'amount',
      width: 200,
      render: (text: any, record: GLTableData, index: number) => (
        <InputNumber
          defaultValue={record.amount ? +record.amount : undefined}
          precision={2}
          onChange={(value) => getRecordData('amount', index, value)}
        />
      ),
    },
    {
      title: '本币金额',
      dataIndex: 'transfer_amount',
      width: 200,
      render: (text: any, record: GLTableData, index: number) => (
        <InputNumber
          defaultValue={
            record.transfer_amount ? +record.transfer_amount : undefined
          }
          precision={2}
          onChange={(value) => getRecordData('transfer_amount', index, value)}
        />
      ),
    },
    {
      title: '自动拆税',
      dataIndex: 'is_div_tax',
      width: 200,
      render: (text: any, record: GLTableData, index: number) => (
        <Select
          defaultValue={record.is_div_tax ? record.is_div_tax : ''}
          style={{ width: 120 }}
          onChange={(val) => getSelectData('is_div_tax', index, val)}
        >
          <Option value="1">是</Option>
          <Option value="2">否</Option>
        </Select>
      ),
    },
    {
      title: '税码',
      dataIndex: 'tax_code',
      width: 200,
      render: (text: any, record: GLTableData, index: number) => (
        <Select
          style={{ width: 120 }}
          defaultValue={record.tax_code ? record.tax_code : ''}
          onChange={(val) => getSelectData('tax_code', index, val)}
        >
          {Object.keys(taxCodeMap).map((val) => (
            <Option value={val} key={val}>
              {val}
            </Option>
          ))}
        </Select>
      ),
    },
  ];

  // 多选行id数组
  const [selectedBPItemIds, setSelectedBPItemIds] = useState<string[]>([]);

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
    //   type: 'manualentry/changeGLProjectDataSource',
    //   payload: dataSource,
    // });
  }, [dataSource]);

  const scrollX = columns
    .map((item) => item.width)
    .reduce((sum, ele) => Number(sum) + Number(ele));
  return (
    <Card bordered={false} title="GL行项目概况">
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
    </Card>
  );
};
export default GLProjectInfo;
