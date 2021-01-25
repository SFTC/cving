import React, { useState } from 'react';
import { Button } from 'antd';
import { request } from 'cving';

export default () => {
  const customRequest = request();
  const [data, setData] = useState<string>('');

  const handleCLick = () => {
    customRequest(
      'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/components/request/get',
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
        点击发送get请求
      </Button>
      <div>请求结果：{data}</div>
    </div>
  );
};
