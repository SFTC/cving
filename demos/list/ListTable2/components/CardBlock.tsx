import React from 'react';
import { Card } from 'antd';
import { CardBlockProps } from '../data.d';
import styles from './cardblock.less';

const Block: React.FC<CardBlockProps> = props => {
  const { title, children } = props;
  return (
    <Card style={{ marginBottom: '16px' }}>
      <div className={styles.title}>{title}</div>
      {children}
    </Card>
  );
};

export default Block;
