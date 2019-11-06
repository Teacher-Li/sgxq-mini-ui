<template>
  <div class="search-page">
    <h1>Button 按钮</h1>
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
      <h2>Button Properties</h2>
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
      <h2>Button Events</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in eventsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in eventsTbody1">
        <td v-for="th in eventsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h2>ButtonGroup Properties</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in propsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in propsTbody2">
        <td v-for="th in propsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h2>ButtonGroup Events</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in eventsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in eventsTbody2">
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
  "sgxq-button": "/dist/components/button/button",
  "sgxq-button-group": "/dist/components/button-group/button-group"
}`,
        wxml: `<sgxq-button>default</sgxq-button>
<sgxq-button type="primary">primary</sgxq-button>
<sgxq-button type="linear">linear</sgxq-button>

<sgxq-button disabled>disabled</sgxq-button>
<sgxq-button loading>loading</sgxq-button>
<sgxq-button plain>plain</sgxq-button>
<sgxq-button type="primary" block>block</sgxq-button>

<sgxq-button type="primary" size="small">small</sgxq-button>
<sgxq-button type="primary" size="middle">middle</sgxq-button>
<sgxq-button type="primary" size="large">large</sgxq-button>

<sgxq-button-group buttons="{{ buttons }}"></sgxq-button-group>`,
        java: `Page({
  data: {
    buttons: [
      { value: '1', text: '道具' },
      { value: '2', text: '生物' },
      { value: '3', text: '奇异星球' },
      { value: '4', text: '增益' }
    ]
  }
})`,

        propsTbody1: [
          {
            label: 'id',
            type: 'String',
            introduce: '按钮的 <em>id</em>',
            default: '-'
          }, {
            label: 'lang',
            type: 'String',
            introduce: '指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文',
            default: 'en'
          }, {
            label: 'type',
            type: 'String',
            introduce: '按钮的类型',
            default: 'default'
          }, {
            label: 'size',
            type: 'String',
            introduce: '按钮的尺寸',
            default: 'auto'
          }, {
            label: 'plain',
            type: 'Boolean',
            introduce: '是否朴素按钮',
            default: 'false'
          }, {
            label: 'disabled',
            type: 'Boolean',
            introduce: '是否禁用状态',
            default: 'false'
          }, {
            label: 'block',
            type: 'Boolean',
            introduce: '是否设置 <em>display</em> 为 <em>block</em>',
            default: 'false'
          }, {
            label: 'loading',
            type: 'Boolean',
            introduce: '是否加载中状态',
            default: 'false'
          }, {
            label: 'custom-style',
            type: 'String',
            introduce: '自定义按钮样式',
            default: '-'
          }, {
            label: 'color',
            type: 'String',
            introduce: '当开启 <em>plain</em> 时，将设置文案颜色，否则设置背景颜色',
            default: '-'
          }, {
            label: 'open-type',
            type: 'String',
            introduce: '微信开发能力',
            default: '-'
          }, {
            label: 'app-parameter',
            type: 'String',
            introduce: '打开 APP 时，向 APP 传递的参数',
            default: '-'
          }, {
            label: 'send-message-title',
            type: 'String',
            introduce: '会话内消息卡片标题',
            default: '-'
          }, {
            label: 'send-message-path',
            type: 'String',
            introduce: '会话内消息卡片点击跳转小程序路径',
            default: '-'
          }, {
            label: 'send-message-img',
            type: 'String',
            introduce: '会话内消息卡片图片',
            default: '-'
          }, {
            label: 'send-message-card',
            type: 'Boolean',
            introduce: '显示会话内消息卡片',
            default: 'false'
          }, {
            label: 'session-from',
            type: 'String',
            introduce: '会话来源',
            default: '-'
          }
        ],
        eventsTbody1: [
          {
            name: 'bind:click',
            introduce: '点击按钮时触发',
            return: 'event'
          }, {
            name: 'bind:getuserinfo',
            introduce: '获取用户信息',
            return: 'event'
          }, {
            name: 'bind:contact',
            introduce: '打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以获得具体信息',
            return: 'event'
          }, {
            name: 'bind:error',
            introduce: '当使用开放能力时，发生错误的回调',
            return: 'event'
          }, {
            name: 'bind:getPhoneNumber',
            introduce: '获取用户手机号',
            return: 'event'
          }, {
            name: 'bind:launchapp',
            introduce: '打开 APP，可以通过 <em>app-parameter</em> 属性设定向 APP 传的参数具体说明',
            return: 'event'
          }, {
            name: 'bind:opensetting',
            introduce: '打开授权设置页',
            return: 'event'
          }
        ],
        propsTbody2: [
          {
            label: 'value',
            type: 'String',
            introduce: '当前 <em>active</em> 状态的按钮的绑定值',
            default: '按钮列表内第一个按钮的 <em>value</em> 值'
          }, {
            label: 'buttons',
            type: 'Array',
            introduce: '按钮列表',
            default: '[]'
          }
        ],
        eventsTbody2: [
          {
            name: 'bind:click',
            introduce: '点击某一按钮时触发',
            return: 'value'
          }
        ]
      }
    }
  }
</script>