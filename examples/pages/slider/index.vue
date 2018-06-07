<template>
  <view class="container">
    <head-view title="slider" desc="滑动选择器"></head-view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">设置step</view>
        <view class="body-view">
          <slider value="60" step="5"/>
        </view>
      </view>

      <view class="page-section page-section-gap">
        <view class="page-section-title">显示当前value</view>
        <view class="body-view">
          <slider value="50" show-value/>
        </view>
      </view>

      <view class="page-section page-section-gap">
        <view class="page-section-title">设置最小/最大值</view>
        <view class="body-view">
          <slider value="100" min="50" max="200" show-value/>
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
</style>
