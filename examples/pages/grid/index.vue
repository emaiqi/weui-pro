<template>
  <view class="container">
    <head-view title="grid" desc="九宫格"></head-view>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>基本用法</text>
        </view>
        <grid>
          <grid-item label="Grid" icon="/static/image/icon_tabbar.png"></grid-item>
          <grid-item label="Grid" icon="/static/image/icon_tabbar.png"></grid-item>
          <grid-item label="Grid" icon="/static/image/icon_tabbar.png"></grid-item>
        </grid>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>自定义列</text>
        </view>
        <grid cols="5">
          <grid-item v-for="i in 10" :key="i" label="Grid" icon="/static/image/icon_tabbar.png"></grid-item>
        </grid>
      </view>
    </view>
    <foot-view></foot-view>
  </view>
</template>

<script>
  import Header from 'components/header'
  import Footer from 'components/footer'
  import Grid from 'weui/grid/grid'
  import GridItem from 'weui/grid/grid-item'

  export default {
    data () {
      return {}
    },

    methods: {
      onItemClick () {
        console.log('on item click')
      }
    },

    components: {
      Grid,
      GridItem,
      headView: Header,
      footView: Footer
    }
  }
</script>
