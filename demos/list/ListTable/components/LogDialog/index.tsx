import React, { useRef } from 'react';
import { Modal } from 'antd';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import moment from 'moment';
import { IValueEnum } from '../../public.d';
import { TableListItem, TableListParams } from './data';
import style from './LogDialog.less';

interface LogDialogProps {
  rowKey?: string;
  modalVisible: boolean;
  onCancel: () => void;
  getOperateLog: (params: Partial<TableListParams>) => Promise<any>;
  handleLogDetail?: (params: string) => void;
  dataOpType?: IValueEnum;
}

const LogDialog: React.FC<LogDialogProps> = (props) => {
  const actionRef = useRef<ActionType>();
  const {
    rowKey = 'id',
    dataOpType = null,
    modalVisible,
    onCancel,
    getOperateLog,
    handleLogDetail,
  } = props;
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '备注',
      dataIndex: 'op_content',
      render: (text, row) =>
        typeof text === 'string' ? (
          text
        ) : (
          <a
            onClick={() => {
              const opContentStr = JSON.stringify(row.op_content);
              if (handleLogDetail) handleLogDetail(opContentStr);
            }}
            style={{ padding: 0 }}
          >
            详情
          </a>
        ),
    },
    {
      title: '操作人',
      dataIndex: 'op_user',
    },
    {
      title: '操作时间',
      dataIndex: 'op_time',
      render: (text) =>
        text
          ? moment((text as number) * 1000).format('YYYY-MM-DD HH:mm:ss')
          : '',
    },
  ];
  // 如果存在映射关系，那么就展示操作类型
  if (dataOpType) {
    columns.push({
      title: '操作类型',
      dataIndex: 'op_type',
      valueEnum: dataOpType,
    });
  }

  return (
    <Modal
      width="900px"
      destroyOnClose
      title="日志"
      visible={modalVisible}
      footer={false}
      onCancel={() => onCancel()}
    >
      <ProTable<TableListItem>
        actionRef={actionRef}
        rowKey={rowKey}
        rowClassName={(record, index) => {
          let className = 'light-row';
          if (index % 2 === 1) className = 'dark-row';
          return className;
        }}
        className={style.logdialogtable}
        request={(params) => getOperateLog(params as Partial<TableListParams>)}
        columns={columns}
        search={false}
        options={false}
      />
    </Modal>
  );
};

export default LogDialog;
