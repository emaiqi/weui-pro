<template>
  <div class="container">
    <head-view title="flex" desc="弹性布局"></head-view>
    <div class="page-body">
      <div class="page-section">
        <div class="page-section-title">
          <text>基本栅格</text>
        </div>
        <flex>
          <flex-item><div class="placeholder">weui</div></flex-item>
        </flex>
        <flex>
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
        </flex>
        <flex>
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
        </flex>
        <flex>
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
        </flex>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>区块间隔</text>
        </div>
        <flex :gutter="32">
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
          <flex-item><div class="placeholder">weui</div></flex-item>
        </flex>
      </div>
      <div class="page-section">
        <div class="page-section-title">
          <text>混合布局</text>
        </div>
        <flex wrap="wrap" :gutter="0">
          <flex-item :span="8"><div class="placeholder">2/3</div></flex-item>
          <flex-item :span="4"><div class="placeholder">1/3</div></flex-item>

          <flex-item :span="4"><div class="placeholder">1/3</div></flex-item>
          <flex-item :span="4"><div class="placeholder">1/3</div></flex-item>
          <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>
          <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>

          <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>
          <flex-item :span="8"><div class="placeholder">2/3</div></flex-item>
          <flex-item :span="2"><div class="placeholder">1/6</div></flex-item>
        </flex>
      </div>
    </div>
    <foot-view></foot-view>
  </div>
</template>

<script>
  import Header from '../../components/header'
  import Footer from '../../components/footer'
  import Flex from 'weui/flex/flex'
  import FlexItem from 'weui/flex/flex-item'

  export default {
    data () {
      return {}
    },

    methods: {},

    components: {
      Flex,
      FlexItem,
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
  .placeholder {
    margin: 5px;
    padding: 0 10px;
    border-radius: 4px;
    background-color: #EBEBEB;
    height: 2.3em;
    line-height: 2.3em;
    text-align: center;
    color: #CFCFCF;
  }
  .weui-flex {
    padding: 0 10px;
  }
</style>
