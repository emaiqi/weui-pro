<template>
  <div class="container">
    <head-view title="group" desc="列表视图"></head-view>
    <div class="page-body">
      <div class="page-section">
        <div class="page-section-title">
          <text>基本用法</text>
        </div>
        <group>
          <group-item title="标题文字" value="说明文字"></group-item>
          <group-item title="标题文字" value="说明文字"></group-item>
        </group>
      </div>

      <div class="page-section">
        <div class="page-section-title">
          <text>带图标的列表项</text>
        </div>
        <group>
          <group-item title="标题文字" value="说明文字" icon="/static/image/icon.png"></group-item>
          <group-item title="标题文字" value="说明文字" icon="/static/image/icon.png"></group-item>
        </group>
      </div>

      <div class="page-section">
        <div class="page-section-title">
          <text>带跳转的列表项</text>
        </div>
        <group>
          <group-item title="标题文字" value="说明文字" :show-access="true"></group-item>
          <group-item title="标题文字" value="说明文字" :show-access="true"></group-item>
        </group>
      </div>

      <div class="page-section">
        <div class="page-section-title">
          <text>显示超链接样式</text>
        </div>
        <group>
          <group-item title="标题文字" :show-access="true" :is-link="true" :intent="true"></group-item>
          <group-item title="标题文字" :show-access="true" :is-link="true" :intent="true"></group-item>
        </group>
      </div>
    </div>
    <foot-view></foot-view>
  </div>
</template>

<script>
  import Header from '../../components/header'
  import Footer from '../../components/footer'
  import Group from 'weui/group/group'
  import GroupItem from 'weui/group/group-item'
  import GroupTitle from 'weui/group/group-title'

  export default {
    data () {
      return {}
    },
    components: {
      Group,
      GroupItem,
      GroupTitle,
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>
