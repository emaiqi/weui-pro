<template>
  <view class="container">
    <head-view title="form" desc="表单"></head-view>
    <view class="page-body">
      <form @submit="formSubmit" @reset="formReset">
        <view class="page-section page-section-gap">
          <view class="page-section-title">switch</view>
          <switch name="switch"/>
        </view>

        <view class="page-section page-section-gap">
          <view class="page-section-title">radio</view>
          <radio-group name="radio">
            <label>
              <radio value="radio1"/>
              选项一</label>
            <label>
              <radio value="radio2"/>
              选项二</label>
          </radio-group>
        </view>

        <view class="page-section page-section-gap">
          <view class="page-section-title">checkbox</view>
          <checkbox-group name="checkbox">
            <label>
              <checkbox value="checkbox1"/>
              选项一</label>
            <label>
              <checkbox value="checkbox2"/>
              选项二</label>
          </checkbox-group>
        </view>

        <view class="page-section page-section-gap">
          <view class="page-section-title">slider</view>
          <slider value="50" name="slider" show-value></slider>
        </view>

        <view class="page-section">
          <view class="page-section-title">input</view>
          <view class="weui-cells weui-cells_after-title">
            <view class="weui-cell weui-cell_input">
              <view class="weui-cell__bd">
                <input class="weui-input" name="input" placeholder="这是一个输入框"/>
              </view>
            </view>
          </view>
        </view>

        <view class="btn-area">
          <button type="primary" formType="submit">提交</button>
          <button formType="reset">重置</button>
        </view>
      </form>
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
      formSubmit (e) {
        console.log('form发生了submit事件，携带数据为：', e.target.value)
      },
      formReset (e) {
        console.log('form发生了reset事件，携带数据为：', e.target.value)
      }
    },

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
  label {
    display: inline-block;
    min-width: 270rpx;
    margin-right: 20rpx;
  }

  form {
    width: 100%;
  }

  .picker-text {
    margin-left: 20rpx;
    position: relative;
  }
</style>
