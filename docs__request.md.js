(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{oI6W:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=t("dEAq"),c=t("0zqC"),s=t("ZpkN"),o=t("Rsk4").default["request-get"].component,i=t("Rsk4").default["request-post"].component,m=t("Rsk4").default["request-option"].component,d=t("Rsk4").default["request-statuserror"].component,u=t("Rsk4").default["request-errnoerror"].component,E=t("Rsk4").default["request-errmsgfield"].component,p=t("Rsk4").default["request-errnofield"].component,v=t("Rsk4").default["request-errnocustomsucc"].component,g=t("Rsk4").default["request-nolgin"].component,h=t("Rsk4").default["request-nologinfromae"].component,f=t("Rsk4").default["request-nologinerrnocustom"].component,k=t("Rsk4").default["request-getresponse"].component;n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"request"},r.a.createElement(l["AnchorLink"],{to:"#request","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"request"),r.a.createElement("p",null,"request \u7684\u8bde\u751f\u662f\u4e3a\u4e86\u89e3\u51b3\u5b9e\u9645\u9879\u76ee\u4e2d\u9700\u8981\u7ed3\u5408\u4e1a\u52a1\u573a\u666f\u5bf9 ",r.a.createElement(l["Link"],{to:"https://github.com/umijs/umi-request"},"umi-request")," \u7f51\u7edc\u8bf7\u6c42\u5e93\u8fdb\u884c\u4e00\u4e9b\u80fd\u529b\u62d3\u5c55\u548c\u903b\u8f91\u5904\u7406\uff0c\u968f\u7740\u9879\u76ee\u7684\u589e\u591a\uff0c\u6bcf\u4e2a\u9879\u76ee\u7684\u914d\u7f6e\u5176\u5b9e\u90fd\u5927\u540c\u5c0f\u5f02\u3002\u6240\u4ee5\u6211\u4eec\u8003\u8651\u628a\u4e00\u4e9b\u901a\u7528\u7684\u80fd\u529b\u548c\u903b\u8f91\u5904\u7406\u5c01\u88c5\u8d77\u6765\uff0c\u901a\u8fc7\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u5904\u7406\u4ee5\u6ee1\u8db3\u591a\u79cd\u573a\u666f\u7684\u9700\u6c42\u3002"),r.a.createElement("h2",{id:"\u5b89\u88c5\u548c\u521d\u59cb\u5316"},r.a.createElement(l["AnchorLink"],{to:"#\u5b89\u88c5\u548c\u521d\u59cb\u5316","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u5b89\u88c5\u548c\u521d\u59cb\u5316"),r.a.createElement(s["a"],{code:"import { request } from 'cving';\n\n// \u521d\u59cb\u5316\nconst customRequest = request({\n  prefix: '/api/v1',\n  timeout: 1000,\n  headers: {\n    'Content-Type': 'multipart/form-data',\n  },\n});\n\n// get \u8bf7\u6c42\ncustomRequest\n  .get('/user', {\n    params: {\n      id: 1,\n    },\n  })\n  .then(function(response) {\n    console.log(response);\n  })\n  .catch(function(error) {\n    console.log(error);\n  });\n\n// post \u8bf7\u6c42\ncustomRequest\n  .post('/user', {\n    data: {\n      name: 'Mike',\n    },\n  })\n  .then(function(response) {\n    console.log(response);\n  })\n  .catch(function(error) {\n    console.log(error);\n  });\n",lang:"tsx"}),r.a.createElement("h2",{id:"\u7279\u6027"},r.a.createElement(l["AnchorLink"],{to:"#\u7279\u6027","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u7279\u6027"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u521d\u59cb\u5316\u540e\u8fd4\u56de\u4e00\u4e2a request \u5b9e\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528 umi-request \u7684\u6240\u6709\u529f\u80fd"),r.a.createElement("li",null,"\u5185\u90e8\u5904\u7406\u72b6\u6001\u54cd\u5e94\u7801\u975e ",r.a.createElement("code",null,"2xx")," \u7684\u60c5\u51b5"),r.a.createElement("li",null,"credentials \u914d\u7f6e\u9ed8\u8ba4\u4e3a ",r.a.createElement("code",null,"include"),"\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u8bf7\u6c42\u4f1a\u5e26\u4e0a cookie"),r.a.createElement("li",null,"\u5185\u90e8\u5904\u7406\u4e1a\u52a1\u72b6\u6001\u7801\uff0c\u5305\u542b\u6210\u529f\u548c\u672a\u767b\u5f55\u7684\u60c5\u51b5\u5224\u65ad")),r.a.createElement("h2",{id:"\u53c2\u6570\u914d\u7f6e"},r.a.createElement(l["AnchorLink"],{to:"#\u53c2\u6570\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u53c2\u6570\u914d\u7f6e"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u9ed8\u8ba4\u53ef\u63a5\u53d7\u6240\u6709 umi-request \u7684 extend options \u53c2\u6570 ",r.a.createElement(l["Link"],{to:"https://github.com/umijs/umi-request/blob/master/README_zh-CN.md#request-options-%E5%8F%82%E6%95%B0"},"\u70b9\u51fb\u67e5\u770b"))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),r.a.createElement("th",null,"\u53ef\u9009\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"env"),r.a.createElement("td",null,"\u73af\u5883\u53d8\u91cf"),r.a.createElement("td",null,r.a.createElement("code",null,"string")),r.a.createElement("td",null,r.a.createElement("code",null,"'dev'")),r.a.createElement("td",null,r.a.createElement("code",null,"string"))),r.a.createElement("tr",null,r.a.createElement("td",null,"errno"),r.a.createElement("td",null,"\u4e1a\u52a1\u72b6\u6001\u7801\u7684\u5b57\u6bb5\u540d"),r.a.createElement("td",null,r.a.createElement("code",null,"string")),r.a.createElement("td",null,r.a.createElement("code",null,"errno")," | ",r.a.createElement("code",null,"err_no")),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"errmsg"),r.a.createElement("td",null,"\u4e1a\u52a1\u72b6\u6001\u7801\u63cf\u8ff0\u6587\u6848\u7684\u5b57\u6bb5\u540d"),r.a.createElement("td",null,r.a.createElement("code",null,"string")),r.a.createElement("td",null,r.a.createElement("code",null,"errmsg")," | ",r.a.createElement("code",null,"err_msg")),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"noLoginErrno"),r.a.createElement("td",null,"\u672a\u767b\u5f55\u7684 errno \u503c"),r.a.createElement("td",null,r.a.createElement("code",null,"number")),r.a.createElement("td",null,r.a.createElement("code",null,"30200")),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"successErrno"),r.a.createElement("td",null,"\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684 errno \u503c"),r.a.createElement("td",null,r.a.createElement("code",null,"number")),r.a.createElement("td",null,r.a.createElement("code",null,"0")),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"loginUrlOnline"),r.a.createElement("td",null,r.a.createElement("code",null,"env === 'build'"),"\uff0c\u672a\u767b\u5f55\u65f6\u8df3\u8f6c\u5230\u7684 url"),r.a.createElement("td",null,r.a.createElement("code",null,"string")),r.a.createElement("td",null,r.a.createElement("code",null,"''")),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"loginUrlOther"),r.a.createElement("td",null,r.a.createElement("code",null,"env !== 'build'"),"\uff0c\u672a\u767b\u5f55\u65f6\u8df3\u8f6c\u5230\u7684 url"),r.a.createElement("td",null,r.a.createElement("code",null,"string")),r.a.createElement("td",null,r.a.createElement("code",null,"''")),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"getLoginUrlFromAE"),r.a.createElement("td",null,"\u662f\u5426\u4ece\u540e\u7aef\u83b7\u53d6\u672a\u767b\u5f55\u8981\u8df3\u8f6c\u7684 url"),r.a.createElement("td",null,r.a.createElement("code",null,"boolean")),r.a.createElement("td",null,r.a.createElement("code",null,"false")),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"loginFieldFromAE"),r.a.createElement("td",null,"\u540e\u7aef\u8fd4\u56de\u672a\u767b\u5f55\u8981\u8df3\u8f6c url \u7684\u5b57\u6bb5\u540d"),r.a.createElement("td",null,r.a.createElement("code",null,"string")),r.a.createElement("td",null,r.a.createElement("code",null,"login_url")),r.a.createElement("td",null,"--")))),r.a.createElement("h3",{id:"errno"},r.a.createElement(l["AnchorLink"],{to:"#errno","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"errno"),r.a.createElement("p",null,"errno \u662f\u9488\u5bf9\u4e1a\u52a1\u573a\u666f\u4e0b\u8fd4\u56de\u7684\u72b6\u6001\u7801\uff0c\u6807\u8bc6\u63a5\u53e3\u64cd\u4f5c\u72b6\u6001\u3002"),r.a.createElement("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f\u662f\u8fd9\u6837\u7684\uff1a"),r.a.createElement(s["a"],{code:'{\n  "errno": 0,\n  "errmsg": "success",\n  "result": {\n    "value": "this is a value"\n  }\n}\n',lang:"json"}),r.a.createElement("p",null,"\u9ed8\u8ba4\u662f\u83b7\u53d6\u540e\u7aef\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 ",r.a.createElement("code",null,"errno")," \u6216\u8005 ",r.a.createElement("code",null,"err_no")," \u5b57\u6bb5\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",r.a.createElement("code",null,"errno")," \u53c2\u6570\u6765\u83b7\u53d6\u6307\u5b9a\u5b57\u6bb5\uff0c\u6bd4\u5982\uff1a"),r.a.createElement(s["a"],{code:"const customRequest = request({\n  errno: 'ERRNO',\n});\n",lang:"jsx"}),r.a.createElement("p",null,"request \u4e2d\u9ed8\u8ba4 ",r.a.createElement("code",null,"errno === 0")," \u662f\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684\u6761\u4ef6\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u83b7\u53d6\u5230\u540e\u7aef\u8fd4\u56de\u7684 ",r.a.createElement("code",null,"data")," \u6216\u8005 ",r.a.createElement("code",null,"result"),"\uff0c\u800c ",r.a.createElement("code",null,"errno")," \u4e3a\u5176\u4ed6\u503c\u65f6\u5219\u89c6\u4e3a\u5f02\u5e38 case\uff0c\u4f7f\u7528\u8005\u83b7\u53d6\u5230\u7684 response \u662f ",r.a.createElement("code",null,"false"),"\uff0c\u540c\u65f6 request \u9ed8\u8ba4\u4f1a\u4f7f\u7528 antd \u7684 notification \u65b9\u6cd5\u5f39\u51fa\u9519\u8bef\u63d0\u793a\u6846\u3002\u56e0\u6b64\u4f7f\u7528\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5224\u65ad response \u662f\u5426\u4e3a ",r.a.createElement("code",null,"false")," \u6765\u5224\u65ad\u4e1a\u52a1\u5904\u7406\u662f\u5426\u6210\u529f\u3002"),r.a.createElement("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",r.a.createElement("code",null,"successErrno")," \u53c2\u6570\u6765\u6307\u5b9a\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684 ",r.a.createElement("code",null,"errno")," \u503c\uff0c\u6bd4\u5982\uff1a"),r.a.createElement(s["a"],{code:"const customRequest = request({\n  successErrno: 200,\n});\n",lang:"jsx"}),r.a.createElement("h3",{id:"env"},r.a.createElement(l["AnchorLink"],{to:"#env","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"env"),r.a.createElement("p",null,"env \u662f\u5f53\u524d\u9879\u76ee\u7684\u8fd0\u884c\u73af\u5883\uff0c\u6bd4\u5982\u5728\u7528 umi \u521b\u5efa\u7684\u9879\u76ee\u4e2d\u4e00\u822c\u8bbe\u7f6e\u4e3a ",r.a.createElement("code",null,"REACT_APP_ENV"),"\u3002"),r.a.createElement("h3",{id:"\u672a\u767b\u5f55\u903b\u8f91\u6821\u9a8c"},r.a.createElement(l["AnchorLink"],{to:"#\u672a\u767b\u5f55\u903b\u8f91\u6821\u9a8c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u672a\u767b\u5f55\u903b\u8f91\u6821\u9a8c"),r.a.createElement("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u672a\u767b\u5f55\u90fd\u662f\u540e\u7aef\u8fd4\u56de\u4e00\u4e2a\u7279\u6b8a\u7684 errno \u6807\u8bc6\uff0c\u7136\u540e\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u3002request \u4e2d\u9ed8\u8ba4\u672a\u767b\u5f55\u7684 errno \u662f 30200\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",r.a.createElement("code",null,"noLoginErrno")," \u53c2\u6570\u6765\u83b7\u53d6\u6307\u5b9a\u5b57\u6bb5\uff0c\u6bd4\u5982\uff1a"),r.a.createElement(s["a"],{code:"const customRequest = request({\n  noLoginErrno: -1,\n});\n",lang:"jsx"}),r.a.createElement("p",null,"\u5373\u5c06\u8df3\u8f6c\u7684\u767b\u5f55\u9875\u8def\u5f84\u9700\u8981\u8bbe\u7f6e request \u7684 ",r.a.createElement("code",null,"loginUrlOnline")," \u548c ",r.a.createElement("code",null,"loginUrlOther")," \u53c2\u6570\uff0c\u8fd9\u91cc\u4f1a\u533a\u522b\u4e0d\u540c\u7684 ",r.a.createElement("code",null,"env"),"\uff0c\u5f53 ",r.a.createElement("code",null,"env === 'build'"),"\u65f6\u4f1a\u8df3\u8f6c\u5230 ",r.a.createElement("code",null,"loginUrlOnline"),"\uff0c\u5176\u4ed6 ",r.a.createElement("code",null,"env")," \u4f1a\u8df3\u8f6c\u5230 ",r.a.createElement("code",null,"loginUrlOther"),"\u3002"),r.a.createElement("p",null,"\u5982\u679c\u767b\u5f55\u9875\u8def\u5f84\u662f\u540e\u7aef\u8fd4\u56de\u7684\uff0c\u90a3\u9996\u5148\u9700\u8981\u8bbe\u7f6e request \u7684 ",r.a.createElement("code",null,"getLoginUrlFromAE")," \u53c2\u6570\u4e3a ",r.a.createElement("code",null,"true"),"\u3002request \u5c31\u4f1a\u4ece\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\u4e2d\u83b7\u53d6\u767b\u5f55\u9875\u8def\u5f84\uff0c\u9ed8\u8ba4\u53d6 ",r.a.createElement("code",null,"login_url")," \u5b57\u6bb5\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",r.a.createElement("code",null,"loginFieldFromAE")," \u53c2\u6570\u6765\u83b7\u53d6\u6307\u5b9a\u5b57\u6bb5\uff0c\u6bd4\u5982\uff1a"),r.a.createElement(s["a"],{code:'const customRequest = request({\n  getLoginUrlFromAE: true,\n  loginFieldFromAE: \'loginUrl\',\n});\n\ncustomRequest(\'/user\');\n\n// \u540e\u7aef\u8fd4\u56de\u7ed3\u679c\uff1a\n// {\n//   "errno": 30200,\n//   "errmsg": "\u7528\u6237\u672a\u767b\u5f55",\n//   "result": {\n//     "loginUrl": "https://www.xxxx.com"\n//   }\n// }\n\n// \u9875\u9762\u4f1a\u76f4\u63a5\u8df3\u8f6c\u5230 https://www.xxxx.com\n',lang:"jsx"}),r.a.createElement("h3",{id:"\u83b7\u53d6\u539f\u59cb-response-\u5185\u5bb9"},r.a.createElement(l["AnchorLink"],{to:"#\u83b7\u53d6\u539f\u59cb-response-\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u83b7\u53d6\u539f\u59cb Response \u5185\u5bb9"),r.a.createElement("p",null,"\u6709\u4e00\u4e9b\u573a\u666f\u4e0b\u9700\u8981\u81ea\u5b9a\u4e49\u5904\u7406\u540e\u7aef\u8fd4\u56de\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",r.a.createElement("code",null,"getResponse")," \u53c2\u6570\u4e3a ",r.a.createElement("code",null,"true"),"\uff0c\u6765\u83b7\u53d6\u5230\u6e90 Response \u5bf9\u8c61\u53ca\u5b8c\u6574\u7684 data \u7ed3\u679c\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u540e\u5c31\u4e0d\u4f1a\u518d\u6267\u884c\u5bf9\u4e1a\u52a1\u72b6\u6001\u7801\u548c\u6821\u9a8c\u767b\u5f55\u7684\u903b\u8f91\u4e86\u3002\u4f7f\u7528\u65b9\u6cd5\u53ef\u53c2\u8003",r.a.createElement(l["AnchorLink"],{to:"#%E8%8E%B7%E5%8F%96%E6%BA%90-response-%E5%86%85%E5%AE%B9"},"\u793a\u4f8b\u4ee3\u7801"),"\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u4ee3\u7801\u793a\u4f8b"),r.a.createElement("p",null,"\u8fd9\u91cc\u5c06\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u5e38\u7528\u529f\u80fd\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u65b9\u4fbf\u5927\u5bb6\u76f4\u63a5\u62f7\u8d1d\u4f7f\u7528\u3002"),r.a.createElement("h3",{id:"get-\u8bf7\u6c42"},r.a.createElement(l["AnchorLink"],{to:"#get-\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"GET \u8bf7\u6c42")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request();\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/components/request/get',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001get\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-get"},r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"post-\u8bf7\u6c42"},r.a.createElement(l["AnchorLink"],{to:"#post-\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"POST \u8bf7\u6c42")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request();\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-post',\n      {\n        method: 'post',\n        data: {\n          id: 1,\n        },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001post\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-post"},r.a.createElement(i,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"option-\u914d\u7f6e"},r.a.createElement(l["AnchorLink"],{to:"#option-\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"option \u914d\u7f6e")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request({\n    env: 'dev',\n    prefix: 'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving',\n  });\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest('/request-get', {\n      params: { id: 1 },\n    }).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-option"},r.a.createElement(m,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u54cd\u5e94\u72b6\u6001\u7801\u975e-2xx"},r.a.createElement(l["AnchorLink"],{to:"#\u54cd\u5e94\u72b6\u6001\u7801\u975e-2xx","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u54cd\u5e94\u72b6\u6001\u7801\u975e 2xx")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request();\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-status-error',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-statuserror"},r.a.createElement(d,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u8fd4\u56de\u975e\u6210\u529f\u7684\u4e1a\u52a1\u72b6\u6001\u7801"},r.a.createElement(l["AnchorLink"],{to:"#\u8fd4\u56de\u975e\u6210\u529f\u7684\u4e1a\u52a1\u72b6\u6001\u7801","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u8fd4\u56de\u975e\u6210\u529f\u7684\u4e1a\u52a1\u72b6\u6001\u7801")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request();\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-errno-error',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-errnoerror"},r.a.createElement(u,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u63cf\u8ff0\u4fe1\u606f\u5b57\u6bb5\u540d"},r.a.createElement(l["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u63cf\u8ff0\u4fe1\u606f\u5b57\u6bb5\u540d","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u63cf\u8ff0\u4fe1\u606f\u5b57\u6bb5\u540d")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request({\n    errmsg: 'errno_msg',\n  });\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/request/errmsg-field',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-errmsgfield"},r.a.createElement(E,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u5b57\u6bb5\u540d"},r.a.createElement(l["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u5b57\u6bb5\u540d","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u5b57\u6bb5\u540d")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request({\n    errno: 'status_number',\n  });\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-errno-field',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-errnofield"},r.a.createElement(p,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684\u72b6\u6001\u7801\u503c"},r.a.createElement(l["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684\u72b6\u6001\u7801\u503c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684\u72b6\u6001\u7801\u503c")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request({\n    successErrno: 200,\n  });\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-errno-custom-succ',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-errnocustomsucc"},r.a.createElement(v,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u672a\u767b\u5f55"},r.a.createElement(l["AnchorLink"],{to:"#\u672a\u767b\u5f55","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u672a\u767b\u5f55")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request({\n    env: 'dev',\n    loginUrlOther: window.location.origin,\n  });\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-no-login',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-nolgin"},r.a.createElement(g,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u4ece\u540e\u7aef\u83b7\u53d6\u767b\u5f55\u8981\u8df3\u8f6c\u7684-url"},r.a.createElement(l["AnchorLink"],{to:"#\u4ece\u540e\u7aef\u83b7\u53d6\u767b\u5f55\u8981\u8df3\u8f6c\u7684-url","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u4ece\u540e\u7aef\u83b7\u53d6\u767b\u5f55\u8981\u8df3\u8f6c\u7684 url")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request({\n    env: 'dev',\n    getLoginUrlFromAE: true,\n  });\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-no-login',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-nologinfromae"},r.a.createElement(h,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u672a\u767b\u5f55\u7684-errno-\u503c"},r.a.createElement(l["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u672a\u767b\u5f55\u7684-errno-\u503c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u81ea\u5b9a\u4e49\u672a\u767b\u5f55\u7684 errno \u503c")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request({\n    env: 'dev',\n    loginUrlOther: window.location.origin,\n    noLoginErrno: -1,\n  });\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.easy-mock.com/mock/5f585176d5906660c22dab65/cving/request-no-login-custom-error',\n      {\n        params: { id: 1 },\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-nologinerrnocustom"},r.a.createElement(f,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u83b7\u53d6\u6e90-response-\u5185\u5bb9"},r.a.createElement(l["AnchorLink"],{to:"#\u83b7\u53d6\u6e90-response-\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"\u83b7\u53d6\u6e90 response \u5185\u5bb9")),r.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { request } from 'cving';\n\nexport default () => {\n  const customRequest = request();\n  const [data, setData] = useState<string>('');\n\n  const handleCLick = () => {\n    customRequest(\n      'https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/components/request/get',\n      {\n        params: { id: 1 },\n        getResponse: true,\n      },\n    ).then(res => {\n      setData(JSON.stringify(res));\n    });\n  };\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={handleCLick}>\n        \u70b9\u51fb\u53d1\u9001get\u8bf7\u6c42\n      </Button>\n      <div>\u8bf7\u6c42\u7ed3\u679c\uff1a{data}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.13.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.6.6",css:"antd/dist/antd.css"},cving:{version:"0.1.8"}},identifier:"request-getresponse"},r.a.createElement(k,null))))}}}]);