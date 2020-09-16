import React from 'react';
import { ProSchemaComponentTypes } from '@ant-design/pro-utils/lib';
import classNames from 'classnames';

import './index.less';

export interface TableSearchRequiredProps {
  /** pro-table 类型 */
  type: ProSchemaComponentTypes;
  /** 标题 */
  title: string;
}

export default (props: TableSearchRequiredProps) => (
  <span
    className={
      props.type === 'form'
        ? classNames('cving-table-search-required')
        : undefined
    }
  >
    {props.title}
  </span>
);
