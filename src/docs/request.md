---
title: request
nav:
  path: /components
group:
  path: /
  order: 3
---

# request

request 的诞生是为了解决实际项目中需要结合业务场景对 [umi-request](https://github.com/umijs/umi-request) 网络请求库进行一些能力拓展和逻辑处理，随着项目的增多，每个项目的配置其实都大同小异。所以我们考虑把一些通用的能力和逻辑处理封装起来，通过一些配置参数进行自定义处理以满足多种场景的需求。

## 基本使用

```tsx | pure
import { request } from 'cving';

const customRequest = request({
  prefix: '/api/v1',
  timeout: 1000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

customRequest
  .get('/user')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

<code src="./example/request/basic.tsx">
