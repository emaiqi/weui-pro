<template>
  <view class="container">
    <head-view title="switch" desc="开关选择器"></head-view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">默认样式</view>
        <view class="body-view">
          <switch checked @change="switch1Change"/>
          <switch @change="switch2Change"/>
        </view>
      </view>

      <view class="page-section">
        <view class="page-section-title">推荐展示样式</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_switch">
            <view class="weui-cell__bd">开启中</view>
            <view class="weui-cell__ft">
              <switch checked />
            </view>
          </view>
          <view class="weui-cell weui-cell_switch">
            <view class="weui-cell__bd">关闭</view>
            <view class="weui-cell__ft">
              <switch />
            </view>
          </view>
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
      switch1Change (e) {
        console.log('switch1 发生 change 事件，携带值为', e.target.value)
      },
      switch2Change (e) {
        console.log('switch2 发生 change 事件，携带值为', e.target.value)
      }
    },

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
