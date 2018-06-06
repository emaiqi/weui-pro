# Typography 字体

----

我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。

## Font-family 代码

```css
font-family: -apple-system-font, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
```

## 中文字体

<div class="row">
  <div class="at-component__container col-sm-24 col-md-8">
    <div class="at-component-typo typo-pingfang">
      <div class="at-component-typo__show">代码如诗</div>
      <div class="at-component-typo__detail">
        <p>苹方 / PingFang SC</p>
        <p class="note"></p>
      </div>
    </div>
  </div>

  <div class="at-component__container col-sm-24 col-md-8">
    <div class="at-component-typo typo-dongqing">
      <div class="at-component-typo__show">代码如诗</div>
      <div class="at-component-typo__detail">
        <p>冬青黑体 / Hiragino Sans GB</p>
        <p class="note"></p>
      </div>
    </div>
  </div>

  <div class="at-component__container col-sm-24 col-md-8">
    <div class="at-component-typo typo-yahei">
      <div class="at-component-typo__show">代码如诗</div>
      <div class="at-component-typo__detail">
        <p>微软雅黑 / Microsoft YaHei</p>
        <p class="note"></p>
      </div>
    </div>
  </div>
</div>

<div class="type-demo-container">
  <div class="row flex-middle typo-pingfang">
    <div class="col-md-5 type">苹方 / PingFang SC</div>
    <div class=" content">开源软件实验室(OSSLab.online，英文简称 OSSLab) 成立于2017年5月，由社区成员发起共建</div>
  </div>
  <div class="row flex-middle typo-dongqing">
    <div class="col-md-5 type">冬青黑体 / Hiragino Sans GB</div>
    <div class=" content">开源软件实验室(OSSLab.online，英文简称 OSSLab) 成立于2017年5月，由社区成员发起共建</div>
  </div>
  <div class="row flex-middle typo-yahei">
    <div class="col-md-5 type">微软雅黑 / Microsoft YaHei</div>
    <div class=" content">开源软件实验室(OSSLab.online，英文简称 OSSLab) 成立于2017年5月，由社区成员发起共建</div>
  </div>
</div>

## 西文字体

<div class="row">
  <div class="at-component__container col-sm-24 col-md-8">
    <div class="at-component-typo typo-helvetica-neue">
      <div class="at-component-typo__show">Code is Poetry</div>
      <div class="at-component-typo__detail">
        <p>Helvetica Neue</p>
        <p class="note"></p>
      </div>
    </div>
  </div>

  <div class="at-component__container col-sm-24 col-md-8">
    <div class="at-component-typo typo-helvetica">
      <div class="at-component-typo__show">Code is Poetry</div>
      <div class="at-component-typo__detail">
        <p>Helvetica</p>
        <p class="note"></p>
      </div>
    </div>
  </div>

  <div class="at-component__container col-sm-24 col-md-8">
    <div class="at-component-typo typo-arial">
      <div class="at-component-typo__show">Code is Poetry</div>
      <div class="at-component-typo__detail">
        <p>Arial</p>
        <p class="note"></p>
      </div>
    </div>
  </div>
</div>

<div class="type-demo-container">
  <div class="row flex-middle typo-helvetica-neue">
    <div class="col-md-5 type">Helvetica Neue</div>
    <div class=" content">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</div>
  </div>
  <div class="row flex-middle typo-helvetica">
    <div class="col-md-5 type">Helvetica</div>
    <div class=" content">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</div>
  </div>
  <div class="row flex-middle typo-arial">
    <div class="col-md-5 type">Arial</div>
    <div class=" content">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</div>
  </div>
</div>

## 字体使用规范

微信内字体的使用与所运行的系统字体保持一致，常用字号为20, 18, 17, 16,14 13, 11(pt)，使用场景具体如下： 

<div class="at-component__container">
  <div class="at-component-typo-list">
    <div class="at-component-typo-list__item text-larger row flex-middle">
      <span class="label col-md-4">主标题</span>
      <span class="col-md-6">开源软件实验室</span>
      <span class="scene col-md-10">页面大标题，一般用于结果、空状态等信息单一页面</span>
      <span class="note col-md-4">20px Extra Large</span>
    </div>
    <div class="at-component-typo-list__item text-large row flex-middle">
      <span class="label col-md-4">标题</span>
      <span class="col-md-6">开源软件实验室</span>
      <span class="scene col-md-10">页面内大按钮字体，与按钮搭配使用</span>
      <span class="note col-md-4">18px Large</span>
    </div>
    <div class="at-component-typo-list__item text-normal row flex-middle">
      <span class="label col-md-4">小标题</span>
      <span class="col-md-6">开源软件实验室</span>
      <span class="scene col-md-10">页面内首要层级信息，如列表标题、消息气泡</span>
      <span class="note col-md-4">17px Normal</span>
    </div>
    <div class="at-component-typo-list__item text-base row flex-middle">
      <span class="label col-md-4">正文</span>
      <span class="col-md-6">开源软件实验室</span>
      <span class="scene col-md-10">页面内次要描述信息，服务于首要信息并与之关联，如列表摘要</span>
      <span class="note col-md-4">14px Base</span>
    </div>
    <div class="at-component-typo-list__item text-small row flex-middle">
      <span class="label col-md-4">正文（小）</span>
      <span class="col-md-6">开源软件实验室</span>
      <span class="scene col-md-10">页面辅助信息，需弱化的内容，如链接、小按钮</span>
      <span class="note col-md-4">13px Small</span>
    </div>
    <div class="at-component-typo-list__item text-smaller row flex-middle">
      <span class="label col-md-4">辅助文字</span>
      <span class="col-md-6">开源软件实验室</span>
      <span class="scene col-md-10">说明文本，如版权信息等不需要用户关注的内容</span>
      <span class="note col-md-4">11px Extra Small</span>
    </div>
  </div>
</div>

<style lang="scss" scoped>
  .type-demo-container {
    .row {
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .type {
      color: #7E95A7;
      font-size: 13px;
      text-align: right;
    }
    .content {
      font-size: 15px;
      padding-left: 24px;
      word-break: break-all;
    }
  }
</style>
