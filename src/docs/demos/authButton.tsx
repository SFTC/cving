import React from 'react';
import { AuthButton } from 'cving';

export default () => {
  const initPro = {
    authNumber: 100,
    authArray: [100, 200],
    content: '测试',
    callBackFun:()=>{console.log(1)},
  };
  return (
    <>
      <AuthButton {...initPro} />
    </>
  );
};
