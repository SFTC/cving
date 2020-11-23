import  React  from 'react';
import { Button } from 'antd';

export interface ButtonProps {
  authNumber: number;
  authArray: Array<number>;
  content: string;
  callBackFun?: () => void;
};
const Auth = (props: ButtonProps) => {
  // eslint-disable-next-line no-bitwise
  const isShow = Boolean(~props.authArray.indexOf(props.authNumber));
  if (isShow){
    return (
      <Button type="primary" onClick={props.callBackFun}>
        { props.content }
      </Button>
    );
  }
  return <></>
};
export default Auth;