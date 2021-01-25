import React from 'react';
import { Button } from 'antd';
import './index.less';

import type { ButtonProps } from 'antd/lib/button/button';

export type LinkButtonType = ButtonProps & React.RefAttributes<HTMLElement>;

/** 跳转链接按钮 */
const LinkButton = (props: LinkButtonType) => {
  const { children, ...rest } = props;

  return (
    <Button type="link" className="cving-link-button" {...rest}>
      {children}
    </Button>
  );
};

export default LinkButton;
