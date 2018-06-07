<template>
  <view class="container">
    <head-view title="picker" desc="多列选择器"></head-view>
    <view class="page-body">
      <view class="page-section">
        <view class="weui-cells__title">地区选择器</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">当前选择</view>
            </view>
            <view class="weui-cell__bd">
              <picker @change="pickerChange" :value="index" :range="array">
                <view class="weui-input">{{array[index]}}</view>
              </picker>
            </view>
          </view>
        </view>

        <view class="weui-cells__title">时间选择器</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">当前选择</view>
            </view>
            <view class="weui-cell__bd">
              <picker mode="time" :value="time" start="09:01" end="21:01" @change="timeChange">
                <view class="weui-input">{{time}}</view>
              </picker>
            </view>
          </view>
        </view>

        <view class="weui-cells__title">日期选择器</view>
        <view class="weui-cells weui-cells_after-title">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">当前选择</view>
            </view>
            <view class="weui-cell__bd">
              <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="dateChange">
                <view class="weui-input">{{date}}</view>
              </picker>
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
      return {
        index: 0,
        time: '12:01',
        date: '2016-09-01',
        array: ['中国', '美国', '巴西', '日本']
      }
    },

    methods: {
      pickerChange (e) {
        console.log('picker发送选择改变，携带值为', e.target.value)
        this.index = e.target.value
      },
      dateChange (e) {
        this.date = e.target.value
      },
      timeChange (e) {
        this.time = e.target.value
      }
    },

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
  .picker{
    padding: 19rpx 26rpx;
    background-color: #FFFFFF;
  }
</style>
