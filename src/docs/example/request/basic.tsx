import React from 'react';
import { Button } from 'antd';
import { request } from 'cving';

export default () => {
  const customRequest = request({
    env: 'dev',
    // getResponse: true,
  });

  const handleCLick = () => {
    customRequest(
      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-get',
    ).then(res => {
      console.log('res ---> ', res);
    });
  };

  return (
    <Button type="primary" onClick={handleCLick}>
      点击发送get请求
    </Button>
  );
};
