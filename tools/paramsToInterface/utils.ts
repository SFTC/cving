/** 数据类型前后端名称映射 */
export const typeDataMap = {
  int: 'number',
  string: 'string',
};

/** 字符串首字母变为大写 */
export const firstUpperCase = ([first, ...rest]: string) =>
  first.toUpperCase() + rest.join('');

export const formToInterface = (data: any) => {
  const fieldStrArr = data.fields.map((field: any) => {
    return [
      `  /** ${field.desc}${field.remark ? `【${field.remark}】` : ''} */`,
      `  ${field.fieldName}${field.isRequired ? '' : '?'}: ${
        typeDataMap[field.dataType]
      };`,
    ].join('\n');
  });
  const result = `export interface ${firstUpperCase(data.name) || 'Object'} {
${fieldStrArr.join('\n')}
}`;

  return result;
};

export const tableTextToFormData = (text: string) => {
  const fieldList = text.split(/\n/g);

  const FormData = fieldList.map(item => {
    const fieldItem = item.replace(/\s+/g, '|').split('|');
    return {
      fieldName: fieldItem[0],
      dataType: typeDataMap[fieldItem[1]],
      isRequired: !!['是', true, 'true', '1', 1].includes(fieldItem[2]),
      desc: fieldItem[3],
      remark: fieldItem[4],
    };
  });
  return FormData;
};
