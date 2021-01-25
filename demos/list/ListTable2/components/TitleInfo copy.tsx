/* eslint-disable */
import React, { useEffect } from 'react';
import { Form, Row, Col, Input } from 'antd';
import { cloneDeep } from 'lodash';
import moment from 'moment';
import { TitleInfoType, TitleFormItem } from '../data';

const voucherTypeMap = {
  YA: 'YA-应收',
  YB: 'YB-应付',
  YC: 'YC-仅清账',
  YF: 'YF-预收转应收',
  YH: 'YH-付款进行',
  YI: 'YI-收款',
  YM: 'YM-手工',
  YO: 'YO-付款',
  YQ: 'YQ-期初数据传输',
  YS: '营业外收入',
  YU: 'YU-应收应付暂估',
  YW: 'YW-坏账/抵扣工资',
  YZ: '系统核销',
};

const TitleInfo: React.FC<TitleInfoType> = (props) => {
  const { info } = props;
  const [form] = Form.useForm();
  const formItemList = [
    [
      {
        label: '凭证日期',
        name: 'date',
        rule: true,
      },
      {
        label: '过账日期',
        name: 'gl_date',
        rule: true,
      },
      {
        label: '凭证类型',
        name: 'type',
        rule: true,
        valueEnum: voucherTypeMap,
      },
      {
        label: '交易货币',
        name: 'currency',
        rule: true,
      },
    ],
    [
      {
        label: '公司代码',
        name: 'company_code',
        rule: true,
      },
      {
        label: '系统单号',
        name: 'bill_code',
      },
      {
        label: '录入人',
        name: 'recorder',
      },
      {
        label: '录入时间',
        name: 'record_time',
        timeFormat: 'YYYY-MM-DD HH:mm:ss',
      },
    ],
    [
      {
        label: '冲销凭证编号',
        name: 'reverse_voucher_no',
      },
      {
        label: '被冲销凭证编号',
        name: 'reversed_voucher_no',
      },
      {
        label: '对账代码',
        name: 'check_code',
      },
    ],
    [
      {
        label: '文本摘要',
        name: 'text_summary',
        rule: true,
        span: 11,
      },
    ],
  ];
  useEffect(() => {
    const newInfo = cloneDeep(info);
    formItemList
      .reduce((pre, cur) => [...pre, ...cur], [])
      .forEach((v: TitleFormItem) => {
        if (v.valueEnum) {
          newInfo[v.name] = v.valueEnum[info[v.name]];
        }
        if (v.timeFormat) {
          newInfo[v.name] = info[v.name]
            ? moment(info[v.name] * 1000).format(v.timeFormat)
            : '-';
        }
      });
    form.setFieldsValue(newInfo);
  }, [info]);

  const getFields = () => {
    const formItemNode: JSX.Element[] = [];
    formItemList.forEach((level1: TitleFormItem[]) => {
      const formItemNodeRow: any = [];
      level1.forEach((level2: TitleFormItem, i2: number) => {
        formItemNodeRow.push(
          <Col span={level2.span || 5} offset={i2 ? 1 : 0} key={level2.name}>
            <Form.Item
              name={level2.name}
              label={level2.label}
              rules={[{ required: Boolean(level2.rule) }]}
            >
              <Input placeholder="-" disabled style={{ textAlign: 'center' }} />
            </Form.Item>
          </Col>,
        );
      });
      formItemNode.push(
        // eslint-disable-next-line react/no-array-index-key
        <Row key={Math.random()}>{...formItemNodeRow}</Row>,
      );
    });
    return formItemNode;
  };
  return <Form form={form}>{getFields()}</Form>;
};

export default TitleInfo;
