<template>
  <div class="actionsheet-page">
    <h1>Actionsheet 上拉菜单</h1>
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
    <p>在页面的 <em>wxml</em> 和 <em>js</em> 中使用：</p>
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
    name: 'Actionsheet',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-actionsheet": "/dist/actionsheet/actionsheet"
}`,
        wxml: `<sgxq-actionsheet
  title="对手工星球有什么想说的"
  actions="{{ actions1 }}"
  show="{{ show1 }}">
</sgxq-actionsheet>

<sgxq-actionsheet actions="{{ actions2 }}" show="{{ show2 }}">
  <view slot="slot1" class="flex-center action-item">
    <view class="icon icon-share"></view>
    <text class="text">分享</text>
  </view>
  <view slot="slot2" class="flex-center action-item last">
    <view class="icon icon-favor"></view>
    <text class="text">收藏</text>
  </view>
</sgxq-actionsheet>`,
        java: `Page({
  data: {
    show1: false,
    show2: false,

    actions1: [
      { text: '满心期待', value: 1 },
      { text: '美美的赞一个', value: 2 }
    ],
    actions2: ['slot1', 'slot2']
  },
  handleClick1 () {
    this.setData({ show1: true });
  },
  handleClick2 () {
    this.setData({ show2: true });
  }
})`,

        propsTbody: [
          {
            label: 'show',
            type: 'Boolean',
            introduce: '是否显示上拉菜单',
            default: 'false'
          }, {
            label: 'actions',
            type: 'Array',
            introduce: '菜单列表',
            default: '[]'
          }, {
            label: 'title',
            type: 'String',
            introduce: '标题的文案',
            default: '-'
          }, {
            label: 'mask',
            type: 'Boolean',
            introduce: '是否显示遮罩层',
            default: 'true'
          }, {
            label: 'mask-closable',
            type: 'Boolean',
            introduce: '是否开启点击遮罩层来关闭上拉菜单',
            default: 'true'
          }, {
            label: 'show-cancel',
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
            name: 'bind:actiontap',
            introduce: '点击菜单选项时触发',
            return: '{ value, groupindex, index }'
          }, {
            name: 'bind:close',
            introduce: '关闭上拉菜单时触发',
            return: '-'
          }
        ],
        slotTbody: [
          {
            name: 'title',
            introduce: '自定义标题'
          }, {
            name: '无(自定义)',
            introduce: '自定义菜单项，需要在菜单列表里提供 <em>slot</em> 名称'
          }
        ]
      }
    }
  }
</script>