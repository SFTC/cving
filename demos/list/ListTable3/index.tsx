import { Button, Form, Row, Modal, message } from 'antd';
import React, { FC, useState, useEffect } from 'react';
// import { connect } from 'dva';
import moment, { Moment } from 'moment';
import styles from './style.less';
import TitleInfo from './components/TitleInfo';
import BPProjectInfo from './components/BPProjectInfo';
import GLProjectInfo from './components/GLProjectInfo';
import SimulateModal from './components/SimulateModal';
import { getAccountPeriod, getSimulate, getVoucherGL } from './service';
// import { ManualentryModelState } from './model';
import { BPTableData, GLTableData, TitleTableData } from './data.d';

const FormItem = Form.Item;
interface InitVoucherDataPicker {
  start: string;
  end: string;
}

interface ManualEntryProps {
  BPDataSource: Array<BPTableData>;
  GLDataSource: Array<GLTableData>;
  companyCode: string;
  dispatch: any;
}

interface Params {
  title: TitleTableData;
  bp_data: BPTableData[];
  gl_data: GLTableData[];
}

const simulationInfoParmas = {
  title: {
    company_code: '',
    currency: '',
    date: '',
    gl_date: '',
    text_summary: '',
    type: '',
  },
  bp_data: [
    {
      company_code: '',
      settlement_code: '',
      settle_protocol_type: '',
      settle_protocol_type_name: '',
      gl_subject: '',
      gl_subject_name: '',
      amount: '',
      cost_center: '',
      bill_period: '',
      customer_code: '',
      customer_express_branch: '',
      bill_end_date: '',
      payment_term: '',
      key: 0,
    },
  ],
  gl_data: [
    {
      company_code: '',
      gl_subject: '',
      gl_subject_name: '',
      cost_center: '',
      amount: '',
      transfer_amount: '',
      is_div_tax: '',
      tax_code: '',
      key: 0,
    },
  ],
};

const ManualEntry: FC<ManualEntryProps> = (props) => {
  const {
    companyCode = '',
    BPDataSource = [],
    GLDataSource = [],
    dispatch,
  } = props;
  const [
    initVoucherDataPicker,
    getInitVoucherDataPicker,
  ] = useState<InitVoucherDataPicker>({
    start: '',
    end: '',
  });
  const [visibleSimulateModal, openSimulateModal] = useState<boolean>(false);
  const [visiblePostModal, openPostModal] = useState<boolean>(false);
  const [simulateInfo, saveSimulateInfo] = useState<Params>(
    simulationInfoParmas,
  ); // 保存模拟成功
  const [tagSimulate, handleTagSimulate] = useState<boolean>(false); // 标记模拟tag
  const [tagPost, handleTagPost] = useState<boolean>(false); // 标记过账tag
  const [paramsPost, saveParmasPost] = useState<Params>(); // 保存请求参数
  const [disabledPost, handleDisabledPost] = useState<boolean>(false); // 过账置灰色

  // 点击“模拟”
  const onFinish = (values: { [key: string]: any }) => {
    const {
      title,
      title: { date, gl_date },
    } = values;
    const params = {
      title: {
        ...title,
        date: date ? moment(date).format('YYYY-MM-DD') : '',
        gl_date: gl_date ? moment(gl_date).format('YYYY-MM-DD') : '',
      },

      bp_data: {
        ...BPDataSource,
      },
      gl_data: {
        ...GLDataSource,
      },
    };

    if (tagSimulate) {
      handleTagSimulate(false);
      getSimulate(params).then((res) => {
        if (res) {
          saveSimulateInfo(res);
          openSimulateModal(true);
        }
      });
    }

    if (tagPost) {
      saveParmasPost(params);
      handleTagPost(false);
    }
  };

  //  模拟
  const onSimulate = () => {
    handleTagSimulate(true);
  };

  const handleSimulateCancel = () => {
    openSimulateModal(false);
  };

  // 过账
  const onPost = () => {
    openPostModal(true);
    handleTagPost(true);
  };

  const handlePostCancel = () => {
    openPostModal(false);
  };

  const handlePostOk = () => {
    getVoucherGL(paramsPost).then((res) => {
      if (res) {
        handleDisabledPost(true);
        message.success('过账成功', 2, () => {
          window.location.reload(true);
        });
      }
      openPostModal(false);
    });
  };

  // 过账日期 - 可选的账期范围
  const disabledDate = (current: Moment) => {
    const { start, end } = initVoucherDataPicker;
    const currentDate = current.format('YYYY-MM-DD');
    return currentDate < start || currentDate > end;
  };
  useEffect(() => {
    // 前置获取账期时间
    getAccountPeriod().then((res) => {
      getInitVoucherDataPicker(res);
    });
  }, []);

  return (
    <div className={styles.main}>
      <Form
        hideRequiredMark
        style={{ marginTop: 8 }}
        name="basic"
        onFinish={onFinish}
        initialValues={{ title: { type: 'YM', currency: 'CNY' } }}
      >
        <Row>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.btn}
              onClick={() => onSimulate()}
            >
              模拟
            </Button>
          </FormItem>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.btn}
              onClick={() => onPost()}
              disabled={disabledPost}
            >
              过账
            </Button>
          </FormItem>
        </Row>

        {/* 抬头信息 */}
        <TitleInfo disabledDate={disabledDate} dispatch={dispatch} />

        {/* BP行项目情况 */}
        <BPProjectInfo companyCode={companyCode} dispatch={dispatch} />

        {/* GL行项目情况 */}
        <GLProjectInfo companyCode={companyCode} dispatch={dispatch} />
      </Form>

      {/* 模拟弹窗 */}
      {visibleSimulateModal ? (
        <SimulateModal
          visibleSimulateModal={visibleSimulateModal}
          onCancel={handleSimulateCancel}
          simulateInfo={simulateInfo}
        />
      ) : (
        ''
      )}

      {/* 过账弹窗 */}
      {visiblePostModal ? (
        <Modal
          visible={visiblePostModal}
          title="过账"
          width={340}
          bodyStyle={{ padding: '32px 40px 48px' }}
          onOk={handlePostOk}
          onCancel={handlePostCancel}
        >
          是否确定运行过账当前数据
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

// export default connect(
//   ({
//     manualentry: { bpProjectDataSource, glProjectDataSource, companyCode },
//   }: {
//     manualentry: ManualentryModelState;
//   }) => ({
//     BPDataSource: bpProjectDataSource,
//     GLDataSource: glProjectDataSource,
//     companyCode: companyCode,
//   }),
// )(ManualEntry);
export default ManualEntry;
