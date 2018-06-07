<template>
  <view class="container">
    <head-view title="scroll-view" desc="可滚动视图区域"></head-view>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>Vertical Scroll\n纵向滚动</text>
        </view>
        <view class="page-section-spacing">
          <scroll-view scroll-y="true" style="height: 300rpx;" @scrolltoupper="upper" @scrolltolower="lower"
                       @scroll="scroll">
            <view id="demo1" class="scroll-view-item demo-text-a"></view>
            <view id="demo2" class="scroll-view-item demo-text-b"></view>
            <view id="demo3" class="scroll-view-item demo-text-c"></view>
          </scroll-view>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>Horizontal Scroll\n横向滚动</text>
        </view>
        <view class="page-section-spacing">
          <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" style="width: 100%">
            <view id="demo1" class="scroll-view-item_H demo-text-a"></view>
            <view id="demo2" class="scroll-view-item_H demo-text-b"></view>
            <view id="demo3" class="scroll-view-item_H demo-text-c"></view>
          </scroll-view>
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

    methods: {
      upper (e) {
        console.log(e)
      },
      lower (e) {
        console.log(e)
      },
      scroll (e) {
        console.log(e)
      }
    },

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
  .page-section-spacing {
    margin-top: 60rpx;
  }

  .scroll-view_H {
    white-space: nowrap;
  }

  .scroll-view-item {
    height: 300rpx;
  }

  .scroll-view-item_H {
    display: inline-block;
    width: 100%;
    height: 300rpx;
  }
</style>
