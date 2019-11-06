<template>
  <div class="search-page">
    <h1>SearchBar 搜索</h1>
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
    name: 'SearchBar',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-search-bar": "/dist/components/searchbar/searchbar"
}`,
        wxml: `<sgxq-search-bar></sgxq-search-bar>
<sgxq-search-bar focus="{{ true }}"></sgxq-search-bar>`,

        propsTbody: [
          {
            label: 'value',
            type: 'String',
            introduce: '输入框的内容',
            default: '-'
          }, {
            label: 'placeholder',
            type: 'String',
            introduce: '占位文本',
            default: '搜索'
          }, {
            label: 'focus',
            type: 'Boolean',
            introduce: '是否获取焦点',
            default: 'false'
          }, {
            label: 'cancel',
            type: 'Boolean',
            introduce: '是否显示取消按钮',
            default: 'true'
          }, {
            label: 'cancel-text',
            type: 'String',
            introduce: '取消按钮的文案',
            default: '取消'
          }
        ],
        eventsTbody: [
          {
            name: 'bind:clear',
            introduce: '点击清除图标时触发',
            return: '-'
          }, {
            name: 'bind:focus',
            introduce: '输入框获取焦点时触发',
            return: 'event.detail'
          }, {
            name: 'bind:blur',
            introduce: '输入框失去焦点时触发',
            return: 'event.detail'
          }, {
            name: 'bind:cancel',
            introduce: '点击取消按钮时触发',
            return: '-'
          }, {
            name: 'bind:input',
            introduce: '输入框输入时触发',
            return: 'event.detail'
          }, {
            name: 'bind:change',
            introduce: '绑定值改变时触发',
            return: 'event.detail'
          }
        ]
      }
    }
  }
</script>