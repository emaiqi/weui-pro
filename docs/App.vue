<template>
  <transition name="fade" mode="out-in" @after-leave="afterLeave">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  methods: {
    afterLeave () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="less">
  @import "../style/src/weui.less";
</style>
