import { IConst } from './public.d';

// 筛选项的类型
export interface TableListParams {
  voucher_no?: string;
  type: string;
  pageSize?: number;
  current?: number;
}
// 列表结果的类型
export interface TableListItem {
  item_number: string;
  company_code: string;
  settle_protocol_type: string;
  settle_protocol_type_name: string;
  gl_subject: string;
  gl_subject_name: string;
  business_type: string;
  amount: string;
  cost_center: string;
  bill_period: string;
  customer_code: string;
  customer_express_branch: string;
  bill_end_date: string;
  payment_term: string;
  payment_due_date: string;
}
// 页码相关类型
export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

// 抬头信息
export interface TitleInfoType {
  info: {
    date: string;
    gl_date: string;
    type: string;
    currency: string;
    company_code: string;
    bill_code: string;
    recorder: string;
    record_time: string;
    reverse_voucher_no: string;
    reversed_voucher_no: string;
    text_summary: string;
  };
}

// 抬头表单信息
export interface TitleFormItem {
  label: string;
  name: string;
  rule?: boolean;
  span?: number;
  valueEnum?: IConst;
  timeFormat?: string;
}

// CardBlock props
export interface CardBlockProps {
  title: string;
}

// LoadMoreTable props
export interface LoadMoreTableProps {
  columns: {
    title: string;
    dataIndex: string;
    width: number;
  }[];
  query: any;
  exParams: object;
  allowParamsNull?: boolean;
  rowKey: string;
}
