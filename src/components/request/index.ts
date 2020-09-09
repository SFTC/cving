import { extend, ExtendOptionsInit } from 'umi-request';
import { notification } from 'antd';
import { isEmpty } from 'better-js-lib';

/** 调用错误提示框 */
const remindError = (errorDesc: string, errorMsg: string = '接口报错') =>
  notification.error({
    message: errorMsg,
    description: errorDesc,
  });

/** 错误处理 */
const errorHandler = (error: { response: Response }) => {
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

  const { response } = error;
  /** 异常说明文案 */
  let errorText = '网络异常';

  if (response && response.status) {
    errorText = codeMessage[response.status] || response.statusText;
  }

  remindError(errorText);

  return false;
};

/** 拓展配置 */
export interface ExtendOption extends ExtendOptionsInit {
  /** 环境变量，默认为 env */
  env: 'test' | 'dev' | 'pre' | 'mock' | 'build' | false;
  /** 业务状态码的字段名，默认是 errno | err_no */
  errno: string;
  /** 未登录的 errno 值，默认为 30200 */
  noLoginErrno: number;
  /** 业务处理成功的 errno 值，默认为 0 */
  successError: number;
  /** 未登录时跳转到的 url ---> 线上环境 */
  loginUrlOnline: string;
  /** 未登录时跳转到的 url ---> 线下环境 */
  loginUrlOther: string;
  /** 是否从后端获取未登录要跳转的 url */
  getLoginUrlFromAE: boolean;
  /** 后端返回未登录要跳转 url 的字段名，默认为 login_url */
  loginFieldFromAE: string;
}

/**
 * 对外暴露的 umi-request 二次封装方法
 * @param env 当前运行环境
 * @param extendOption 自定义 extend 拓展
 */
const packRequest = (extendOption: Partial<ExtendOption>) => {
  /** 配置信息 */
  const options: ExtendOption = {
    env: 'dev',
    loginFieldFromAE: 'login_url',
    noLoginErrno: 30200,
    successError: 0,
    getLoginUrlFromAE: false,
    loginUrlOnline: '',
    loginUrlOther: '',
    errno: 'errno',
    ...extendOption,
  };

  /** 对外输出的请求方法 */
  const request = extend({
    credentials: 'include', // 默认请求是否带上cookie
    errorHandler,
    ...extendOption,
  });

  request.use(async (ctx, next) => {
    await next();

    /** 后端返回数据 */
    const { res } = ctx;

    /** 业务状态码 */
    const errno = +[res[options.errno], res.error_no].filter(v => isEmpty(v));

    /** 业务错误状态信息 */
    const errmsg = res.errmsg || res.error_msg || '';

    switch (errno) {
      /** 业务状态成功 */
      case options.successError: {
        ctx.res = res.result || res.data;
        break;
      }

      /** 未登录 */
      case options.noLoginErrno: {
        /** 去登录的 url */
        let loginUrl = '';

        if (options.getLoginUrlFromAE) {
          loginUrl = (res.result || res.data)[options.loginFieldFromAE];
        } else {
          loginUrl =
            options.env === 'build'
              ? options.loginUrlOnline
              : options.loginUrlOther;
        }

        window.location.replace(loginUrl);

        remindError(errmsg);

        ctx.res = false;

        break;
      }

      /** 其他异常 case */
      default: {
        remindError(errmsg);

        ctx.res = false;

        break;
      }
    }
  });

  return request;
};

export default packRequest;
