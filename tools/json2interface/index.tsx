import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './index.less';

export default () => {
  const jsObj = `{
  value: "cving", // 名称
  desc: "cving 真香", // 描述
  id: 888, // 唯一标识
  signs: ['dumi', '物料库', 'cving'], // 标签
  props: { // 属性
    version: "1.0.0", // 版本
    updateTime: "2020-10-10 15:58:00" // 更新时间
  }
}`;

  const jsObj2Interface = `export interface Prop {
  /** 版本 */
  version: string;
  /** 更新时间 */
  updateTime: string;
}

export interface RootObject {
  /** 名称 */
  value: string;
  /** 描述 */
  desc: string;
  /** 唯一标识 */
  id: number;
  /** 标签 */
  signs: string[];
  /** 属性 */
  props: Prop;
}`;

  return (
    <div className={styles.container}>
      <div className={styles.codeContainer}>
        <SyntaxHighlighter
          language="json"
          style={a11yLight}
          customStyle={{ background: '#f5f5f5' }}
        >
          {jsObj}
        </SyntaxHighlighter>
      </div>
      <div className={styles.transform} />
      <div className={styles.codeContainer}>
        <SyntaxHighlighter
          language="typescript"
          style={a11yLight}
          customStyle={{ background: '#f5f5f5' }}
        >
          {jsObj2Interface}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
