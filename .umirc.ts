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
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['src', 'docs', 'tools', 'demos'],
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/SFTC/cving',
    },
  ],
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  // more config: https://d.umijs.org/config
});
