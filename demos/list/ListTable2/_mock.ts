// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';
import { TableListItem, TableListParams } from './data.d';

// mock 列表数据项
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: TableListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 20 + i;
    tableListDataSource.push({
      item_number: String(index),
      company_code: '公司代码',
      settle_protocol_type: '结算协议类型',
      settle_protocol_type_name: '结算协议类型名称',
      gl_subject: '总账科目',
      gl_subject_name: '总账科目名称',
      business_type: '业务类型',
      amount: '金额',
      cost_center: '成本中心',
      bill_period: '账期',
      customer_code: '业务BP',
      customer_express_branch: '业务BP网点',
      bill_end_date: '账单期间止',
      payment_term: '信用账期',
      payment_due_date: '到期日',
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

const tableListDataSource = genList(1, 100);

function getList(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (
    !realUrl ||
    Object.prototype.toString.call(realUrl) !== '[object String]'
  ) {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 20 } = req.query;
  const params = (parse(realUrl, true).query as unknown) as TableListParams;

  let dataSource = [...tableListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );
  const filterArray = ['current', 'pageSize', '_timestamp'];
  Object.keys(params)
    .filter(ele => filterArray.indexOf(ele) === -1)
    .forEach(param => {
      dataSource = dataSource.filter(item => item[param] === params[param]);
    });
  const title = {
    date: '凭证日期',
    gl_date: '过账日期',
    type: '凭证类型',
    currency: '交易货币',
    company_code: '公司代码',
    bill_code: '系统单号',
    recorder: '录入人',
    record_time: '录入时间',
    reverse_voucher_no: '冲销凭证编号',
    reversed_voucher_no: '被冲销凭证编号',
    text_summary: '文本摘要',
  };
  const result = {
    data: dataSource,
    title,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

export default {
  'GET /manage/voucher/getlist': getList,
};
