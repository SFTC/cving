import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/index';

export declare type AuthButtonProps = {
  authNumber?: number | Array<number>;
  authArray?: Array<number>;
  personalAuthFun?: () => Boolean;
} & ButtonProps;
const Auth = (props: AuthButtonProps) => {
  let isShow: Boolean = false;
  if (typeof props.authNumber === 'number') {
    isShow = props.authArray?.includes(props.authNumber) || false;
  } else if (Array.isArray(props.authNumber)) {
    isShow =
      props.authNumber?.every(val => props.authArray?.includes(val)) || false;
  } else if (typeof props.personalAuthFun === 'function') {
    isShow = props.personalAuthFun();
  }
  if (isShow) {
    return (
      <Button type="primary" {...props}>
        {props.children}
      </Button>
    );
  }
  return <></>;
};
export default Auth;
