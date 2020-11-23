export interface ListTableItem {
  id: string;
  company_code: string;
  company_name: string;
  start_year: string;
  start_month: string;
  end_year: string;
  end_month: string;
  pre_close_status: string;
  close_status: string;
}

export interface ListTablePagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface ListTableParams {
  company_code?: string;
  pre_close_status?: string;
  close_status?: string;
  pageSize?: number;
  current?: number;
}

// 日志请求参数
export interface LogListParams {
  company_code: string;
  start_year: string;
  start_month: string;
  pageSize?: number;
  current?: number;
}

export interface LogListItem {
  id?: number;
  op_content: string;
  op_user: string;
  op_time: string;
}
