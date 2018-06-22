<template>
  <div class="weui-cell"  :class="{'weui-cell_access': showAccess, 'weui-cell_link': isLink, 'weui-cell_intent': intent}">
    <div class="weui-cell__hd" v-if="icon">
      <img :src="icon" />
    </div>
    <div class="weui-cell__bd">
      <p>{{title}}</p>
    </div>
    <div class="weui-cell__ft" v-if="value || showAccess">
      {{value}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cell',
    props: {
      icon: String,
      title: [String, Number],
      value: [Number, String],
      intent: Boolean,
      isLink: Boolean,
      primary: Boolean,
      showAccess: Boolean
    }
  }
</script>

<style lang="less">
  .weui-cell_intent {
    &:before {
      left: 0;
    }
  }
</style>
