# Price 价格

----

用于格式化和显示货币数字。

## 基本用法

:::demo
```html

```
:::

## 删除状态

:::demo
```html

```
:::

## 小数位数

:::demo
```html

```
:::

## 价格取整

:::demo
```html

```
:::

## 小数字号

:::demo
```html

```
:::

## 价格符号居下

:::demo
```html

```
:::

## 价格符号居上

:::demo
```html

```
:::

## 设置货币符号

:::demo
```html

```
:::

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 价格数值，优先级高于标签内嵌套值 | Number | - | - |
| symbol | 货币符号 | String | - | `￥` |
| status | 显示状态，设置为 `del` 显示删除状态 | String | - | - |
| decimal | 小数部分显示规则：`Number` : 保留小数位数；<br />`none` : 不显示小数部分；`small` : 小数字号缩小 | Number / String | - | `2` |
| color | 文字颜色，可继承父元素 | String | - | #999 |

<style lang="scss" scoped>

</style>

