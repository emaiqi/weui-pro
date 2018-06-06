# Tag 标签

----

用于标记和选择。

## 基本用法

基本标签的用法，可以通过设置 `closable` 属性变为可关闭标签。点击关闭按钮触发 `on-close` 事件，按钮不包含逻辑，如需删除 `tag`，请自行添加关闭逻辑。

:::demo
```html

```
:::

## 多彩标签

我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

:::demo
```html

```
:::

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 标签样式 | String | fill / ghost | ghost |
| size | 标签大小 | String | small / medium / large | medium |
| shape | 标签形状 | String | square / circle / fillet | square |
| fill-color | 标签颜色 | String | - | rgba(0,0,0,0) |
| font-color | 字体颜色 | String | - | - |

<style lang="scss" scoped>

</style>
