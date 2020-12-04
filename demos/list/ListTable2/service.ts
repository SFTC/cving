import request from './utils/request';
import { TableListParams } from './data.d';

const api = {
  queryList: '/manage/voucher/getlist',
};

// 查询凭证
export async function queryList(params?: TableListParams) {
  const result = await request(api.queryList, { params });
  return result;
}
