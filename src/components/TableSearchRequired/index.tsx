import React from 'react';
import { ProSchemaComponentTypes } from '@ant-design/pro-utils/lib';
import styles from './index.less';

export interface TableSearchRequiredProps {
  /** pro-table 类型 */
  type: ProSchemaComponentTypes;
  /** 标题 */
  title: string;
}

export default (props: TableSearchRequiredProps) => (
  <span className={props.type === 'form' ? styles.required : null}>
    {props.title}
  </span>
);
