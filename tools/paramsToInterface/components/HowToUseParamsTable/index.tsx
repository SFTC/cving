import React from 'react';
import { Modal, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styles from './index.less';

interface IPorps {
  visible: boolean;
  changeVisible: (visible: boolean) => void;
}

/** 如何使用参数表格弹框 */
export default (props: IPorps) => {
  const { visible, changeVisible } = props;

  return (
    <Modal
      visible={visible}
      width={1200}
      title="使用说明"
      footer={[
        <Button
          key="know"
          type="primary"
          icon={<SmileOutlined />}
          onClick={() => changeVisible(false)}
        >
          我知道了
        </Button>,
      ]}
    >
      <div>
        <p className={styles.explain}>
          鼠标选中表格内容后直接复制到 wiki 中即可
        </p>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgGif}
            alt="如何使用 table 参数表格"
            // eslint-disable-next-line global-require
            src={require('../../../assets/generateInterface.gif')}
          />
        </div>
      </div>
    </Modal>
  );
};
