(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"/zsF":function(e,r,t){"use strict";t("cIOH"),t("bE4E")},"2YZa":function(e,r,t){"use strict";t.d(r,"a",(function(){return o})),t.d(r,"d",(function(){return h})),t.d(r,"b",(function(){return w})),t.d(r,"c",(function(){return k}));t("+L6B");var n=t("2/Rp"),a=t("q1tI"),c=t.n(a),o=e=>{var r=e.title;return c.a.createElement(n["a"],{type:"primary"},r)},i=t("WmNS"),s=t.n(i),l=t("9og8"),u=t("k1fw"),p=(t("/xke"),t("TeRw")),d=t("io9h");function f(e){return!(null!==e&&void 0!==e&&""!==e)}var m=f,b=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u63a5\u53e3\u62a5\u9519";return p["a"].error({message:r,description:e})},g=e=>{var r={400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"},t=e.response,n="\u7f51\u7edc\u5f02\u5e38";return t&&t.status&&(n=r[t.status]||t.statusText),b(n),!1},v=e=>{var r=Object(u["a"])({env:"dev",loginFieldFromAE:"login_url",noLoginErrno:30200,successErrno:0,getLoginUrlFromAE:!1,loginUrlOnline:"",loginUrlOther:"",errno:"errno",errmsg:"errmsg"},e),t=Object(d["b"])(Object(u["a"])({credentials:"include",errorHandler:g},e));return t.use(function(){var e=Object(l["a"])(s.a.mark((function e(t,n){var a,c,o,i,l;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(a=t.res,c=t.req,!c.options.getResponse){e.next=5;break}return e.abrupt("return");case 5:o=+[a[r.errno],a.error_no].find(e=>!m(e)),i=[a[r.errmsg],a.err_msg].find(e=>!m(e))||"",e.t0=o,e.next=e.t0===r.successErrno?10:e.t0===r.noLoginErrno?12:18;break;case 10:return t.res=a.result||a.data,e.abrupt("break",21);case 12:return l="",l=r.getLoginUrlFromAE?(a.result||a.data)[r.loginFieldFromAE]:"build"===r.env?r.loginUrlOnline:r.loginUrlOther,window.location.replace(l),b(i),t.res=!1,e.abrupt("break",21);case 18:return b(i),t.res=!1,e.abrupt("break",21);case 21:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),t},h=v,E=(t("/zsF"),t("PArb")),w=e=>{var r=e.list,t=[];return r.filter(e=>e).forEach((e,r)=>{0!==r&&t.push(c.a.createElement(E["a"],{key:r,type:"vertical"})),t.push(e)}),c.a.createElement(c.a.Fragment,null,t)},O=t("TSYQ"),y=t.n(O),k=(t("tT2H"),e=>c.a.createElement("span",{className:"form"===e.type?y()("cving-table-search-required"):void 0},e.title))},PArb:function(e,r,t){"use strict";var n=t("pVnL"),a=t.n(n),c=t("lSNA"),o=t.n(c),i=t("q1tI"),s=t("TSYQ"),l=t.n(s),u=t("H84U"),p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},d=function(e){return i["createElement"](u["a"],null,(function(r){var t,n=r.getPrefixCls,c=r.direction,s=e.prefixCls,u=e.type,d=void 0===u?"horizontal":u,f=e.orientation,m=void 0===f?"center":f,b=e.className,g=e.children,v=e.dashed,h=e.plain,E=p(e,["prefixCls","type","orientation","className","children","dashed","plain"]),w=n("divider",s),O=m.length>0?"-".concat(m):m,y=!!g,k=l()(w,"".concat(w,"-").concat(d),(t={},o()(t,"".concat(w,"-with-text"),y),o()(t,"".concat(w,"-with-text").concat(O),y),o()(t,"".concat(w,"-dashed"),!!v),o()(t,"".concat(w,"-plain"),!!h),o()(t,"".concat(w,"-rtl"),"rtl"===c),t),b);return i["createElement"]("div",a()({className:k},E,{role:"separator"}),g&&i["createElement"]("span",{className:"".concat(w,"-inner-text")},g))}))};r["a"]=d},bE4E:function(e,r,t){},lweD:function(e,r,t){"use strict";t.r(r);t("+L6B");var n=t("2/Rp"),a=t("tJVT"),c=t("q1tI"),o=t.n(c),i=t("2YZa");r["default"]=()=>{var e=Object(i["d"])(),r=Object(c["useState"])(""),t=Object(a["a"])(r,2),s=t[0],l=t[1],u=()=>{e("https://www.fastmock.site/mock/996fa2d079bace69b60dc991084c9c04/cving/components/request/get",{params:{id:1}}).then(e=>{l(JSON.stringify(e))})};return o.a.createElement("div",null,o.a.createElement(n["a"],{type:"primary",onClick:u},"\u70b9\u51fb\u53d1\u9001get\u8bf7\u6c42"),o.a.createElement("div",null,"\u8bf7\u6c42\u7ed3\u679c\uff1a",s))}},tT2H:function(e,r,t){}}]);