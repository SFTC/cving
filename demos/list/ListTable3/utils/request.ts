/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import { stringify } from 'querystring';

const codeMessage = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    return Promise.reject(new Error(errorText));
  }
  return Promise.reject(new Error('网络异常'));
};

/**
 * 配置request请求时的默认参数
 */
const extendedrequest = extend({
  getResponse: true, // 获取源数据
  credentials: 'include', // 默认请求是否带上cookie
});

/**
 * 对接口的返回值进行二次的封装
 * */
const request = (url: string, options?: Object) =>
  extendedrequest(url, options)
    .then((res) => {
      const { data, response } = res;
      const { status } = response;
      if (status >= 200 && status < 300) return data;
      return errorHandler(res);
    })
    .then((resData) => {
      // 如果走 mock，针对性的直接返回数据即可（mock 没有 errno、 result 包裹下）
      // if (REACT_APP_ENV === 'mock') return resData;
      if (process.env.NODE_ENV === 'development') return resData;
      // 兼容后端返回 errno, error_no, errmsg, error_msg
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { errno, error_no, errmsg = '', error_msg = '', result } = resData;
      if (+errno === 0 || +error_no === 0) return result;
      // 处理未登录的情况
      if (+errno === 2001) {
        const redirectString = stringify({
          redirect_url: window.location.href,
        });
        // 后续上线要改成 https://passtc.sf-express.com/ucenter/userlogin
        window.location.replace(
          `https://passtc.sf-express.com&${redirectString}`,
        );
      }
      return Promise.reject(new Error(errmsg || error_msg));
    })
    .catch((err) => {
      notification.error({
        message: '接口报错',
        description: err.message,
      });
      return false;
    });

export default request;
