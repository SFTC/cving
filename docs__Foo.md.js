(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26,27],{"/zsF":function(e,t,r){"use strict";r("cIOH"),r("bE4E")},"2YZa":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return E})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return y}));r("+L6B");var n=r("2/Rp"),a=r("q1tI"),o=r.n(a),i=e=>{var t=e.title;return o.a.createElement(n["a"],{type:"primary"},t)},c=r("WmNS"),l=r.n(c),s=r("9og8"),u=r("k1fw"),d=(r("/xke"),r("TeRw")),m=r("io9h");function p(e){return!(null!==e&&void 0!==e&&""!==e)}var f=p,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u63a5\u53e3\u62a5\u9519";return d["a"].error({message:t,description:e})},v=e=>{var t={400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"},r=e.response,n="\u7f51\u7edc\u5f02\u5e38";return r&&r.status&&(n=t[r.status]||r.statusText),g(n),!1},h=e=>{var t=Object(u["a"])({env:"dev",loginFieldFromAE:"login_url",noLoginErrno:30200,successErrno:0,getLoginUrlFromAE:!1,loginUrlOnline:"",loginUrlOther:"",errno:"errno",errmsg:"errmsg"},e),r=Object(m["b"])(Object(u["a"])({credentials:"include",errorHandler:v},e));return r.use(function(){var e=Object(s["a"])(l.a.mark((function e(r,n){var a,o,i,c,s;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(a=r.res,o=r.req,!o.options.getResponse){e.next=5;break}return e.abrupt("return");case 5:i=+[a[t.errno],a.error_no].find(e=>!f(e)),c=[a[t.errmsg],a.err_msg].find(e=>!f(e))||"",e.t0=i,e.next=e.t0===t.successErrno?10:e.t0===t.noLoginErrno?12:18;break;case 10:return r.res=a.result||a.data,e.abrupt("break",21);case 12:return s="",s=t.getLoginUrlFromAE?(a.result||a.data)[t.loginFieldFromAE]:"build"===t.env?t.loginUrlOnline:t.loginUrlOther,window.location.replace(s),g(c),r.res=!1,e.abrupt("break",21);case 18:return g(c),r.res=!1,e.abrupt("break",21);case 21:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),r},E=h,b=(r("/zsF"),r("PArb")),w=e=>{var t=e.list,r=[];return t.filter(e=>e).forEach((e,t)=>{0!==t&&r.push(o.a.createElement(b["a"],{key:t,type:"vertical"})),r.push(e)}),o.a.createElement(o.a.Fragment,null,r)},x=r("TSYQ"),O=r.n(x),y=(r("tT2H"),e=>o.a.createElement("span",{className:"form"===e.type?O()("cving-table-search-required"):void 0},e.title))},CN0S:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("2YZa");t["default"]=()=>a.a.createElement(o["a"],{title:"First Demo"})},"K+nK":function(e,t){function r(e){return e&&e.__esModule?e:{default:e}}e.exports=r},KQwD:function(e,t,r){"use strict";r.r(t);var n=r("0Owb"),a=r("q1tI"),o=r.n(a),i=(r("B2uJ"),r("+su7"),r("qOys"),r("5Yjd")),c=r.n(i),l=o.a.memo((function(){var e=r("K+nK"),t=e(r("q1tI")),n=e(r("CN0S")),a=function(){return t.default.createElement(n.default,null)};return t["default"].createElement(a)}));t["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u57fa\u672c\u4f7f\u7528"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u4f7f\u7528"},o.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528")),o.a.createElement(c.a,Object(n["a"])({source:{tsx:"import React from 'react';\nimport { Foo } from 'cving';\n\nexport default () => <Foo title=\"First Demo\" />;\n",jsx:"import React from 'react';\nimport { Foo } from 'cving';\n\nexport default () => <Foo title=\"First Demo\" />;\n"}},{path:"/_demos/foo",CSSInDependencies:["cving/dist/cving.css"],dependencies:{cving:"0.1.1"},files:{}}),o.a.createElement(l,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("p",null,"More skills for writing demo: ",o.a.createElement("a",{href:"https://d.umijs.org/guide/demo-principle",target:"_blank",rel:"noopener noreferrer"},"https://d.umijs.org/guide/demo-principle",o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},o.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),o.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))))}},PArb:function(e,t,r){"use strict";var n=r("pVnL"),a=r.n(n),o=r("lSNA"),i=r.n(o),c=r("q1tI"),l=r("TSYQ"),s=r.n(l),u=r("H84U"),d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},m=function(e){return c["createElement"](u["a"],null,(function(t){var r,n=t.getPrefixCls,o=t.direction,l=e.prefixCls,u=e.type,m=void 0===u?"horizontal":u,p=e.orientation,f=void 0===p?"center":p,g=e.className,v=e.children,h=e.dashed,E=e.plain,b=d(e,["prefixCls","type","orientation","className","children","dashed","plain"]),w=n("divider",l),x=f.length>0?"-".concat(f):f,O=!!v,y=s()(w,"".concat(w,"-").concat(m),(r={},i()(r,"".concat(w,"-with-text"),O),i()(r,"".concat(w,"-with-text").concat(x),O),i()(r,"".concat(w,"-dashed"),!!h),i()(r,"".concat(w,"-plain"),!!E),i()(r,"".concat(w,"-rtl"),"rtl"===o),r),g);return c["createElement"]("div",a()({className:y},b,{role:"separator"}),v&&c["createElement"]("span",{className:"".concat(w,"-inner-text")},v))}))};t["a"]=m},bE4E:function(e,t,r){},tT2H:function(e,t,r){}}]);