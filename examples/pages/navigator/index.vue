<template>
  <view class="container">
    <head-view title="navigator" desc="页面链接"></head-view>
    <view class="page-body">
      <view class="btn-area">
        <navigator url="../navigate/navigate?title=navigate" hover-class="navigator-hover">
          <button type="default">跳转到新页面</button>
        </navigator>
        <navigator url="/pages/redirect/redirect?title=redirect" redirect hover-class="other-navigator-hover">
          <button type="default">在当前页打开</button>
        </navigator>
      </view>
    </view>
    <foot-view></foot-view>
  </view>
</template>

<script>
  import Header from '../../components/header'
  import Footer from '../../components/footer'

  export default {
    data () {
      return {}
    },

    methods: {},

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
  .navigator-hover button{
    background-color: #DEDEDE;
  }
  .other-navigator-hover button{
    background-color: #DEDEDE;
  }
</style>
