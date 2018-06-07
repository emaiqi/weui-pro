<template>
  <view class="container">
    <head-view title="swiper" desc="滑块视图容器"></head-view>
    <view class="page-body">
      <view class="page-section page-section-spacing swiper">
        <swiper :indicator-dots="indicatorDots"
                :autoplay="autoplay" :interval="interval" :duration="duration">
          <block v-for="(item, key) in background" :key="key">
            <swiper-item>
              <view :class="[ 'swiper-item', item ]"></view>
            </swiper-item>
          </block>
        </swiper>
      </view>
      <view class="page-section" style="margin-top: 40rpx;margin-bottom: 0;">
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_switch">
            <view class="weui-cell__bd">指示点</view>
            <view class="weui-cell__ft">
              <switch :checked="indicatorDots" @change="changeIndicatorDots"/>
            </view>
          </view>
          <view class="weui-cell weui-cell_switch">
            <view class="weui-cell__bd">自动播放</view>
            <view class="weui-cell__ft">
              <switch :checked="autoplay" @change="changeAutoplay"/>
            </view>
          </view>
        </view>
      </view>

      <view class="page-section page-section-spacing">
        <view class="page-section-title">
          <text>幻灯片切换时长(ms)</text>
          <text class="info">{{duration}}</text>
        </view>
        <slider @changing="durationChanging" :value="duration" min="500" max="2000"/>
        <view class="page-section-title">
          <text>自动播放间隔时长(ms)</text>
          <text class="info">{{interval}}</text>
        </view>
        <slider @changing="intervalChanging" :value="interval" min="2000" max="10000"/>
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
      return {
        duration: 500,
        interval: 2000,
        vertical: false,
        autoplay: false,
        indicatorDots: true,
        background: ['demo-text-a', 'demo-text-b', 'demo-text-c']
      }
    },

    methods: {
      changeIndicatorDots (e) {
        this.indicatorDots = !this.indicatorDots
      },
      changeAutoplay (e) {
        this.autoplay = !this.autoplay
      },
      intervalChanging (e) {
        this.interval = e.target.value
      },
      durationChanging (e) {
        this.duration = e.target.value
      }
    },

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
  button{
    margin-bottom: 30rpx;
  }
  button:last-child{
    margin-bottom: 0;
  }
  .page-section-title{
    padding: 0;
  }
  .swiper-item{
    display: block;
    height: 150px;
  }
  .page-section-title{
    margin-top: 60rpx;
    position: relative;
  }
  .info{
    position: absolute;
    right: 0;
    color: #353535;
    font-size: 30rpx;
  }
  .page-foot{
    margin-top: 50rpx;
  }
</style>
