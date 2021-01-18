---
title: request
toc: menu
order: 2
nav:
  path: /components
group:
  path: /
---

# request

request 的诞生是为了解决实际项目中需要结合业务场景对 [umi-request](https://github.com/umijs/umi-request) 网络请求库进行一些能力拓展和逻辑处理，随着项目的增多，每个项目的配置其实都大同小异。所以我们考虑把一些通用的能力和逻辑处理封装起来，通过一些配置参数进行自定义处理以满足多种场景的需求。

## 安装和初始化

```tsx | pure
import { request } from 'cving';

// 初始化
const customRequest = request({
  prefix: '/api/v1',
  timeout: 1000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// get 请求
customRequest
  .get('/user', {
    params: {
      id: 1,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// post 请求
customRequest
  .post('/user', {
    data: {
      name: 'Mike',
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 特性

1. 初始化后返回一个 request 实例，可以使用 umi-request 的所有功能
2. 内部处理状态响应码非 `2xx` 的情况
3. credentials 配置默认为 `include`，也就是默认请求会带上 cookie
4. 内部处理业务状态码，包含成功和未登录的情况判断

## 参数配置

**默认可接受所有 umi-request 的 extend options 参数 [点击查看](https://github.com/umijs/umi-request/blob/master/README_zh-CN.md#request-options-参数)**

| 参数              | 说明                                    | 类型      | 默认值                | 可选值   |
| ----------------- | --------------------------------------- | --------- | --------------------- | -------- | ------------------------------------------- |
| env               | 环境变量                                | `string`  | `'dev'`               | `string` | `'test'` \| `'dev'` \| `'mock'` \|`'build'` |
| errno             | 业务状态码的字段名                      | `string`  | `errno` \| `err_no`   | --       |
| errmsg            | 业务状态码描述文案的字段名              | `string`  | `errmsg` \| `err_msg` | --       |
| noLoginErrno      | 未登录的 errno 值                       | `number`  | `30200`               | --       |
| successErrno      | 业务处理成功的 errno 值                 | `number`  | `0`                   | --       |
| loginUrlOnline    | `env === 'build'`，未登录时跳转到的 url | `string`  | `''`                  | --       |
| loginUrlOther     | `env !== 'build'`，未登录时跳转到的 url | `string`  | `''`                  | --       |
| getLoginUrlFromAE | 是否从后端获取未登录要跳转的 url        | `boolean` | `false`               | --       |
| loginFieldFromAE  | 后端返回未登录要跳转 url 的字段名       | `string`  | `login_url`           | --       |

### errno

errno 是针对业务场景下返回的状态码，标识接口操作状态。

一般情况下，后端返回的数据格式是这样的：

```json
{
  "errno": 0,
  "errmsg": "success",
  "result": {
    "value": "this is a value"
  }
}
```

默认是获取后端返回结果中的 `errno` 或者 `err_no` 字段，我们也可以通过设置 request 的 `errno` 参数来获取指定字段，比如：

```jsx | pure
const customRequest = request({
  errno: 'ERRNO',
});
```

request 中默认 `errno === 0` 是业务处理成功的条件，使用者可以获取到后端返回的 `data` 或者 `result`，而 `errno` 为其他值时则视为异常 case，使用者获取到的 response 是 `false`，同时 request 默认会使用 antd 的 notification 方法弹出错误提示框。因此使用者也可以通过判断 response 是否为 `false` 来判断业务处理是否成功。

我们也可以通过设置 request 的 `successErrno` 参数来指定业务处理成功的 `errno` 值，比如：

```jsx | pure
const customRequest = request({
  successErrno: 200,
});
```

### env

env 是当前项目的运行环境，比如在用 umi 创建的项目中一般设置为 `REACT_APP_ENV`。

### 未登录逻辑校验

一般情况下，未登录都是后端返回一个特殊的 errno 标识，然后跳转到登录页。request 中默认未登录的 errno 是 30200，我们也可以通过设置 request 的 `noLoginErrno` 参数来获取指定字段，比如：

```jsx | pure
const customRequest = request({
  noLoginErrno: -1,
});
```

即将跳转的登录页路径需要设置 request 的 `loginUrlOnline` 和 `loginUrlOther` 参数，这里会区别不同的 `env`，当 `env === 'build'`时会跳转到 `loginUrlOnline`，其他 `env` 会跳转到 `loginUrlOther`。

如果登录页路径是后端返回的，那首先需要设置 request 的 `getLoginUrlFromAE` 参数为 `true`。request 就会从后端返回的数据中获取登录页路径，默认取 `login_url` 字段，我们也可以通过设置 request 的 `loginFieldFromAE` 参数来获取指定字段，比如：

```jsx | pure
const customRequest = request({
  getLoginUrlFromAE: true,
  loginFieldFromAE: 'loginUrl',
});

customRequest('/user');

// 后端返回结果：
// {
//   "errno": 30200,
//   "errmsg": "用户未登录",
//   "result": {
//     "loginUrl": "https://www.xxxx.com"
//   }
// }

// 页面会直接跳转到 https://www.xxxx.com
```

### 获取原始 Response 内容

有一些场景下需要自定义处理后端返回信息，可以通过设置 request 的 `getResponse` 参数为 `true`，来获取到源 Response 对象及完整的 data 结果。需要注意的是，这些设置后就不会再执行对业务状态码和校验登录的逻辑了。使用方法可参考[示例代码](#获取源-response-内容)。

## 代码示例

这里将会提供一些常用功能的代码示例，方便大家直接拷贝使用。

### GET 请求

<code src="./demos/request/get.tsx">

### POST 请求

<code src="./demos/request/post.tsx">

### option 配置

<code src="./demos/request/option.tsx">

### 响应状态码非 2xx

<code src="./demos/request/statusError.tsx">

### 返回非成功的业务状态码

<code src="./demos/request/errnoError.tsx">

### 自定义业务状态码描述信息字段名

<code src="./demos/request/errmsgField.tsx">

### 自定义业务状态码字段名

<code src="./demos/request/errnoField.tsx">

### 自定义业务处理成功的状态码值

<code src="./demos/request/errnoCustomSucc.tsx">

### 未登录

<code src="./demos/request/noLgin.tsx">

### 从后端获取登录要跳转的 url

<code src="./demos/request/noLoginFromAE.tsx">

### 自定义未登录的 errno 值

<code src="./demos/request/noLoginErrnoCustom.tsx">

### 获取源 response 内容

<code src="./demos/request/getResponse.tsx">
