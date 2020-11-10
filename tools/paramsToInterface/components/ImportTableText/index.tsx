import React, { useState, useEffect } from 'react';
import { Modal, Input, message, Space, Card } from 'antd';
import styles from './index.less';

interface IPorps {
  visible: boolean;
  changeVisible: (visible: boolean) => void;
  onConfirm: (text: string) => void;
}

/** 导入表格文本弹窗 */
export default (props: IPorps) => {
  const { visible, changeVisible, onConfirm } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!visible) {
      setValue('');
    }
  }, [visible]);

  const onOk = () => {
    if (!value) {
      message.warning('请先输入文本信息');
    } else {
      onConfirm(value);
    }
  };

  return (
    <Modal
      width={1250}
      title="参数信息"
      maskClosable={false}
      visible={visible}
      onCancel={() => changeVisible(false)}
      onOk={onOk}
    >
      <Space size={50} align="start">
        <div style={{ width: '500px' }}>
          <Input.TextArea
            placeholder="请输入表格文本"
            value={value}
            rows={30}
            onChange={e => setValue(e.currentTarget.value)}
          />
        </div>
        <Card title="使用说明">
          <div>
            <p>1. 复制 wiki 中表格内容，注意不需要复制表头信息</p>
            <img
              className={styles.copyTableGif}
              alt="复制 wiki 表格内容"
              // eslint-disable-next-line global-require
              src={require('../../../assets/copyTableBody.gif')}
            />
          </div>

          <div>
            <p>
              2.
              将复制文本直接粘贴到左侧多行输入框中，点击&quot;确定&quot;后即可生成
              interface 与参数表格
            </p>
            <img
              className={styles.textToInterfaceGif}
              alt="复制 wiki 表格内容"
              // eslint-disable-next-line global-require
              src={require('../../../assets/textToInterface.gif')}
            />
          </div>

          <div>
            <p>
              注意：文本识别本质上通过切割每一行文本中的空格来实现的，所以请严格按照&quot;字段名
              数据类型 是否必传 字段说明 备注&quot;这个顺序输入，中间用一个或多个空格隔开
            </p>
          </div>
        </Card>
      </Space>
    </Modal>
  );
};
