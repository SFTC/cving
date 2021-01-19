import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';

import { format } from './format';

import styles from './index.less';
import './format.less';

export default () => {
  /** 待格式化JSON数据 */
  const [json, setJson] = useState('');

  /** 格式化后的JSON数据 */
  const [formatJson, setFormatJson] = useState('');

  const handleClickFormat = async () => {
    const formatJSON = await format(json);
    setFormatJson(formatJSON);
  };

  const handleReset = async () => {
    setJson('');
    setFormatJson('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.jsonContainer}>
        <h4>待格式化JSON：</h4>
        <Input.TextArea
          rows={30}
          value={json}
          onChange={(e) => {
            setJson(e.target.value);
          }}
        />
      </div>

      <div className={styles.operaContainer}>
        <Space size={30} direction="vertical">
          <Button type="primary" onClick={handleClickFormat}>
            格式化
          </Button>
          <Button onClick={handleReset}>重置</Button>
        </Space>
      </div>

      <div className={styles.jsonContainer}>
        <h4>格式化JSON：</h4>
        <div
          id="Canvas"
          className={styles.canvas}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: formatJson }}
        />
      </div>
    </div>
  );
};
