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
      <view class="page-section">
        <view class="page-section-title">
          <text>自定义内容</text>
        </view>
        <grid>
          <grid-item>
            <img slot="icon" src="data:image/png;base64,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" />
            <span slot="label">WeUI</span>
          </grid-item>
          <grid-item>
            <img slot="icon" src="data:image/png;base64,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" />
            <span slot="label">WeUI Design</span>
          </grid-item>
          <grid-item>
            <img slot="icon" src="data:image/png;base64,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" />
            <span slot="label">Vue</span>
          </grid-item>
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
