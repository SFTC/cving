import request from './utils/request';

// 获取会计账期
export async function getAccountPeriod() {
  const data = await request('/manage/voucher/getaccountperiod', {});
  return data;
}

// 凭证模拟
export async function getSimulate(params) {
  const result = await request('/manage/voucher/simulate', {
    method: 'POST',
    data: params,
  });
  return result;
}

// 凭证过账
export async function getVoucherGL(params) {
  const result = await request('/manage/voucher/gl', {
    method: 'POST',
    data: params,
  });
  return result;
}

// 凭证查询是否是月结客户
export async function getIsMonthCustomer(params: { settlement_code: string }) {
  const data = await request('/manage/voucher/ismonthcustomer', { params });
  return data;
}
