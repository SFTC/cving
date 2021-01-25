import { CloudDownloadOutlined } from '@ant-design/icons';
import { Button, Divider, message, Popconfirm } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';

import { formatStatusIValueEnum } from './utils/utils';
import { IValueEnum } from './public';
import LogDialog from './components/LogDialog';
import { FormInstance } from 'antd/es/form';

import { ListTableItem, ListTableParams } from './data';
import {
  queryList,
  getLog,
  exportList,
  preClose,
  preCloseCheck,
  withDraw,
  close,
} from './service';

interface ListTableProps {}

// 四大操作按钮 - 预关账状态
const operate2Status = {
  预关账: '1',
  预关账审核: '2',
  预关账撤销: '3',
  关账: '3',
};
// 四大操作按钮 — 对应接口请求
const mapRequest = {
  预关账: preClose,
  预关账审核: preCloseCheck,
  预关账撤销: withDraw,
  关账: close,
};

const closeStatusMap = {
  '1': '未关账',
  '2': '已关账',
};
const preCloseStatusMap = {
  '1': '未预关账',
  '2': '申请中',
  '3': '预关账',
};

const ListTable: React.FC<ListTableProps> = () => {
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance>(); // 获取 form 实例，方便拿到筛选项
  const [accountPeriod, handleAccountPeriod] = useState<string>('-');
  const [statusOptions, handleStatusOptions] = useState<IValueEnum>({});
  const [preStatusOptions, handlePreStatusOptions] = useState<IValueEnum>({});
  const [logDialog, handleDialogVisible] = useState<boolean>(false); // table - 日志
  const [logParam, handleLogParam] = useState<string[]>([]); // table - 日志
  // 获取常量 - 关账 & 预关账状态
  useEffect(() => {
    const temp = formatStatusIValueEnum(closeStatusMap, {
      1: 'Error',
      2: 'Success',
    });
    const preTemp = formatStatusIValueEnum(preCloseStatusMap, {
      1: 'Error',
      2: 'Processing',
      3: 'Success',
    });
    handleStatusOptions(temp);
    handlePreStatusOptions(preTemp);
  }, [closeStatusMap]);
  const columns: ProColumns<ListTableItem>[] = [
    {
      title: (config, type) =>
        type === 'form' ? (
          <div>
            <span style={{ color: 'red', fontWeight: 600 }}>*</span>公司代码
          </div>
        ) : (
          <div>公司代码</div>
        ),
      dataIndex: 'company_code',
      fieldProps: { placeholder: '支持查询多个，以逗号分隔' },
      width: 120,
    },
    {
      title: '公司名称',
      dataIndex: 'company_name',
      search: false,
      width: 160,
    },
    {
      title: '起始年度',
      dataIndex: 'start_year',
      search: false,
      width: 80,
    },
    {
      title: '起始期间（月）',
      dataIndex: 'start_month',
      search: false,
      width: 120,
    },
    {
      title: '终止年度',
      dataIndex: 'end_year',
      search: false,
      width: 80,
    },
    {
      title: '终止期间（月）',
      dataIndex: 'end_month',
      search: false,
      width: 120,
    },
    {
      title: '预关帐状态',
      dataIndex: 'pre_close_status',
      valueEnum: preStatusOptions,
      filterIcon: () => null,
      width: 100,
    },
    {
      title: '关账状态',
      dataIndex: 'close_status',
      valueEnum: statusOptions,
      filterIcon: () => null,
      width: 100,
    },
    {
      title: '操作',
      dataIndex: 'option',
      width: 60,
      valueType: 'option',
      fixed: 'right',
      render: (_, record) => (
        <a
          onClick={() => {
            const { company_code, start_year, start_month } = record;
            handleLogParam([company_code, start_year, start_month]);
            handleDialogVisible(true);
          }}
        >
          日志
        </a>
      ),
    },
  ];
  // 查询列表
  const handleQuery = async (params: ListTableParams) => {
    const { company_code } = params;
    // 匹配多个特殊字符（用来作为分隔符）
    const temp = (company_code && company_code.split(/，|,|、|\.|\s+/)) || [];
    const filterParam = temp.filter((ele) => ele.length).join(',');
    if (filterParam.length) {
      const result = await queryList({ ...params, company_code: filterParam });
      handleAccountPeriod(result.account_period || '-');
      return result;
    }
    return new Promise((resolve) => resolve([]));
  };
  // 导出列表数据
  const handleExport = () => {
    const formParam =
      (formRef.current && formRef.current.getFieldsValue()) || {};
    // 匹配多个特殊字符（用来作为分隔符）
    const temp =
      (formParam.company_code &&
        formParam.company_code.split(/，|,|、|\.|\s+/)) ||
      [];
    const filterCode = temp.filter((ele: string) => ele.length).join(',');
    // 如果没有选择：公司代码；那么无法导出
    if (!filterCode.length) {
      message.warning('请输入公司代码');
    } else {
      const filterParams = {};
      Object.keys(formParam).forEach((key) => {
        if (formParam[key]) {
          filterParams[key] = formParam[key];
        }
      });
      exportList({ ...filterParams, company_code: filterCode });
    }
  };
  // 前置拦截操作
  const handleIntercept = (
    source: string,
    selectedBills: Array<ListTableItem>,
  ) => {
    // 选中 row 中具有【关账状态 - 已关账】
    const hasClosed = selectedBills.some((item) => +item.close_status === 2);
    if (hasClosed || !selectedBills.length) return true;
    const flag = selectedBills.every(
      (item) => +item.pre_close_status === +operate2Status[source],
    );
    return !flag;
  };
  const handleOperate = async (
    source: string,
    selectedBills: Array<ListTableItem>,
  ) => {
    const result = await mapRequest[source]({ data: selectedBills });
    if (result && result.successflag && String(result.successflag) === '1')
      message.success(`${source}操作成功！`);
    if (actionRef.current) {
      actionRef.current.reload();
    }
  };

  return (
    <>
      <ProTable<ListTableItem>
        headerTitle={
          <div
            style={{ marginRight: '30px' }}
          >{`关账会计期间：${accountPeriod}`}</div>
        }
        actionRef={actionRef}
        formRef={formRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <div>
            {Object.keys(operate2Status).map((ele) => (
              <div key={ele} style={{ display: 'inline-block' }}>
                <Popconfirm
                  title={`确认进行[${ele}]操作吗?`}
                  disabled={handleIntercept(ele, selectedRows || [])}
                  onConfirm={() => handleOperate(ele, selectedRows || [])}
                >
                  <Button disabled={handleIntercept(ele, selectedRows || [])}>
                    {ele}
                  </Button>
                </Popconfirm>
                <Divider type="vertical" />
              </div>
            ))}
          </div>,
          <Button type="primary" onClick={handleExport}>
            <CloudDownloadOutlined />
            导出列表
          </Button>,
        ]}
        tableAlertRender={({ selectedRowKeys }) => (
          <div>
            已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a>{' '}
            项&nbsp;&nbsp;
          </div>
        )}
        request={(params) => handleQuery(params)}
        columns={columns}
        rowSelection={{}}
        search={{
          collapsed: false,
          optionRender: ({ searchText, resetText }, { form }) => (
            <>
              <Button
                style={{ marginRight: '8px' }}
                onClick={() => {
                  form?.resetFields();
                  form?.submit();
                }}
              >
                {resetText}
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  const { company_code } = form?.getFieldsValue();
                  const temp =
                    (company_code && company_code.split(/，|,|、|\.|\s+/)) ||
                    [];
                  const filterCode = temp
                    .filter((ele: string) => ele.length)
                    .join(',');
                  if (!filterCode.length) {
                    message.warning('请输入公司代码');
                    return;
                  }
                  form?.submit();
                }}
              >
                {searchText}
              </Button>
            </>
          ),
        }}
      />
      {/* 日志Dialog */}
      <LogDialog
        rowKey="op_time"
        onCancel={() => handleDialogVisible(false)}
        modalVisible={logDialog}
        getOperateLog={(params) =>
          getLog({
            ...params,
            company_code: logParam[0],
            start_year: logParam[1],
            start_month: logParam[2],
          })
        }
      />
    </>
  );
};

export default ListTable;
