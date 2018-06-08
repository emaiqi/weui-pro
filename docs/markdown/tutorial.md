# 快速上手

----

WeUI Pro 致力于提供给程序员愉悦的开发体验。

## 前序准备

> 在开始之前，推荐先学习 `Vue` 和 `ES2015` ，并正确安装和配置了 `Node.js` 6.x 或以上版本。
官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 全家桶的正确开发方式。如果你刚开始学习小程序或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。

如果你还不了解 `mpvue` 是什么，请先阅读 [使用手册](http://mpvue.com/mpvue)。

## 模板工程

我们提供了一个模板工程，可通过 `vue-cli` 工具初始化模板项目，快速搭建小程序应用。

- vue-cli 2.0（[模板](https://github.com/weui-pro/weui-pro-template)）

```
vue init weui-pro/weui-pro-template my-project
```

如果不想使用 `vue-cli` 工具，我们也同样提供了可直接使用的项目工程：[weui-pro-starter](https://github.com/weui-pro/weui-pro-starter)

## 标准开发

实际项目中，往往会使用 `webpack`，`rollup` 或者 `gulp` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 `<script>` 标签的全局引入方式。

***
**注意**：目前仅支持直接引用 vue 文件，以下代码仅供参考
***

#### 完整引入

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

借助 [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)，我们可以只引入需要的组件，以达到减小项目体积的目的。

```
npm install babel-plugin-import -D
```

然后，将 `.babelrc` 修改为：

```js
{
  "presets": ["es2015", "stage-2"],
  "plugins": [["import", {
    "libraryName": "weui-pro",
    "libraryDirectory": "packages"
  }]]
}
```

接下来，如果你只希望引入部分组件，比如 Cell 和 Group，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import App from './App.vue';
import { Cell, Group } from 'weui-pro';

Vue.component(Cell.name, Cell);
Vue.component(Group.name, Group);

/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
```

或在页面中使用：

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

WeUI Pro 的样式已抽离成单独的项目 [WeUI-Pro-Style](https://github.com/WeUI-Pro/weui-pro-style)，各个组件的样式变量都存放在 `weui-pro-style/src/base/variable/color.less` 文件中。可根据实际需要，自定义组件的样式。

## 开始使用

至此，一个基于 Vue 和 WeUI 的小程序开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
