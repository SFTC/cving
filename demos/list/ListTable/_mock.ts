// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';
import { ListTableItem, ListTableParams, LogListItem } from './data.d';

// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: ListTableItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      id: `${index}`,
      company_code: `公司代码${index}`,
      company_name: `公司名称${index}`,
      start_year: '2020',
      start_month: '6',
      end_year: '2020',
      end_month: '6',
      pre_close_status: `${(Math.floor(Math.random() * 10) % 3) + 1}`,
      close_status: `${(Math.floor(Math.random() * 10) % 2) + 1}`,
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
  const { current = 1, pageSize = 10 } = req.query;
  const params = (parse(realUrl, true).query as unknown) as ListTableParams;

  let dataSource = [...tableListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );

  if (params.company_code) {
    const temp = params.company_code.split(',');
    dataSource = dataSource.filter((data) =>
      temp.some((ele) => data.company_code.includes(ele)),
    );
  }
  if (params.close_status && params.close_status.length) {
    dataSource = dataSource.filter(
      (data) => data.close_status === params.close_status,
    );
  }
  if (params.pre_close_status && params.pre_close_status.length) {
    dataSource = dataSource.filter(
      (data) => data.pre_close_status === params.pre_close_status,
    );
  }

  const result = {
    data: dataSource,
    total: dataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

// mock 日志数据
const genLog = (current: number, pageSize: number) => {
  const logListDataSource: LogListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    logListDataSource.push({
      id: index,
      op_content: `操作描述${index}`,
      op_user: `操作人${Math.floor(Math.random() * 100)}`,
      op_time: `${Math.round(new Date().getTime() / 1000) + i * 10}`,
    });
  }
  logListDataSource.reverse();
  return logListDataSource;
};

const logListDataSource = genLog(1, 100);

function getLog(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (
    !realUrl ||
    Object.prototype.toString.call(realUrl) !== '[object String]'
  ) {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = (parse(realUrl, true).query as unknown) as ListTableParams;

  const dataSource = [...logListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );

  const result = {
    data: dataSource,
    total: logListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

export default {
  'GET /manage/account/getlist': getList,
  'GET /manage/account/queryloginaccount': getLog,
};
