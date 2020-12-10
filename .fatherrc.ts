export default {
  entry: 'src/index.tsx',
  cjs: { type: 'babel', lazy: true },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
  ],
};
