# Group 列表视图

----

`Group` 是一个特殊的表单组件，用于将信息以列表的结构显示在页面上，是小程序中最常用的内容结构。

列表视图由多个 section 组成，每个 section 包括 `group-title` 以及 `group-item` 。

## 基本用法

:::demo
```html
<group title="列表视图">
  <group-item title="标题文字" value="说明文字"></group-item>
  <group-item title="标题文字" value="说明文字"></group-item>
</group>
```
:::

## 带图标的列表项

:::demo
```html
<group>
  <group-item title="标题文字" value="说明文字" icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="></group-item>
  <group-item title="标题文字" value="说明文字" icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="></group-item>
</group>
```
:::

## 带跳转的列表项

:::demo
```html
<group>
  <group-item title="标题文字" value="说明文字" :show-access="true"></group-item>
  <group-item title="标题文字" value="说明文字" :show-access="true"></group-item>
</group>
```
:::

## 显示超链接样式

:::demo
```html
<group>
  <group-item title="标题文字" :show-access="true" :is-link="true" :intent="true"></group-item>
  <group-item title="标题文字" :show-access="true" :is-link="true" :intent="true"></group-item>
</group>
```
:::

## API

### group 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 头部标题 | String | - | - |
| footer-title | 底部标题 | String | - | - |
| gutter | 设定 `group` 的上边距(px)，仅适用于没有标题时 | Number | - | - |
| label-width | 为子元素设定统一 `label` 宽度(px) | Number | - | - |
| label-margin | 为子元素设定统一右边距(px) | Number | - | - |
| label-align | 为子元素设定统一对齐方式 | String | - | - |

### group-item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| icon | 列表项图标 | String | - | - |
| title | 列表项标题 | String | - | - |
| value | 列表项说明 | String | - | - |
| intent | 列表项之间的分割线不显示缩进 | Boolean | - | - |
| is-link | 列表项显示为超链接样式 | Boolean | - | - |
| show-access | 列表项右侧显示一个右箭头 | Boolean | - | - |

<script>
  import Group from '../../packages/group/group'
  import GroupItem from '../../packages/group/group-item'
  import GroupTitle from '../../packages/group/group-title'

  export default {
    data () {
      return {}
    },
    components: {
      Group,
      GroupItem,
      GroupTitle
    }
  }
</script>
