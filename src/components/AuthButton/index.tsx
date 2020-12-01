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
  const propNumber = props.authNumber;
  const propArray = props.authArray;
  const propFun = props.personalAuthFun;

  if (typeof propNumber === 'number') {
    isShow = propArray?.includes(propNumber) || false;
  } else if (Array.isArray(propNumber)) {
    isShow = propNumber?.every(val => propArray?.includes(val)) || false;
  } else if (typeof propFun === 'function') {
    isShow = propFun();
  }
  const { authNumber, authArray, personalAuthFun, ...rest } = props;
  if (isShow) {
    return (
      <Button type="primary" {...rest}>
        {props.children}
      </Button>
    );
  }
  return <></>;
};
export default Auth;
