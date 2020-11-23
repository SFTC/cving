export interface TableListItem {
  op_type: number;
  op_content:
    | string
    | {
        before: any;
        after: any;
      };
  op_user: string;
  op_time: number;
}

export interface TableListParams {
  pageSize: number;
  current: number;
}
