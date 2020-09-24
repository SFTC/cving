/** 字符串首字母变为大写 */
export const firstUpperCase = ([first, ...rest]: string) =>
  first.toUpperCase() + rest.join('');

export const tableTextToInterface = (text: string): string => {
  const typeMap = {
    int: 'number',
    string: 'string',
  };
  const fieldList = text.split(/\n/g);
  const fieldStr = fieldList
    .map(item => {
      const fieldItem = item.replace(/\s+/g, '|').split('|');
      return `
    /** ${fieldItem[3]} */
    ${fieldItem[0]}${fieldItem[2] === '是' ? ':' : '?:'} ${
        typeMap[fieldItem[1]]
      };`;
    })
    .join('\t');

  const result = `export interface Object {${fieldStr}
}`;
  return result;
};
