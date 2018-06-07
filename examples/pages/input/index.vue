<template>
  <view class="container">
    <head-view title="input" desc="输入框"></head-view>
    <view class="page-body">
      <view class="page-section">
        <view class="weui-cells__title">可以自动聚焦的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" focus placeholder="将会获取焦点"/>
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">控制最大输入长度的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" maxlength="10" placeholder="最大输入长度为10" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">实时获取输入值：{{inputValue}}</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input"  maxlength="10" @input="keyInput" placeholder="输入同步到view中"/>
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">控制输入的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input"  @input="replaceInput" placeholder="连续的两个1会变成2" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">控制键盘的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input"  @input="hideKeyboard" placeholder="输入123自动收起键盘" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">数字输入的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" type="number" placeholder="这是一个数字输入框" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">密码输入的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" password type="text" placeholder="这是一个密码输入框" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">带小数点的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" type="digit" placeholder="带小数点的数字键盘"/>
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">身份证输入的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" type="idcard" placeholder="身份证输入键盘" />
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="weui-cells__title">控制占位符颜色的input</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <input class="weui-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
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
      return {
        inputValue: ''
      }
    },

    methods: {
      keyInput (e) {
        this.inputValue = e.target.value
      },
      replaceInput (e) {
        let value = e.target.value
        let pos = e.target.cursor
        let left
        if (pos !== -1) {
          left = e.target.value.slice(0, pos)
          pos = left.replace(/11/g, '2').length
        }

        return {
          value: value.replace(/11/g, '2'),
          cursor: pos
        }

        // 或者直接返回字符串,光标在最后边
        // return value.replace(/11/g,'2'),
      },
      hideKeyboard: function (e) {
        if (e.target.value === '123') {
          wx.hideKeyboard()
        }
      }
    },

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
  .page-section{
    margin-bottom: 20rpx;
  }
</style>
