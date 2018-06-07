<template>
  <view class="container">
    <head-view title="label" desc="表单辅助标签"></head-view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <view class="page-section-title">表单组件在label内</view>
        <checkbox-group class="group" @change="checkboxChange">
          <view class="label-1" v-for="item in checkboxItems" :key="item.name">
            <label>
              <checkbox :value="item.name" :checked="item.checked"></checkbox>
              <text class="label-1-text">{{item.value}}</text>
            </label>
          </view>
        </checkbox-group>
      </view>

      <view class="page-section page-section-gap">
        <view class="page-section-title">label用for标识表单组件</view>
        <radio-group class="group" @change="radioChange">
          <view class="label-2" v-for="item in radioItems" :key="item.name">
            <radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
            <label class="label-2-text" :for="item.name"><text>{{item.name}}</text></label>
          </view>
        </radio-group>
      </view>

      <view class="page-section page-section-gap">
        <view class="page-section-title">label内有多个时选中第一个</view>
        <label class="label-3">
          <checkbox class="checkbox-3">选项一</checkbox>
          <checkbox class="checkbox-3">选项二</checkbox>
          <view class="label-3-text">点击该label下的文字默认选中第一个checkbox</view>
        </label>
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
        hidden: false,
        checkboxItems: [
          {name: 'USA', value: '美国'},
          {name: 'CHN', value: '中国', checked: 'true'}
        ],
        radioItems: [
          {name: 'USA', value: '美国'},
          {name: 'CHN', value: '中国', checked: 'true'}
        ]
      }
    },

    methods: {
      checkboxChange (e) {
        let checked = e.target.value
        let changed = {}
        for (let i = 0; i < this.checkboxItems.length; i++) {
          if (checked.indexOf(this.checkboxItems[i].name) !== -1) {
            changed['checkboxItems[' + i + '].checked'] = true
          } else {
            changed['checkboxItems[' + i + '].checked'] = false
          }
        }
      },
      radioChange (e) {
        let checked = e.target.value
        let changed = {}
        for (let i = 0; i < this.radioItems.length; i++) {
          if (checked.indexOf(this.radioItems[i].name) !== -1) {
            changed['radioItems[' + i + '].checked'] = true
          } else {
            changed['radioItems[' + i + '].checked'] = false
          }
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
  .label-1, .label-2{
    margin: 30rpx 0;
  }
  .label-3-text{
    color: #576B95;
    font-size: 28rpx;
  }
  .checkbox-3{
    display: block;
    margin: 30rpx 0;
  }
</style>
