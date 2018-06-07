<template>
  <view class="container">
    <head-view title="radio" desc="单项选择器"></head-view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">默认样式</view>
        <label class="radio">
          <radio value="r1" checked="true"/>
          选中
        </label>
        <label class="radio">
          <radio value="r2"/>
          未选中
        </label>
      </view>

      <view class="page-section">
        <view class="page-section-title">推荐展示样式</view>
        <view class="weui-cells weui-cells_after-title">
          <radio-group @change="radioChange">
            <label class="weui-cell weui-check__label" v-for="item in items" :key="item.value">
              <view class="weui-cell__hd">
                <radio :value="item.value" :checked="item.checked"/>
              </view>
              <view class="weui-cell__bd">{{item.name}}</view>
            </label>
          </radio-group>
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
        items: [
          {value: 'USA', name: '美国'},
          {value: 'CHN', name: '中国', checked: 'true'},
          {value: 'BRA', name: '巴西'},
          {value: 'JPN', name: '日本'},
          {value: 'ENG', name: '英国'},
          {value: 'FRA', name: '法国'}
        ]
      }
    },

    methods: {
      radioChange (e) {
        console.log('radio发生change事件，携带value值为：', e.target.value)

        for (let i = 0, len = this.items.length; i < len; ++i) {
          this.items[i].checked = this.items[i].value === e.target.value
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
  .radio {
    margin-right: 20rpx;
  }
</style>
