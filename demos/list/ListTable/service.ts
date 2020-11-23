import request from './utils/request';
import { serializeParams } from './utils/utils';
import { ListTableParams, LogListParams, ListTableItem } from './data.d';

const api = {
  queryList: '/manage/account/getlist',
  exportList: '/manage/account/exportlist',
  getLog: '/manage/account/queryloginaccount',
  preClose: '/manage/account/preclose',
  preCloseCheck: '/manage/account/preclosecheck',
  withDraw: '/manage/account/withdraw',
  close: '/manage/account/close',
};

// 获取关账列表
export async function queryList(params?: ListTableParams) {
  const result = await request(api.queryList, { params });
  return result;
}

// 获取操作日志
export async function getLog(params: LogListParams) {
  const result = await request(api.getLog, { params });
  return result;
}

// 导出客户主数据
export function exportList(params: ListTableParams) {
  if (Object.keys(params).length === 0) {
    window.location.href = api.exportList;
  } else {
    window.location.href = `${api.exportList}?${serializeParams(params)}`;
  }
}

// 预关账
export async function preClose(params: { data: ListTableItem }) {
  const result = await request(api.preClose, {
    method: 'POST',
    data: JSON.stringify(params),
  });
  return result;
}

// 预关账审核
export async function preCloseCheck(params: { data: ListTableItem }) {
  const result = await request(api.preCloseCheck, {
    method: 'POST',
    data: JSON.stringify(params),
  });
  return result;
}

// 预关账撤销
export async function withDraw(params: ListTableItem) {
  const result = await request(api.withDraw, {
    method: 'POST',
    data: JSON.stringify(params),
  });
  return result;
}

// 关账
export async function close(params: { data: ListTableItem }) {
  const result = await request(api.close, {
    method: 'POST',
    data: JSON.stringify(params),
  });
  return result;
}
