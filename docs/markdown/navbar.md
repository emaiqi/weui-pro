# Navbar 导航栏

----

自定义导航栏，只保留右上角胶囊状的按钮。

## 基本用法

:::demo
```html

```
:::

## 显示菜单选项

:::demo
```html

```
:::

## 显示返回文字

:::demo
```html

```
:::

## API

### navbar 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title-text | 导航栏标题，可使用 `navbar-title` 实现复杂样式 | String | - | - |
| text-style | 导航栏标题颜色 | String | black / white | white |
| show-back | 是否显示返回按钮 | Boolean | - | true |
| back-text | 返回文字，为空时不显示 | String | - | - |
| prevent-back | 是否阻止默认的堆栈返回 | Boolean | - | false |
| show-loading | 是否显示导航条加载动画| Boolean | - | true |
| navigate | 自定义返回页面路径 | Object | - | - |
