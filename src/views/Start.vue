<template>
  <div class="start-page">
    <h1>快速上手</h1>
    <div class="anchor">
      <h2>如何使用</h2>
    </div>
    <p>
      到 <a href="http://ui-git.tenvine.net/qianduan/sgxq-mini-program" target="_blank">GIT</a> 下载 <em>sgxq-mini-program</em>
      的代码，将 <em>dist</em> 文件夹拷贝到自己的项目根目录上。删除 <em>dist/page</em> 目录和移动 <em>dist/static</em> 目录到根目录上。然后按照如下的方式使用组件，以 <em>Button</em> 为例，其它组件在对应的文档页查看：
    </p>
    <p>1. 添加需要的组件。在页面的 <em>json</em> 中配置：</p>
    <div class="code">
      <a @click="copy">Copy</a>
      <textarea :value="json"></textarea>
      <pre bg><code v-html="HLJSON(json)"></code></pre>
    </div>
    <p>2. 在 <em>wxml</em> 中使用组件：</p>
    <div class="card">
      <div class="code wxml">
        <a @click="copy">Copy</a>
        <textarea :value="wxml"></textarea>
        <pre><code v-html="HLHTML(wxml)"></code></pre>
      </div>
    </div>
    <div class="anchor">
      <h2>预览所有组件</h2>
    </div>
    <p>我们内置了所有组件的示例，您可以扫描右侧的二维码，申请体验。</p>
  </div>
</template>

<script>
  export default {
    name: 'Start',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-button": "/dist/components/button/button"
}`,
        wxml: `<sgxq-button type="primary" bind:click="handleClick">primary</sgxq-button>`
      }
    },
    mounted () {
      // console.log(this.HLJSON(this.json1));
      // console.log(this.HLHTML(this.wxml1));
    }
  }
</script>