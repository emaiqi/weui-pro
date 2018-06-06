# 快速上手

----

WeUI Pro 致力于提供给程序员愉悦的开发体验。

## 前序准备

> 在开始之前，推荐先学习 `Vue` 和 `ES2015` ，并正确安装和配置了 `Node.js` 6.x 或以上版本。
官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 全家桶的正确开发方式。如果你刚开始学习小程序或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。

## 模板工程

我们提供了一个模板工程，可通过 `vue-cli` 工具初始化模板项目，快速搭建小程序应用。

```
vue init weui-pro/weui-template my-project
```

如果不想使用 `vue-cli` 工具，我们也同样提供了可直接使用的模板工程：[weui-start]()

## 标准开发

实际项目中，往往会使用 `webpack`，`rollup` 或者 `gulp` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 `<script>` 标签全局引入的方式使用。

#### 全局引入

**注意**：目前版本暂不支持全局引入

可以在项目的入口文件中引入所有组件或所需组件：

```js
import Vue from 'vue'
import WeUI from 'weui-pro'
import 'weui-pro-style'    // 引入组件样式

// import 'weui-pro-style/src/index.less'      // 或者引入未构建版本的 less 样式

Vue.use(WeUI)
```

以上代码便完成了 WeUI Pro 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

可以局部注册所需的组件，适用于与其他框架组合使用的场景。首先我们需要借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件以达到减小项目体积的目的。

```
npm install babel-plugin-import
```

然后修改 `.babelrc` 配置：

```js
{
  "presets": ["es2015", "stage-2"],
  "plugins": [["import", {
    "libraryName": "weui-pro",
    "libraryDirectory": "packages"
  }]]
}
```

接下来引入你需要用的组件：

```js
import { Avatar } from 'weui-pro'

export default {
  components: {
    Avatar
  },
  ...
}
```

以下是完整的组件列表和引入方式：

```js
import Vue from 'vue'
import {
  Avatar,
  Badge,
  Elip,
  Capsule,
  Price,
  Tag,
  Loadmore,
  Flex,
  Grid,
  Cell,
  Group,
  Panel,
  Field,
  Counter,
  Select,
  Rate,
  Search,
  Upload,
  Dialog,
  Popup,
  Result,
  Toptips,
  Card,
  List,
  Notice,
  Steps,
  Timeline,
  Loading,
  Preview,
  Countdown,
  Exception,
  Tabs,
  Tabbar,
  Navbar
} from 'weui-pro'

Vue.prototype.$Notice = Notice
Vue.prototype.$Loading = Loading
Vue.prototype.$Dialog = Dialog
Vue.prototype.$Toptips = Toptips
```

## 定制主题

WeUI Pro 的样式已抽离成单独的项目 [WeUI-Pro-Style](https://github.com/WeUI-Pro/weui-pro-style)，各个组件的样式变量都存放在 `weui-pro-style/src/variables/default.scss` 文件中。用户可根据实际需要，自定义组件的样式

## 开始使用

至此，一个基于 Vue 和 WeUI 的小程序开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
