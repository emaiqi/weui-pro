<template>
  <view class="index">
    <view class="index-hd">
      <image class="index-logo" src="/static/image/logo.png"></image>
      <view class="index-desc">开箱即用的微信小程序组件化解决方案</view>
    </view>
    <view class="index-bd">
      <view class="kind-list">
        <block v-for="(item, itemIndex) in list" :key="itemIndex">
          <view class="kind-list-item">
            <view :id="item.id" class="kind-list-item-hd" :class="{'kind-list-item-hd-show' : item.open}" @click="kindToggle">
              <view class="kind-list-text">{{item.name}}</view>
              <image class="kind-list-img" :src="'/static/image/'+item.id+'.png'"></image>
            </view>
            <view class="kind-list-item-bd" :class="{'kind-list-item-bd-show' : item.open}">
              <view class="navigator-box" :class="{'navigator-box-show' : item.open}">
                <block v-for="(page, pageIndex) in item.pages" :key="pageIndex">
                  <navigator class="navigator" :url=" '/pages/' + page + '/main'">
                    <view class="navigator-text">{{page}}</view>
                    <view class="navigator-arrow"></view>
                  </navigator>
                </block>
              </view>
            </view>
          </view>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            id: 'view',
            name: '视图容器',
            open: false,
            pages: ['view', 'scroll-view', 'swiper']
          }, {
            id: 'layout',
            name: '页面布局',
            open: false,
            pages: ['flex', 'grid', 'cell', 'group']
          }, {
            id: 'basic',
            name: '基础内容',
            open: false,
            pages: ['color', 'typography', 'text', 'elip', 'icon', 'avatar', 'badge', 'tag', 'price', 'capsule', 'loadmore', 'progress']
          }, {
            id: 'form',
            name: '表单组件',
            open: false,
            pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'field', 'rater', 'checker', 'counter', 'uploader', 'textarea']
          }, {
            id: 'nav',
            name: '导航相关',
            open: false,
            pages: ['tabs', 'tabbar', 'navbar', 'navigator']
          }, {
            id: 'feedback',
            name: '提示反馈',
            open: false,
            pages: ['badge', 'dialog', 'loading', 'popup', 'toast', 'msg', 'notice']
          }, {
            id: 'information',
            name: '信息展示',
            open: false,
            pages: ['card', 'panel', 'steps', 'timeline', 'preview', 'countdown']
          }, {
            id: 'media',
            name: '媒体组件',
            open: false,
            pages: ['image', 'audio', 'video', 'canvas']
          }, {
            id: 'map',
            name: '地图',
            open: false,
            pages: ['map']
          }, {
            id: 'canvas',
            name: '画布',
            open: false,
            pages: ['canvas']
          }
        ]
      }
    },

    components: {},

    methods: {
      kindToggle (e) {
        var id = e.currentTarget.id
        var list = this.list
        for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id === id) {
            list[i].open = !list[i].open
          } else {
            list[i].open = false
          }
        }
        this.list = list
      }
    }
  }
</script>

<style scoped>
  .index-hd {
    padding: 80rpx;
    text-align: center;
  }
  .index-bd {
    padding: 0 30rpx 40rpx;
  }
  .index-ft {
    padding-bottom: 20rpx;
    text-align: center;
  }
  .index-logo {
    width: 86rpx;
    height: 86rpx;
  }
  .index-desc {
    margin-top: 20rpx;
    color: #888888;
    font-size: 28rpx;
  }

  .navigator-box {
    opacity: 0;
    position: relative;
    background-color: #FFFFFF;
    line-height: 1.41176471;
    font-size: 34rpx;

    transform: translateY(-50%);
    transition: .3s;
  }
  .navigator-box-show {
    opacity: 1;
    transform: translateY(0);
  }
  .navigator {
    padding: 20rpx 30rpx;
    position: relative;
    display: flex;
    align-items: center;
  }
  .navigator:before {
    content: " ";
    position: absolute;
    left: 30rpx;
    top: 0;
    right: 30rpx;
    height: 1px;
    border-top: 1rpx solid #D8D8D8;
    color: #D8D8D8;
  }
  .navigator:first-child:before {
    display: none;
  }
  .navigator-text {
    flex: 1;
  }
  .navigator-arrow {
    padding-right: 26rpx;
    position: relative;
  }
  .navigator-arrow:after {
    content: " ";
    display: inline-block;
    height: 18rpx;
    width: 18rpx;
    border-width: 2rpx 2rpx 0 0;
    border-color: #888888;
    border-style: solid;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: absolute;
    top: 50%;
    margin-top: -8rpx;
    right: 28rpx;
  }


  .kind-list-item {
    margin: 20rpx 0;
    background-color: #FFFFFF;
    border-radius: 4rpx;
    overflow: hidden;
  }
  .kind-list-item:first-child {
    margin-top: 0;
  }
  .kind-list-text{
    flex: 1;
  }
  .kind-list-img {
    width: 60rpx;
    height: 60rpx;
  }
  .kind-list-item-hd {
    padding: 30rpx;
    display: flex;
    align-items: center;

    transition: opacity .3s;
  }
  .kind-list-item-hd-show {
    opacity: .2;
  }
  .kind-list-item-bd {
    height: 0;
    overflow: hidden;
  }
  .kind-list-item-bd-show {
    height: auto;
  }
</style>
