import React, { useState } from 'react';
import { Button } from 'antd';
import { request } from 'cving';

export default () => {
  const customRequest = request({
    env: 'dev',
    getLoginUrlFromAE: true,
  });
  const [data, setData] = useState<string>('');

  const handleCLick = () => {
    customRequest(
      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-no-login',
      {
        params: { id: 1 },
      },
    ).then((res) => {
      setData(JSON.stringify(res));
    });
  };

  return (
    <div>
      <Button type="primary" onClick={handleCLick}>
        点击发送请求
      </Button>
      <div>请求结果：{data}</div>
    </div>
  );
};
