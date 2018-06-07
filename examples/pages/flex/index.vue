<template>
  <view class="container">
    <head-view title="flex" desc="弹性布局"></head-view>
    <view class="page-body">
      <view class="page-section">
        <view class="weui-flex">
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        </view>
        <view class="weui-flex">
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        </view>
        <view class="weui-flex">
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        </view>
        <view class="weui-flex">
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        </view>
        <view class="weui-flex">
          <view><view class="placeholder">weui</view></view>
          <view class="weui-flex__item"><view class="placeholder">weui</view></view>
          <view><view class="placeholder">weui</view></view>
        </view>
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
  .placeholder {
    margin: 5px;
    padding: 0 10px;
    background-color: #EBEBEB;
    height: 2.3em;
    line-height: 2.3em;
    text-align: center;
    color: #CFCFCF;
  }
</style>
