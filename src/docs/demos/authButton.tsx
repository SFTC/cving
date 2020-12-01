import React from 'react';
import { AuthButton } from 'cving';

export default () => {
  const initPro = {
    authNumber: [100],
    authArray: [100, 200],
    // personalAuthFun:()=>{
    //   return [100, 200].includes(100)
    // },
    onClick: () => {
      window.location.href = 'http://www.baidu.com';
    },
  };
  return (
    <AuthButton {...initPro} size="large">
      测试
    </AuthButton>
  );
};
