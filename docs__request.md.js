(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{oI6W:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=t("0zqC"),o=t("ZpkN"),m=l.a.memo(t("Rsk4").default["request-get"].component),u=l.a.memo(t("Rsk4").default["request-post"].component),s=l.a.memo(t("Rsk4").default["request-option"].component),d=l.a.memo(t("Rsk4").default["request-statuserror"].component),E=l.a.memo(t("Rsk4").default["request-errnoerror"].component),i=l.a.memo(t("Rsk4").default["request-errmsgfield"].component),p=l.a.memo(t("Rsk4").default["request-errnofield"].component),h=l.a.memo(t("Rsk4").default["request-errnocustomsucc"].component),k=l.a.memo(t("Rsk4").default["request-nolgin"].component),g=l.a.memo(t("Rsk4").default["request-nologinfromae"].component),q=l.a.memo(t("Rsk4").default["request-nologinerrnocustom"].component),f=l.a.memo(t("Rsk4").default["request-getresponse"].component);n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"request"},l.a.createElement(r["AnchorLink"],{to:"#request","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"request"),l.a.createElement("p",null,"request \u7684\u8bde\u751f\u662f\u4e3a\u4e86\u89e3\u51b3\u5b9e\u9645\u9879\u76ee\u4e2d\u9700\u8981\u7ed3\u5408\u4e1a\u52a1\u573a\u666f\u5bf9 ",l.a.createElement(r["Link"],{to:"https://github.com/umijs/umi-request"},"umi-request")," \u7f51\u7edc\u8bf7\u6c42\u5e93\u8fdb\u884c\u4e00\u4e9b\u80fd\u529b\u62d3\u5c55\u548c\u903b\u8f91\u5904\u7406\uff0c\u968f\u7740\u9879\u76ee\u7684\u589e\u591a\uff0c\u6bcf\u4e2a\u9879\u76ee\u7684\u914d\u7f6e\u5176\u5b9e\u90fd\u5927\u540c\u5c0f\u5f02\u3002\u6240\u4ee5\u6211\u4eec\u8003\u8651\u628a\u4e00\u4e9b\u901a\u7528\u7684\u80fd\u529b\u548c\u903b\u8f91\u5904\u7406\u5c01\u88c5\u8d77\u6765\uff0c\u901a\u8fc7\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u5904\u7406\u4ee5\u6ee1\u8db3\u591a\u79cd\u573a\u666f\u7684\u9700\u6c42\u3002"),l.a.createElement("h2",{id:"\u5b89\u88c5\u548c\u521d\u59cb\u5316"},l.a.createElement(r["AnchorLink"],{to:"#\u5b89\u88c5\u548c\u521d\u59cb\u5316","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5b89\u88c5\u548c\u521d\u59cb\u5316"),l.a.createElement(o["a"],{code:"import { request } from 'cving';\n\n// \u521d\u59cb\u5316\nconst customRequest = request({\n  prefix: '/api/v1',\n  timeout: 1000,\n  headers: {\n    'Content-Type': 'multipart/form-data',\n  },\n});\n\n// get \u8bf7\u6c42\ncustomRequest\n  .get('/user', {\n    params: {\n      id: 1,\n    },\n  })\n  .then(function(response) {\n    console.log(response);\n  })\n  .catch(function(error) {\n    console.log(error);\n  });\n\n// post \u8bf7\u6c42\ncustomRequest\n  .post('/user', {\n    data: {\n      name: 'Mike',\n    },\n  })\n  .then(function(response) {\n    console.log(response);\n  })\n  .catch(function(error) {\n    console.log(error);\n  });\n",lang:"tsx"}),l.a.createElement("h2",{id:"\u7279\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u7279\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u7279\u6027"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u521d\u59cb\u5316\u540e\u8fd4\u56de\u4e00\u4e2a request \u5b9e\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528 umi-request \u7684\u6240\u6709\u529f\u80fd"),l.a.createElement("li",null,"\u5185\u90e8\u5904\u7406\u72b6\u6001\u54cd\u5e94\u7801\u975e ",l.a.createElement("code",null,"2xx")," \u7684\u60c5\u51b5"),l.a.createElement("li",null,"credentials \u914d\u7f6e\u9ed8\u8ba4\u4e3a ",l.a.createElement("code",null,"include"),"\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u8bf7\u6c42\u4f1a\u5e26\u4e0a cookie"),l.a.createElement("li",null,"\u5185\u90e8\u5904\u7406\u4e1a\u52a1\u72b6\u6001\u7801\uff0c\u5305\u542b\u6210\u529f\u548c\u672a\u767b\u5f55\u7684\u60c5\u51b5\u5224\u65ad")),l.a.createElement("h2",{id:"\u53c2\u6570\u914d\u7f6e"},l.a.createElement(r["AnchorLink"],{to:"#\u53c2\u6570\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u53c2\u6570\u914d\u7f6e"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u9ed8\u8ba4\u53ef\u63a5\u53d7\u6240\u6709 umi-request \u7684 extend options \u53c2\u6570 ",l.a.createElement(r["Link"],{to:"https://github.com/umijs/umi-request/blob/master/README_zh-CN.md#request-options-%E5%8F%82%E6%95%B0"},"\u70b9\u51fb\u67e5\u770b"))),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),l.a.createElement("th",null,"\u53ef\u9009\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"env"),l.a.createElement("td",null,"\u73af\u5883\u53d8\u91cf"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"'dev'")),l.a.createElement("td",null,l.a.createElement("code",null,"string"))),l.a.createElement("tr",null,l.a.createElement("td",null,"errno"),l.a.createElement("td",null,"\u4e1a\u52a1\u72b6\u6001\u7801\u7684\u5b57\u6bb5\u540d"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"errno")," | ",l.a.createElement("code",null,"err_no")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"errmsg"),l.a.createElement("td",null,"\u4e1a\u52a1\u72b6\u6001\u7801\u63cf\u8ff0\u6587\u6848\u7684\u5b57\u6bb5\u540d"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"errmsg")," | ",l.a.createElement("code",null,"err_msg")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"noLoginErrno"),l.a.createElement("td",null,"\u672a\u767b\u5f55\u7684 errno \u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"30200")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"successErrno"),l.a.createElement("td",null,"\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684 errno \u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"0")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"loginUrlOnline"),l.a.createElement("td",null,l.a.createElement("code",null,"env === 'build'"),"\uff0c\u672a\u767b\u5f55\u65f6\u8df3\u8f6c\u5230\u7684 url"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"''")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"loginUrlOther"),l.a.createElement("td",null,l.a.createElement("code",null,"env !== 'build'"),"\uff0c\u672a\u767b\u5f55\u65f6\u8df3\u8f6c\u5230\u7684 url"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"''")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"getLoginUrlFromAE"),l.a.createElement("td",null,"\u662f\u5426\u4ece\u540e\u7aef\u83b7\u53d6\u672a\u767b\u5f55\u8981\u8df3\u8f6c\u7684 url"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"loginFieldFromAE"),l.a.createElement("td",null,"\u540e\u7aef\u8fd4\u56de\u672a\u767b\u5f55\u8981\u8df3\u8f6c url \u7684\u5b57\u6bb5\u540d"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"login_url")),l.a.createElement("td",null,"--")))),l.a.createElement("h3",{id:"errno"},l.a.createElement(r["AnchorLink"],{to:"#errno","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"errno"),l.a.createElement("p",null,"errno \u662f\u9488\u5bf9\u4e1a\u52a1\u573a\u666f\u4e0b\u8fd4\u56de\u7684\u72b6\u6001\u7801\uff0c\u6807\u8bc6\u63a5\u53e3\u64cd\u4f5c\u72b6\u6001\u3002"),l.a.createElement("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f\u662f\u8fd9\u6837\u7684\uff1a"),l.a.createElement(o["a"],{code:'{\n  "errno": 0,\n  "errmsg": "success",\n  "result": {\n    "value": "this is a value"\n  }\n}\n',lang:"json"}),l.a.createElement("p",null,"\u9ed8\u8ba4\u662f\u83b7\u53d6\u540e\u7aef\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 ",l.a.createElement("code",null,"errno")," \u6216\u8005 ",l.a.createElement("code",null,"err_no")," \u5b57\u6bb5\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",l.a.createElement("code",null,"errno")," \u53c2\u6570\u6765\u83b7\u53d6\u6307\u5b9a\u5b57\u6bb5\uff0c\u6bd4\u5982\uff1a"),l.a.createElement(o["a"],{code:"const customRequest = request({\n  errno: 'ERRNO',\n});\n",lang:"jsx"}),l.a.createElement("p",null,"request \u4e2d\u9ed8\u8ba4 ",l.a.createElement("code",null,"errno === 0")," \u662f\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684\u6761\u4ef6\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u83b7\u53d6\u5230\u540e\u7aef\u8fd4\u56de\u7684 ",l.a.createElement("code",null,"data")," \u6216\u8005 ",l.a.createElement("code",null,"result"),"\uff0c\u800c ",l.a.createElement("code",null,"errno")," \u4e3a\u5176\u4ed6\u503c\u65f6\u5219\u89c6\u4e3a\u5f02\u5e38 case\uff0c\u4f7f\u7528\u8005\u83b7\u53d6\u5230\u7684 response \u662f ",l.a.createElement("code",null,"false"),"\uff0c\u540c\u65f6 request \u9ed8\u8ba4\u4f1a\u4f7f\u7528 antd \u7684 notification \u65b9\u6cd5\u5f39\u51fa\u9519\u8bef\u63d0\u793a\u6846\u3002\u56e0\u6b64\u4f7f\u7528\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5224\u65ad response \u662f\u5426\u4e3a ",l.a.createElement("code",null,"false")," \u6765\u5224\u65ad\u4e1a\u52a1\u5904\u7406\u662f\u5426\u6210\u529f\u3002"),l.a.createElement("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",l.a.createElement("code",null,"successErrno")," \u53c2\u6570\u6765\u6307\u5b9a\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684 ",l.a.createElement("code",null,"errno")," \u503c\uff0c\u6bd4\u5982\uff1a"),l.a.createElement(o["a"],{code:"const customRequest = request({\n  successErrno: 200,\n});\n",lang:"jsx"}),l.a.createElement("h3",{id:"env"},l.a.createElement(r["AnchorLink"],{to:"#env","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"env"),l.a.createElement("p",null,"env \u662f\u5f53\u524d\u9879\u76ee\u7684\u8fd0\u884c\u73af\u5883\uff0c\u6bd4\u5982\u5728\u7528 umi \u521b\u5efa\u7684\u9879\u76ee\u4e2d\u4e00\u822c\u8bbe\u7f6e\u4e3a ",l.a.createElement("code",null,"REACT_APP_ENV"),"\u3002"),l.a.createElement("h3",{id:"\u672a\u767b\u5f55\u903b\u8f91\u6821\u9a8c"},l.a.createElement(r["AnchorLink"],{to:"#\u672a\u767b\u5f55\u903b\u8f91\u6821\u9a8c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u672a\u767b\u5f55\u903b\u8f91\u6821\u9a8c"),l.a.createElement("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u672a\u767b\u5f55\u90fd\u662f\u540e\u7aef\u8fd4\u56de\u4e00\u4e2a\u7279\u6b8a\u7684 errno \u6807\u8bc6\uff0c\u7136\u540e\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u3002request \u4e2d\u9ed8\u8ba4\u672a\u767b\u5f55\u7684 errno \u662f 30200\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",l.a.createElement("code",null,"noLoginErrno")," \u53c2\u6570\u6765\u83b7\u53d6\u6307\u5b9a\u5b57\u6bb5\uff0c\u6bd4\u5982\uff1a"),l.a.createElement(o["a"],{code:"const customRequest = request({\n  noLoginErrno: -1,\n});\n",lang:"jsx"}),l.a.createElement("p",null,"\u5373\u5c06\u8df3\u8f6c\u7684\u767b\u5f55\u9875\u8def\u5f84\u9700\u8981\u8bbe\u7f6e request \u7684 ",l.a.createElement("code",null,"loginUrlOnline")," \u548c ",l.a.createElement("code",null,"loginUrlOther")," \u53c2\u6570\uff0c\u8fd9\u91cc\u4f1a\u533a\u522b\u4e0d\u540c\u7684 ",l.a.createElement("code",null,"env"),"\uff0c\u5f53 ",l.a.createElement("code",null,"env === 'build'"),"\u65f6\u4f1a\u8df3\u8f6c\u5230 ",l.a.createElement("code",null,"loginUrlOnline"),"\uff0c\u5176\u4ed6 ",l.a.createElement("code",null,"env")," \u4f1a\u8df3\u8f6c\u5230 ",l.a.createElement("code",null,"loginUrlOther"),"\u3002"),l.a.createElement("p",null,"\u5982\u679c\u767b\u5f55\u9875\u8def\u5f84\u662f\u540e\u7aef\u8fd4\u56de\u7684\uff0c\u90a3\u9996\u5148\u9700\u8981\u8bbe\u7f6e request \u7684 ",l.a.createElement("code",null,"getLoginUrlFromAE")," \u53c2\u6570\u4e3a ",l.a.createElement("code",null,"true"),"\u3002request \u5c31\u4f1a\u4ece\u540e\u7aef\u8fd4\u56de\u7684\u6570\u636e\u4e2d\u83b7\u53d6\u767b\u5f55\u9875\u8def\u5f84\uff0c\u9ed8\u8ba4\u53d6 ",l.a.createElement("code",null,"login_url")," \u5b57\u6bb5\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",l.a.createElement("code",null,"loginFieldFromAE")," \u53c2\u6570\u6765\u83b7\u53d6\u6307\u5b9a\u5b57\u6bb5\uff0c\u6bd4\u5982\uff1a"),l.a.createElement(o["a"],{code:'const customRequest = request({\n  getLoginUrlFromAE: true,\n  loginFieldFromAE: \'loginUrl\',\n});\n\ncustomRequest(\'/user\');\n\n// \u540e\u7aef\u8fd4\u56de\u7ed3\u679c\uff1a\n// {\n//   "errno": 30200,\n//   "errmsg": "\u7528\u6237\u672a\u767b\u5f55",\n//   "result": {\n//     "loginUrl": "https://www.xxxx.com"\n//   }\n// }\n\n// \u9875\u9762\u4f1a\u76f4\u63a5\u8df3\u8f6c\u5230 https://www.xxxx.com\n',lang:"jsx"}),l.a.createElement("h3",{id:"\u83b7\u53d6\u539f\u59cb-response-\u5185\u5bb9"},l.a.createElement(r["AnchorLink"],{to:"#\u83b7\u53d6\u539f\u59cb-response-\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u83b7\u53d6\u539f\u59cb Response \u5185\u5bb9"),l.a.createElement("p",null,"\u6709\u4e00\u4e9b\u573a\u666f\u4e0b\u9700\u8981\u81ea\u5b9a\u4e49\u5904\u7406\u540e\u7aef\u8fd4\u56de\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e request \u7684 ",l.a.createElement("code",null,"getResponse")," \u53c2\u6570\u4e3a ",l.a.createElement("code",null,"true"),"\uff0c\u6765\u83b7\u53d6\u5230\u6e90 Response \u5bf9\u8c61\u53ca\u5b8c\u6574\u7684 data \u7ed3\u679c\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u540e\u5c31\u4e0d\u4f1a\u518d\u6267\u884c\u5bf9\u4e1a\u52a1\u72b6\u6001\u7801\u548c\u6821\u9a8c\u767b\u5f55\u7684\u903b\u8f91\u4e86\u3002\u4f7f\u7528\u65b9\u6cd5\u53ef\u53c2\u8003",l.a.createElement(r["AnchorLink"],{to:"#%E8%8E%B7%E5%8F%96%E6%BA%90-response-%E5%86%85%E5%AE%B9"},"\u793a\u4f8b\u4ee3\u7801"),"\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u4ee3\u7801\u793a\u4f8b"),l.a.createElement("p",null,"\u8fd9\u91cc\u5c06\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u5e38\u7528\u529f\u80fd\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u65b9\u4fbf\u5927\u5bb6\u76f4\u63a5\u62f7\u8d1d\u4f7f\u7528\u3002"),l.a.createElement("h3",{id:"get-\u8bf7\u6c42"},l.a.createElement(r["AnchorLink"],{to:"#get-\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"GET \u8bf7\u6c42")),l.a.createElement(c["default"],t("Rsk4").default["request-get"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"post-\u8bf7\u6c42"},l.a.createElement(r["AnchorLink"],{to:"#post-\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"POST \u8bf7\u6c42")),l.a.createElement(c["default"],t("Rsk4").default["request-post"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"option-\u914d\u7f6e"},l.a.createElement(r["AnchorLink"],{to:"#option-\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"option \u914d\u7f6e")),l.a.createElement(c["default"],t("Rsk4").default["request-option"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u54cd\u5e94\u72b6\u6001\u7801\u975e-2xx"},l.a.createElement(r["AnchorLink"],{to:"#\u54cd\u5e94\u72b6\u6001\u7801\u975e-2xx","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u54cd\u5e94\u72b6\u6001\u7801\u975e 2xx")),l.a.createElement(c["default"],t("Rsk4").default["request-statuserror"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u8fd4\u56de\u975e\u6210\u529f\u7684\u4e1a\u52a1\u72b6\u6001\u7801"},l.a.createElement(r["AnchorLink"],{to:"#\u8fd4\u56de\u975e\u6210\u529f\u7684\u4e1a\u52a1\u72b6\u6001\u7801","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u8fd4\u56de\u975e\u6210\u529f\u7684\u4e1a\u52a1\u72b6\u6001\u7801")),l.a.createElement(c["default"],t("Rsk4").default["request-errnoerror"].previewerProps,l.a.createElement(E,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u63cf\u8ff0\u4fe1\u606f\u5b57\u6bb5\u540d"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u63cf\u8ff0\u4fe1\u606f\u5b57\u6bb5\u540d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u63cf\u8ff0\u4fe1\u606f\u5b57\u6bb5\u540d")),l.a.createElement(c["default"],t("Rsk4").default["request-errmsgfield"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u5b57\u6bb5\u540d"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u5b57\u6bb5\u540d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u72b6\u6001\u7801\u5b57\u6bb5\u540d")),l.a.createElement(c["default"],t("Rsk4").default["request-errnofield"].previewerProps,l.a.createElement(p,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684\u72b6\u6001\u7801\u503c"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684\u72b6\u6001\u7801\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5904\u7406\u6210\u529f\u7684\u72b6\u6001\u7801\u503c")),l.a.createElement(c["default"],t("Rsk4").default["request-errnocustomsucc"].previewerProps,l.a.createElement(h,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u672a\u767b\u5f55"},l.a.createElement(r["AnchorLink"],{to:"#\u672a\u767b\u5f55","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u672a\u767b\u5f55")),l.a.createElement(c["default"],t("Rsk4").default["request-nolgin"].previewerProps,l.a.createElement(k,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u4ece\u540e\u7aef\u83b7\u53d6\u767b\u5f55\u8981\u8df3\u8f6c\u7684-url"},l.a.createElement(r["AnchorLink"],{to:"#\u4ece\u540e\u7aef\u83b7\u53d6\u767b\u5f55\u8981\u8df3\u8f6c\u7684-url","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u4ece\u540e\u7aef\u83b7\u53d6\u767b\u5f55\u8981\u8df3\u8f6c\u7684 url")),l.a.createElement(c["default"],t("Rsk4").default["request-nologinfromae"].previewerProps,l.a.createElement(g,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u672a\u767b\u5f55\u7684-errno-\u503c"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u672a\u767b\u5f55\u7684-errno-\u503c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u81ea\u5b9a\u4e49\u672a\u767b\u5f55\u7684 errno \u503c")),l.a.createElement(c["default"],t("Rsk4").default["request-nologinerrnocustom"].previewerProps,l.a.createElement(q,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u83b7\u53d6\u6e90-response-\u5185\u5bb9"},l.a.createElement(r["AnchorLink"],{to:"#\u83b7\u53d6\u6e90-response-\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u83b7\u53d6\u6e90 response \u5185\u5bb9")),l.a.createElement(c["default"],t("Rsk4").default["request-getresponse"].previewerProps,l.a.createElement(f,null))))}}}]);