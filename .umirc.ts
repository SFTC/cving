import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'cving',
  base: '/cving',
  publicPath: '/cving/',
  favicon:
    'https://user-images.githubusercontent.com/19237129/93707435-289d0500-fb61-11ea-81a4-d2c90bd14065.png',
  logo:
    'https://user-images.githubusercontent.com/19237129/93707435-289d0500-fb61-11ea-81a4-d2c90bd14065.png',
  exportStatic: {},
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['src', 'docs', 'tools', 'demos'],
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '函数库',
      path: 'https://github.com/SFTC/better-js-lib',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/SFTC/cving',
    },
    {
      title: '更新日志',
      path: 'https://github.com/SFTC/cving/releases',
    },
  ],
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: false,
    baseSeparator: '-',
  },
  // more config: https://d.umijs.org/config
});
