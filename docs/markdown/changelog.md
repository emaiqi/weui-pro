# 更新日志

----

WeUI Pro 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

## 发布周期
- 修订版本：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。


<div class="row changelog">
  <at-timeline>
    <at-timeline-item color="red">
      <i slot="dot" class="icon icon-award"></i>
      <p class="head">v1.1.1</p>
      <p class="time"><span>2018-06-16</span></p>
      <ul class="content">
        <li>发布第一个版本，包含了 <span>34</span> 个组件</li>
      </ul>
    </at-timeline-item>
  </at-timeline>
</div>

<style lang="scss" scoped>
.changelog {
  margin: 32px 0;

  span {
    padding: .3em .5em;
    margin: 0 4px;
    font-size: .9em;
    vertical-align: middle;
    border: 1px solid #ECECEC;
    border-radius: 2px;
    background-color: #F7F7F7;
  }
  .head {
    margin-bottom: 16px;
    color: #4F7DE2;
    font-size: 16px;
    font-weight: bold;
  }
  .time {
    margin: 16px 0;
    font-size: 12px;

    span {
      margin: 0;
    }
  }
  .content {
    li {
      margin: 4px 0;
      margin-left: 24px;
      list-style-type: circle;
      font-size: 14px;
      line-height: 1.8;
    }
  }
}
</style>
