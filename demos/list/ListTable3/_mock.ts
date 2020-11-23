// mock - 对账日期
function getAccountPeriod(req: Request, res: Response, u: string) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    // eslint-disable-next-line prefer-destructuring
    url = req.url;
  }

  const result = {
    start: '2020-06-20',
    end: '2020-07-13',
  };

  return res.json(result);
}

export default {
  'GET /manage/voucher/getaccountperiod': getAccountPeriod,
};
