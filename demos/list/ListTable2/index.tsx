import React, { useState, useEffect } from 'react';
import { Form, Input } from 'antd';
import { getPageQuery } from './utils/utils';
import { queryList } from './service';
import CardBlock from './components/CardBlock';
import TitleInfo from './components/TitleInfo';
import LoadMoreTable from './components/LoadMoreTable';

const { Search } = Input;
const businessTypeMap = {
  '1': '即刻送',
  '2': '中小商家',
  '3': '急送',
  '4': '大网',
};

interface ListTableProps {}

const ListTable: React.FC<ListTableProps> = () => {
  const [searchForm] = Form.useForm();
  const [bpParams, setBpParams] = useState({ type: 'BP', voucher_no: '' });
  const [glParams, setGlParams] = useState({ type: 'GL', voucher_no: '' });
  const [info, setInfo] = useState({});
  const search = () => {
    searchForm.validateFields().then(values => {
      setBpParams({ ...bpParams, ...values });
      setGlParams({ ...glParams, ...values });
      queryList({
        voucher_no: values.voucher_no,
        type: 'BP',
        current: 1,
        pageSize: 20,
      }).then(res => {
        if (res) {
          setInfo(res.title);
        }
      });
    });
  };

  useEffect(() => {
    const query = getPageQuery();
    if (query.voucher_no) {
      searchForm.setFieldsValue({ voucher_no: query.voucher_no });
      search();
    }
  }, []);

  const bpColumns = [
    {
      dataIndex: 'item_number',
      title: '序号',
      width: 80,
    },
    {
      dataIndex: 'company_code',
      title: '公司代码',
      width: 150,
    },
    {
      dataIndex: 'settle_protocol_type',
      title: '结算协议类型',
      width: 150,
    },
    {
      dataIndex: 'settle_protocol_type_name',
      title: '结算协议类型名称',
      width: 150,
    },
    {
      dataIndex: 'gl_subject',
      title: '总账科目',
      width: 150,
    },
    {
      dataIndex: 'gl_subject_name',
      title: '总账科目名称',
      width: 150,
    },
    {
      dataIndex: 'business_type',
      title: '业务类型',
      width: 150,
      render: (_: any, record: { business_type: string | number }) => {
        return <span>{businessTypeMap[record.business_type]}</span>;
      },
    },
    {
      dataIndex: 'amount',
      title: '金额',
      width: 150,
    },
    {
      dataIndex: 'cost_center',
      title: '成本中心',
      width: 150,
    },
    {
      dataIndex: 'bill_period',
      title: '账期',
      width: 150,
    },
    {
      dataIndex: 'customer_code',
      title: '业务BP',
      width: 150,
    },
    {
      dataIndex: 'customer_express_branch',
      title: '业务BP网点',
      width: 150,
    },
    {
      dataIndex: 'bill_end_date',
      title: '账单期间止',
      width: 150,
    },
    {
      dataIndex: 'payment_term',
      title: '信用账期',
      width: 150,
    },
    {
      dataIndex: 'payment_due_date',
      title: '到期日',
      width: 150,
    },
  ];
  const glColumns = [
    {
      dataIndex: 'item_number',
      title: '序号',
      width: 80,
    },
    {
      dataIndex: 'company_code',
      title: '公司代码',
      width: 150,
    },
    {
      dataIndex: 'gl_subject',
      title: '总账科目',
      width: 150,
    },
    {
      dataIndex: 'gl_subject_name',
      title: '总账科目名称',
      width: 150,
    },
    {
      dataIndex: 'amount',
      title: '金额',
      width: 150,
    },
    {
      dataIndex: 'transfer_amount',
      title: '本币金额',
      width: 150,
    },
    {
      dataIndex: 'cost_center',
      title: '成本中心',
      width: 150,
    },
  ];

  return (
    <>
      <CardBlock title="凭证查询">
        <Form form={searchForm}>
          <Form.Item
            name="voucher_no"
            label="凭证号"
            rules={[
              {
                required: true,
                message: '请输入凭证号',
              },
            ]}
          >
            <Search
              enterButton="查询"
              placeholder="请输入凭证号"
              onSearch={search}
              style={{ width: 400 }}
            />
          </Form.Item>
        </Form>
      </CardBlock>
      <CardBlock title="抬头信息">
        <TitleInfo info={info} />
      </CardBlock>
      <CardBlock title="BP行项目概况" key="bp">
        <LoadMoreTable
          rowKey="item_number"
          columns={bpColumns}
          query={queryList}
          exParams={bpParams}
          allowParamsNull={false}
        />
      </CardBlock>
      <CardBlock title="GL行项目概况" key="gl">
        <LoadMoreTable
          rowKey="item_number"
          columns={glColumns}
          query={queryList}
          exParams={glParams}
          allowParamsNull={false}
        />
      </CardBlock>
    </>
  );
};

export default ListTable;
