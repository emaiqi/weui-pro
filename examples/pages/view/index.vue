<template>
  <view class="container">
    <head-view title="view" desc="视图容器"></head-view>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>flex-direction: row\n横向布局</text>
        </view>
        <view class="page-section-spacing">
          <view class="flex-wrp" style="flex-direction:row;">
            <view class="flex-item demo-text-a"></view>
            <view class="flex-item demo-text-b"></view>
            <view class="flex-item demo-text-c"></view>
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>flex-direction: column\n纵向布局</text>
        </view>
        <view class="flex-wrp" style="flex-direction:column;">
          <view class="flex-item flex-item-V demo-text-a"></view>
          <view class="flex-item flex-item-V demo-text-b"></view>
          <view class="flex-item flex-item-V demo-text-c"></view>
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
  .flex-wrp {
    margin-top: 60rpx;
    display: flex;
  }

  .flex-item {
    width: 200rpx;
    height: 300rpx;
    font-size: 26rpx;
  }

  .flex-item-V {
    margin: 0 auto;
    width: 300rpx;
    height: 200rpx;
  }
</style>
