/** 字符串首字母变为大写 */
export const firstUpperCase = ([first, ...rest]: string) =>
  first.toUpperCase() + rest.join('');
