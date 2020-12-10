---
title: FormSpan
order: 4
nav:
  path: /components
group:
  path: /
---

## 一种解决 PM 只希望展示而 RD 却要求仍旧要提交的表单项展示组件

直接在 form.item 中嵌入该组件，实现使用 span 这种普通文本 dom 展示 disable 状态的信息，仍然可以实现数据提交，样式方面可以通过 className、style 自定义

## 基本使用

<code
  src="./demos/formspan/demo.tsx"
  title="可以 submit 的 span"
  background="#f5f5f5"
  thumbnail="https://user-images.githubusercontent.com/12001781/100983285-16d5d600-3584-11eb-9ccf-a825d6d400af.png"
  tags='["formSpan"]'
  description="这是一个在form表单中只用来展示，不可修改，但可以提交的span"
/>
