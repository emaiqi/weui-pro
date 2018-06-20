# Flex 弹性布局

----

通过基础的 12 栅格，迅速简便地创建布局。

## 基本栅格

使用单一分栏创建基础的栅格布局。

:::demo
```html
<flex>
  <flex-item><div class="placeholder">weui</div></flex-item>
</flex>
<flex>
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
</flex>
<flex>
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
</flex>
<flex>
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
</flex>
```
:::

## 区块间隔

栅格常常需要和间隔进行配合，你可以使用 flex 的 gutter 属性，我们推荐使用 (8+8n)px 作为栅格间隔(n 是自然数)。

:::demo
```html
<flex :gutter="64">
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
  <flex-item><div class="placeholder">weui</div></flex-item>
</flex>
```
:::

## 混合布局

通过基础的 1/12 分栏任意扩展组合形成较为复杂的混合布局。

:::demo
```html
<flex wrap="wrap">
  <flex-item :span="8"><div class="placeholder">2/3</div></flex-item>
  <flex-item :span="4"><div class="placeholder">1/3</div></flex-item>

  <flex-item :span="4"><div class="placeholder">1/3</div></flex-item>
  <flex-item :span="4"><div class="placeholder">1/3</div></flex-item>
  <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>
  <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>

  <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>
  <flex-item :span="8"><div class="placeholder">2/3</div></flex-item>
  <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>
</flex>
```
:::

## API

### flex 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 区块间隔（px） | Number | - | 8 |
| wrap | `flex` 的 `flex-wrap` 属性 | String | nowrap / wrap / wrap-reverse | nowrap |
| align | `flex` 的 `align-items` 属性 | String | stretch / flex-start / center / flex-end / baseline | stretch |
| justify | `flex` 的 `justify-content` 属性 | String | flex-start / flex-end / center / space-between / space-around / space-evenly | flex-start |
| direction | `flex` 的 `flex-direction` 属性 | String | row / row-reverse / column / column-reverse | row |

### flex-item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 占用宽度。如果不设置，所有 flex-item 平均分配 | Number | - | - |
| order | `flex` 的 `order` 属性 | Number | - | 0 |

**注意**：你的小程序要求兼容到iOS8以下版本，需要开启样式自动补全。开启样式自动补全，在“项目”—“项目设置”—勾选“上传代码时样式自动补全”。

<script>
  import Flex from '../../packages/flex/flex'
  import FlexItem from '../../packages/flex/flex-item'
  
  export default {   
    methods: {},
  
    components: {
      Flex,
      FlexItem
    }
  }
</script>

<style scoped>
  .placeholder {
    margin: 5px;
    padding: 0 10px;
    border-radius: 4px;
    background-color: #EBEBEB;
    height: 2.3em;
    line-height: 2.3em;
    text-align: center;
    color: #CFCFCF;
  }
</style>
