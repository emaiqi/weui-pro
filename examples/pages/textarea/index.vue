<template>
  <view class="container">
    <head-view title="textarea" desc="多行输入框"></head-view>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">输入区域高度自适应，不会出现滚动条</view>
        <view class="textarea-wrp">
          <textarea @blur="textAreaBlur" auto-height />
        </view>
      </view>

      <view class="page-section">
        <view class="page-section-title">这是一个可以自动聚焦的textarea</view>
        <view class="textarea-wrp">
          <textarea focus style="height: 3em" />
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
      textAreaBlur (e) {
        console.log(e.target.value)
      }
    },

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
  textarea {
    width: 700rpx;
    padding: 25rpx 0;
  }
  .textarea-wrp {
    padding: 0 25rpx;
    background-color: #fff;
  }
</style>
