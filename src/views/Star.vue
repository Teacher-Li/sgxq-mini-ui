<template>
  <div class="search-page">
    <h1>Star 评分</h1>
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
      <h2>Star Properties</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in propsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in propsTbody1">
        <td v-for="th in propsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h2>StarList Properties</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in propsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in propsTbody2">
        <td v-for="th in propsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Star',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-star": "/dist/components/star/star",
  "sgxq-star-list": "/dist/components/star/star"
}`,
        wxml: `<sgxq-star-list value="2.5"></sgxq-star-list>`,

        propsTbody1: [
          {
            label: 'prefixCls',
            type: 'String',
            introduce: '自定义类名',
            default: '-'
          }, {
            label: 'value',
            type: 'Number',
            introduce: '评分绑定的值',
            default: '-'
          }, {
            label: 'count',
            type: 'Number',
            introduce: '总评分值',
            default: '5'
          }, {
            label: 'index',
            type: 'Number',
            introduce: '当前下标值',
            default: '-'
          }
        ],
        propsTbody2: [
          {
            label: 'value',
            type: 'Number',
            introduce: '评分绑定的值',
            default: '-'
          }, {
            label: 'count',
            type: 'Number',
            introduce: '总评分值',
            default: '5'
          }
        ]
      }
    }
  }
</script>