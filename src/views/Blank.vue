<template>
  <div class="search-page">
    <h1>Blank 空白</h1>
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
    <div class="anchor">
      <h2>Properties</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in propsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in propsTbody">
        <td v-for="th in propsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h2>Slot</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in slotThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in slotTbody">
        <td v-for="th in slotThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Blank',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-blank": "/dist/components/blank/blank"
}`,
        wxml: `<sgxq-blank>还没有收藏夹哦</sgxq-blank>
<sgxq-blank type="comment">暂无评论</sgxq-blank>
<sgxq-blank type="router">网络故障</sgxq-blank>
<sgxq-blank type="load">加载失败</sgxq-blank>
<sgxq-blank image="{{ false }}">还没有收藏夹哦</sgxq-blank>`,

        propsTbody: [
          {
            label: 'type',
            type: 'String',
            introduce: '图片的类型，可选值为 <em>empty</em>、<em>comment</em>、<em>router</em>、<em>load</em>',
            default: 'empty'
          }, {
            label: 'image',
            type: 'Boolean',
            introduce: '是否显示图片',
            default: 'true'
          }
        ],
        slotTbody: [
          {
            name: '无',
            introduce: '自定义文案'
          }
        ]
      }
    }
  }
</script>