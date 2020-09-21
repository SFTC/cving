import React, { useState } from 'react';
import { Button, Input } from 'antd';

import { format } from './format';

import styles from './index.less';
import './format.less';

const { TextArea } = Input;

export default () => {
  /** 待格式化JSON数据 */
  const [json, setJson] = useState('');

  /** 格式化后的JSON数据 */
  const [formatJson, setFormatJson] = useState('');

  const handleClickFormat = async () => {
    console.log(json);
    const formatJSON = await format(json);
    setFormatJson(formatJSON);
  };

  return (
    <div>
      <h4>待格式化JSON：</h4>
      <TextArea
        rows={4}
        value={json}
        onChange={e => {
          setJson(e.target.value);
        }}
      />
      <Button type="primary" onClick={handleClickFormat}>
        格式化
      </Button>
      <h4>格式化JSON：</h4>
      <div
        id="Canvas"
        className={styles.canvas}
        style={{ height: '200px', overflow: 'auto', marginBottom: '0px' }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: formatJson }}
      />
    </div>
  );
};
