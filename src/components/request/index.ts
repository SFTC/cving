import { extend } from 'umi-request';
import { notification } from 'antd';

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

  notification.error({
    message: '接口报错',
    description: errorText,
  });

  return Promise.reject(new Error('网络异常'));
};

/** 环境变量 */
export type Env = 'test' | 'dev' | 'pre' | 'mock' | 'build' | false;

const packRequest = (env: Env) => {
  const request = extend({
    getResponse: true, // 获取源数据
    credentials: 'include', // 默认请求是否带上cookie
    errorHandler,
  });

  request.interceptors.response.use(response => {
    if (env === 'build') {
      return response;
    }
    return response;
  });

  return request;
};

export default packRequest;
