<template>
  <view class="container">
    <head-view title="navigate" desc="新建的页面"></head-view>
  </view>
</template>

<script>
  import Header from '../../components/header'
  import Footer from '../../components/footer'

  export default {
    data () {
      return {}
    },

    onLoad () {
      console.log('url携带参数：', this.$root.$mp.query)
    },

    methods: {},

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
</style>
