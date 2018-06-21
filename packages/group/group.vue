<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{title}}</div>
    <slot name="title"></slot>
    <div class="weui-cells">
      <slot name="after-title"></slot>
      <slot></slot>
    </div>
    <div class="weui-cells__title" v-if="footerTitle">{{footerTitle}}</div>
  </div>
</template>

<script>
  export default {
    name: 'group',
    props: {
      title: String,
      footerTitle: String,
      gutter: [Number, String],
      labelWidth: [Number, String],
      labelMargin: [Number, String],
      labelAlign: String
    }
  }
</script>
