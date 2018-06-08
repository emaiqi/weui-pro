# 常见问题

----

提问之前，请先查阅下面的常见问题。

### WeUI 和 WeUI Pro 有什么区别？

可以理解为 WeUI 是一套同微信原生视觉体验一致的基础样式库，而 Pro 是 WeUI Design 的 `mpvue` 实现。

### 如何使用 WeUI Pro？

请阅读 [快速上手](tutorial) 文档，建议使用 `vue-cli` 工具初始化模板项目。

### 如何修改默认 webpack 配置？

请参看 mpvue 文档：[项目构建](http://mpvue.com/build/)。

### 如何使用图片等静态资源？

建议使用绝对路径引用，例如：

```html
<img src="/static/images/pic.png" />
```

### 如何添加 scss/less 支持？

不需要任何配置，只需安装依赖即可：

```
npm i sass-loader node-sass -D
```

或者

```
npm i less less-loader -D
```

注意，如果需要在 js 中用 sass/less ，则还需要在 `build/webpack.base.config.js` 中添加相关 `rule` 。

### 组件是否支持国际化？

这是 WeUI Pro 的特性之一，目前第一个版本只有中文文案，国际化将是我们下一步的首要工作。

---
💣 如果这里未能解决你的问题，欢迎 [报告给我们](https://github.com/WeUI-Pro/weui-pro/issues)。
