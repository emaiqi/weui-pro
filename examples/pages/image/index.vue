<template>
  <view class="container">
    <head-view title="image" desc="图片"></head-view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">Local Image</view>
        <view class="page-section-ctn">
          <image class="image" src="/static/image/1.jpg"/>
        </view>
      </view>
      <view class="page-section page-section-gap">
        <view class="page-section-title">Internet Image</view>
        <view class="page-section-ctn">
          <image class="image" src="/static/image/2.jpg"/>
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
  .page-section-ctn {
    text-align: center;
  }

  .image {
    margin-top: 30rpx;
    width: 580rpx;
    height: 208rpx;
  }
</style>
