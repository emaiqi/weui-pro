<template>
  <view class="container">
    <head-view title="grid" desc="九宫格"></head-view>
    <view class="weui-grids">
      <view class="weui-grid">
        <view class="weui-grid__icon">
          <image src="/static/image/icon_tabbar.png" alt=""></image>
        </view>
        <view class="weui-grid__label">Grid</view>
      </view>
      <view class="weui-grid">
        <view class="weui-grid__icon">
          <image src="/static/image/icon_tabbar.png" alt=""></image>
        </view>
        <view class="weui-grid__label">Grid</view>
      </view>
      <view class="weui-grid">
        <view class="weui-grid__icon">
          <image src="/static/image/icon_tabbar.png" alt=""></image>
        </view>
        <view class="weui-grid__label">Grid</view>
      </view>
      <view class="weui-grid">
        <view class="weui-grid__icon">
          <image src="/static/image/icon_tabbar.png" alt=""></image>
        </view>
        <view class="weui-grid__label">Grid</view>
      </view>
      <view class="weui-grid">
        <view class="weui-grid__icon">
          <image src="/static/image/icon_tabbar.png" alt=""></image>
        </view>
        <view class="weui-grid__label">Grid</view>
      </view>
      <view class="weui-grid">
        <view class="weui-grid__icon">
          <image src="/static/image/icon_tabbar.png" alt=""></image>
        </view>
        <view class="weui-grid__label">Grid</view>
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
      headView: Header,
      footView: Footer
    }
  }
</script>

<style scoped>
  image {
    width: 100%;
    height: 100%;
  }
</style>
