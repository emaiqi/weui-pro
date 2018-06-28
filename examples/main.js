import Vue from 'vue'
import App from './app'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      '^pages/group/main',
      'pages/flex/main',
      'pages/grid/main',
      'pages/index/main',
      'pages/view/main',
      'pages/scroll-view/main',
      'pages/swiper/main',
      'pages/text/main',
      'pages/icon/main',
      'pages/progress/main',
      'pages/button/main',
      'pages/checkbox/main',
      'pages/form/main',
      'pages/input/main',
      'pages/label/main',
      'pages/picker/main',
      'pages/radio/main',
      'pages/slider/main',
      'pages/switch/main',
      'pages/textarea/main',
      'pages/navigator/main',
      'pages/navigate/main',
      'pages/redirect/main',
      'pages/image/main',
      'pages/audio/main',
      'pages/video/main',
      'pages/canvas/main',
      'pages/map/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeUI Pro',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1AAD16',
      backgroundColor: '#ffffff',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '组件',
          iconPath: 'static/image/icon_component.png',
          selectedIconPath: 'static/image/icon_component_HL.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '区块',
          iconPath: 'static/image/icon_block.png',
          selectedIconPath: 'static/image/icon_block_HL.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '工具',
          iconPath: 'static/image/icon_utils.png',
          selectedIconPath: 'static/image/icon_utils_HL.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '接口',
          iconPath: 'static/image/icon_API.png',
          selectedIconPath: 'static/image/icon_API_HL.png'
        }
      ]
    }
  }
}
