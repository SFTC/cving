import { Dispatch, AnyAction } from 'redux';
// import { GlobalModelState } from '@/models/global';

interface GlobalModelState {}

// TitleInfo
export interface TitleTableData {
  company_code: string;
  currency: string;
  date: string;
  gl_date: string;
  text_summary: string;
  type: string;
}

// BP行项目概况
export interface BPTableData {
  // item_number: string; // 序号,
  company_code: string; // 公司代码,
  settlement_code: string; // 结算bp,
  settle_protocol_type: string; // 结算协议类型,
  settle_protocol_type_name: string; // 结算协议名称,
  gl_subject: string; // 总账科目,
  gl_subject_name: string; // 总账科目名称,
  amount: string; // 金额,
  cost_center: string; // 成本中心,
  bill_period: string; // 账期,
  customer_code: string; // 业务BP,
  customer_express_branch: string; // 业务BP网点,
  bill_end_date: string; // 账单期间止,
  payment_term: string; // 信用账期,
  key: number;
  // payment_due_date: string; // 到期日
}

// GL行项目概况
export interface GLTableData {
  // item_number: string; // 序号,
  company_code: string; // 公司代码,
  gl_subject: string; // 总账科目,
  gl_subject_name: string; // 总账科目名称,
  cost_center: string; // 成本中心,
  amount: string; // 金额,
  transfer_amount: string; // 本币金额
  is_div_tax: string; // 自动拆税
  tax_code: string; // 税码
  key: number;
}

// TitleInfo
export interface TitleInfoProps extends GlobalModelState {
  disabledDate: (date: Moment) => boolean;
  dispatch: Dispatch<AnyAction>;
}

// BPProjectInfo
export interface BPProjectInfoProps extends GlobalModelState {
  dispatch: Dispatch<AnyAction>;
  companyCode: any;
}

// GLProjectInfo  GLProjectInfoProps
export interface GLProjectInfoProps extends GlobalModelState {
  dispatch: Dispatch<AnyAction>;
  companyCode: any;
}
