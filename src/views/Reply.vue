<template>
  <div class="search-page">
    <h1>Reply 评论</h1>
    <div class="anchor">
      <h2>概述</h2>
    </div>
    <p>基础组件。</p>
    <div class="anchor">
      <h2>使用指南</h2>
    </div>
    <p>在页面的 <em>json</em> 文件中引入组件：</p>
    <div class="code">
      <a @click="copy">Copy</a>
      <textarea :value="json"></textarea>
      <pre bg><code v-html="HLJSON(json)"></code></pre>
    </div>
    <div class="anchor">
      <h2>Example</h2>
    </div>
    <p>在页面的 <em>wxml</em> 中使用组件：</p>
    <div class="card">
      <div class="code wxml">
        <a @click="copy">Copy</a>
        <textarea :value="wxml"></textarea>
        <pre><code v-html="HLHTML(wxml)"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Reply',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-reply": "/dist/components/reply/reply"
}`,
        wxml: `<sgxq-reply></sgxq-reply>`
      }
    }
  }
</script>