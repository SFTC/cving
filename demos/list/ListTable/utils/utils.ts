import { parse } from 'querystring';
import { IConst, IValueEnum, IOptions } from '../public.d';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

/**
 * [serializeParams 序列化object为http get 参数]
 * @param  {[object]} obj [params object]
 * @return {[string]}     [string]
 */
export function serializeParams(obj: Object) {
  let str = '';
  for (const [key, value] of Object.entries(obj)) {
    str += `&${key}=${value}`;
  }
  return str;
}
/**
 * [formatStatusIValueEnum 给枚举类型配置状态]
 */
export function formatStatusIValueEnum(
  ivenum: IConst,
  options: {
    [key: string]: 'Success' | 'Error' | 'Processing' | 'Warning' | 'Default';
  },
): IValueEnum {
  const result = {} as any;
  Object.keys(ivenum).forEach((k) => {
    result[k] = {};
    result[k].text = ivenum[k];
    result[k].status = options[k];
  });
  return result;
}

/**
 * [formatOptions 将常量对象处理成 options]
 */
export function formatOptions(obj: IConst): Array<IOptions> {
  const result = Object.entries(obj).map(([k, v]) => ({ value: k, label: v }));
  return result;
}
