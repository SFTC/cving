---
title: vscode插件 atomic-css-snippets
order: 5
nav:
  path: /tools
group:
  path: /
---

## 快捷生成符合一定规则的原子 css 代码块

- 下载地址：[点击下载](https://marketplace.visualstudio.com/items?itemName=swh.atomic-css-snippets)

- 在 css 文件中输入以下快捷键，呼出对应的代码块，快捷生成符合一定规则的代码块；
- 该插件主要针对小程序类名对某些特殊符号不支持，重新定义了一套类名命名规则，统一规则后方便调用，更加语义化；
- 该插件目前仅支持 rpx 单位，主要用于小程序，后期迭代版本会考虑更多场景的支持；

| key     | 对应的代码块儿语义               |
| ------- | -------------------------------- |
| .w      | width: xx rpx;                   |
| .wp     | width: xx rpx;                   |
| .mw     | max-width: xx rpx;               |
| .mwp    | max-width: xx %;                 |
| .miw    | min-width: xx rpx;               |
| .miwp   | min-width: xx %;                 |
| .h      | height: xx rpx;                  |
| .mh     | max-heigh: xx rpx;               |
| .mih    | min-height: xx rpx;              |
| .t      | top: xx rpx;                     |
| .l      | left: xx rpx;                    |
| .r      | right: xx rpx;                   |
| .b      | bottom: xx rpx;                  |
| .zi     | z-index: xx;                     |
| .p      | padding: xx rpx;                 |
| .p2     | padding: xx xx;                  |
| .p3     | padding: xx xx xx;               |
| .p4     | padding: xx xx xx xx;            |
| .pt     | padding-top: xx rpx;             |
| .pl     | padding-left: xx rpx;            |
| .pr     | padding-right: xx rpx;           |
| .pb     | padding-bottom: xx rpx;          |
| .m      | margin: xx;                      |
| .m2     | margin: xx xx;                   |
| .m3     | margin: xx xx xx;                |
| .m4     | margin: xx xx xx xx;             |
| .mt     | margin-top: xx rpx;              |
| .ml     | margin-left: xx rpx;             |
| .mr     | margin-right: xx rpx;            |
| .mb     | margin-bottom: xx rpx;           |
| .m1a    | margin: xx auto;                 |
| .m2a    | margin: xx auto xx;              |
| .bds    | border: xx solid #color;         |
| .bds-l  | border-left: xx solid #color;    |
| .bds-r  | border-right: xx solid #color;   |
| .bds-l  | border-top: xx solid #color;     |
| .bds-l  | border-bottom: xx solid #color;  |
| .bdda   | border: xx dashed #color;        |
| .bdda-l | border-left: xx dashed #color;   |
| .bdda-r | border-right: xx dashed #color;  |
| .bdda-l | border-top: xx dashed #color;    |
| .bdda-l | border-bottom: xx dashed #color; |
| .bddo   | border: xx dotted #color;        |
| .bddo-l | border-left: xx dotted #color;   |
| .bddo-r | border-right: xx dotted #color;  |
| .bddo-l | border-top: xx dotted #color;    |
| .bddo-l | border-bottom: xx dotted #color; |
| .br     | border-radius: xx;               |
| .br2    | border-radius: xx xx;            |
| .br3    | border-radius: xx xx xx;         |
| .brp    | border-radius: xx %;             |
| ...     | ...                              |
