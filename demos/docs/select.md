---
title: Select
nav:
  path: /demos
group:
  path: /
  order: 2
---

## 按显示文字查找

默认的 filter 搜索是按 option 的 value 属性进行索引的，常用的场景通常是通过 Option 显示的文字去查找，此时需要定义 Select 的 filterOption 回调方法，在内部去处理查找逻辑

<code src="../select/basicSearch.tsx" />
