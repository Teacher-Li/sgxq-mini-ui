<template>
  <div class="search-page">
    <h1>Tabs 标签页</h1>
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
    <div class="card" vertical>
      <div class="code wxml">
        <a @click="copy">Copy</a>
        <textarea :value="wxml"></textarea>
        <pre><code v-html="HLHTML(wxml)"></code></pre>
      </div>
      <div class="code java">
        <a @click="copy">Copy</a>
        <textarea :value="java"></textarea>
        <pre><code v-html="HTJAVA(java)"></code></pre>
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
      <h2>Events</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in eventsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in eventsTbody">
        <td v-for="th in eventsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-tabs": "/dist/components/tabs/tabs"
}`,
        wxml: `<sgxq-tabs tabs="{{ tabs }}"></sgxq-tabs>`,
        java: `Page({
  data: {
    tabs: [
      { title: '全部', key: '0' },
      { title: '世界', key: '1' },
      { title: '装备', key: '2' },
      { title: '工具', key: '3' },
      { title: '建筑', key: '4' },
      { title: '科学', key: '5' },
      { title: '材料', key: '6' }
    ]
  }
})`,

        propsTbody: [
          {
            label: 'tabs',
            type: 'Array',
            introduce: '标签页列表',
            default: '[]'
          }, {
            label: 'active',
            type: 'String',
            introduce: '当前所在的标签的 key 值',
            default: '标签页列表内第一个标签页的 <em>key</em> 值'
          }, {
            label: 'extra-padding',
            type: 'Number',
            introduce: '下划线的偏移量',
            default: '0'
          }
        ],
        eventsTbody: [
          {
            name: 'bind:click',
            introduce: '点击某一标签时触发',
            return: '{ key, title }'
          }, {
            name: 'bind:change',
            introduce: '切换标签时触发',
            return: '{ key, title }'
          }
        ]
      }
    }
  }
</script>