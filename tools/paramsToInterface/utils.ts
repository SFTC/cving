import { FormParams } from './typing.d';

/** 数据类型前后端名称映射 */
export const typeDataMap = {
  int: 'number',
  number: 'number',
  string: 'string',
  boolean: 'boolean',
  null: 'null',
  undefined: 'undefined',
};

/** 字符串首字母变为大写 */
export const firstUpperCase = ([first, ...rest]: string) =>
  first.toUpperCase() + rest.join('');

/** 将 form 表单转为 interface 接口定义 */
export const formToInterface = (data: FormParams) => {
  /** 处理注释（纯函数） */
  const toComment = (desc?: string, remark?: string) => {
    if (!desc && !remark) {
      return null;
    }
    return `  /** ${desc ?? ''}${remark ? `【${remark}】` : ''} */`;
  };

  const fieldStrArr = data.fields.map(field => {
    return [
      toComment(field.desc, field.remark),
      `  ${field.fieldName}${field.isRequired ? '' : '?'}: ${field.dataType
        .map(i => typeDataMap[i])
        .join(' | ')};`,
    ]
      .filter(v => v)
      .join('\n');
  });
  const result = `export interface ${firstUpperCase(data.name) || 'Object'} {
${fieldStrArr.join('\n')}
}`;

  return result;
};

/** 将 table 文本转为 form 表单项，依赖 table 文本字段的顺序 */
export const tableTextToFormData = (text: string) => {
  const fieldList = text.split(/\n/g);

  const FormData = fieldList.map(item => {
    const fieldItem = item.replace(/\s+/g, '|').split('|');
    return {
      fieldName: fieldItem[0],
      dataType: fieldItem[1].split('、').map(i => typeDataMap[i]),
      isRequired: !!['是', true, 'true', '1', 1].includes(fieldItem[2]),
      desc: fieldItem[3],
      remark: fieldItem[4],
    };
  });
  return FormData;
};

/** 获取一个字段的初始配置 */
export const getInitField = () => ({
  isRequired: '1',
  dataType: ['string'],
});
