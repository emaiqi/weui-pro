# Flex 弹性布局

----

## 基本用法

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

## 弹性网格

:::demo
```html
<flex wrap="wrap">
  <flex-item :span="4"><div class="placeholder">1/3</div></flex-item>
  <flex-item :span="8" :order="-1"><div class="placeholder">2/3</div></flex-item>

  <flex-item :span="6"><div class="placeholder">1/2</div></flex-item>
  <flex-item :span="4"><div class="placeholder">1/3</div></flex-item>
  <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>

  <flex-item :span="1/3"><div class="placeholder">1/3</div></flex-item>
  <flex-item :span="1/3"><div class="placeholder">1/3</div></flex-item>
  <flex-item :span="1/3"><div class="placeholder">1/3</div></flex-item>

  <flex-item :span="1/4"><div class="placeholder">1/4</div></flex-item>
  <flex-item :span="1/4"><div class="placeholder">1/4</div></flex-item>
  <flex-item><div class="placeholder">1/2</div></flex-item>
</flex>
```
:::

## API

### flex 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 间隙像素大小（px） | Number | - | 8 |
| justify | `flex` 的 `justify-content` 属性 | String | flex-start / flex-end / center / space-between / space-around / space-evenly | flex-start |
| align | `flex` 的 `align-items` 属性 | String | stretch / flex-start / center / flex-end / baseline | stretch |
| wrap | `flex` 的 `flex-wrap` 属性 | String | nowrap / wrap / wrap-reverse | nowrap |
| direction | `flex` 的 `flex-direction` 属性 | String | row / row-reverse / column / column-reverse | row |

### flex-item 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 占用宽度。如果不设置，所有 flex-item 平均分配 | Number | - | - |
| order | `flex` 的 `order` 属性 | Number | - | 0 |

**注意**：你的小程序要求兼容到iOS8以下版本，需要开启样式自动补全。开启样式自动补全，在“项目”—“项目设置”—勾选“上传代码时样式自动补全”。

**参考文档**

[小程序开发指南：Flex布局](https://developers.weixin.qq.com/ebook?action=get_post_info&token=935589521&volumn=1&lang=zh_CN&book=miniprogram&docid=00080e799303986b0086e605f5680a)

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
    background-color: #EBEBEB;
    height: 2.3em;
    line-height: 2.3em;
    text-align: center;
    color: #CFCFCF;
  }
</style>
