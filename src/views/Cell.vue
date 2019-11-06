<template>
  <div class="search-page">
    <h1>Cell 布局</h1>
    <div class="anchor">
      <h2>概述</h2>
    </div>
    <p>布局组件。</p>
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
    name: 'Cell',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-cell": "/dist/components/cell/cell"
}`,
        wxml: `<sgxq-cell title="这是header" footer="这是footer"></sgxq-cell>
<sgxq-cell value="这是body" footer="这是footer"></sgxq-cell>

<sgxq-cell>
  <block slot="icon">
    <view class="img">
      <view class="img-default"></view>
    </view>
  </block>
</sgxq-cell>`,

        propsTbody: [
          {
            label: 'title',
            type: 'String',
            introduce: '<em>header</em> 部分的文案',
            default: '-'
          }, {
            label: 'value',
            type: 'String',
            introduce: '<em>body</em> 部分的文案',
            default: '-'
          }, {
            label: 'footer',
            type: 'String',
            introduce: '<em>footer</em> 部分的文案',
            default: '-'
          }, {
            label: 'footer-class',
            type: 'String',
            introduce: '自定义 <em>footer</em> 的类名',
            default: '-'
          }, {
            label: 'icon',
            type: 'String',
            introduce: '图片地址，图片将在 <em>header</em> 部分呈现',
            default: '-'
          }, {
            label: 'icon-class',
            type: 'String',
            introduce: '自定义 <em>header</em> 的类名',
            default: '-'
          }, {
            label: 'hover',
            type: 'Boolean',
            introduce: '是否呈现点击态效果',
            default: 'false'
          }, {
            label: 'inline',
            type: 'Boolean',
            introduce: '左右布局还是上下布局(<em warning>未实现</em>)',
            default: 'true'
          }
        ],
        slotTbody: [
          {
            name: 'icon',
            introduce: '自定义 <em>header</em> 部分(图标)'
          }, {
            name: 'title',
            introduce: '自定义 <em>header</em> 部分(文案)'
          }, {
            name: '无',
            introduce: '自定义 <em>body</em> 部分'
          }, {
            name: 'footer',
            introduce: '自定义 <em>footer</em> 部分'
          }
        ]
      }
    }
  }
</script>