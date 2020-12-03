---
title: Select
order: 6
nav:
  path: /demos
group:
  path: /
---

# Select

## 基本使用

<code
  title="select 的基本使用" 
  src="../select/basic.tsx"  
  thumbnail="https://user-images.githubusercontent.com/13635964/101019448-f6b80e00-35a7-11eb-89cf-806ed99a76cd.png"
  tags='["Select"]'
  description="select 的基本使用" />

## 本地搜索

<code
  title="select本地搜索"  
  src="../select/basicSearch.tsx"  
  thumbnail="https://user-images.githubusercontent.com/13635964/101019448-f6b80e00-35a7-11eb-89cf-806ed99a76cd.png"
  tags='["Select"]'
  description="默认的 filter 搜索是按 option 的 value 属性进行索引的，常用的场景通常是通过 Option 显示的文字去查找，此时需要定义 Select 的 filterOption 回调方法，在内部去处理查找逻辑" />

## 远程搜索

<code 
  title="select远程搜索"  
  src="../select/remote.tsx"
  thumbnail="https://user-images.githubusercontent.com/13635964/101019731-56aeb480-35a8-11eb-8164-28587d1e6872.png"
  tags='["Select"]'
  description="Select 配合接口远程搜索，做了防抖操作和无数据是展示 loading，需要引入 lodash" />

## 共享数据源

<code 
  title="select共享数据源"  
  src="../select/shareSource.tsx"
  thumbnail="https://user-images.githubusercontent.com/13635964/101019930-a8573f00-35a8-11eb-98ad-7a837714e8e9.png"
  tags='["Select"]'
  description="多个 Select 框共享一个数据源,如果某个select选中了一条，则这条记录不在其他select框中展示" />
