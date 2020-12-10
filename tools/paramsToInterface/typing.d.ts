/** 表单参数 */
export interface FormParams {
  /** 接口名称 */
  name: string;
  /** 字段列表 */
  fields: FormField[];
}

export interface FormField {
  /** 数据类型 */
  dataType: string[];
  /** 字段说明 */
  desc: string;
  /** 字段名 */
  fieldName: string;
  /** 是否必传 */
  isRequired: boolean;
  /** 备注 */
  remark: string;
}
