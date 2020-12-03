---
title: FormSpan
order: 4
nav:
  path: /demos
group:
  path: /
---

## 一种解决 PM 只希望展示而 RD 却要求仍旧要提交的表单项展示组件

直接在 form.item 中嵌入该组件，实现使用 span 这种普通文本 dom 展示 disable 状态的信息，仍然可以实现数据提交，样式方面可以通过 className、style 自定义

## 基本使用

<code
  src="../formspan/demo.tsx"
  title="可以 submit 的 span"
  background="#f5f5f5"
  thumbnail="https://crm-1258916733.cos.ap-shanghai.myqcloud.com/4d/a7/242920b091d943f24afbd2cb320d01d2/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_1008d8e2-d3ad-4430-9d38-d349de2eabc8.png"
  tags='["formSpan"]'
  description="这是一个在form表单中只用来展示，不可修改，但可以提交的span"
/>
