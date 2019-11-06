<template>
  <div class="actionsheet-page">
    <h1>Dialog 弹窗</h1>
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
      <h2>Dialog Properties</h2>
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
      <h2>Dialog Events</h2>
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
      <h2>Dialog Slot</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in slotThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in slotTbody1">
        <td v-for="th in slotThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h2>HsDialog Properties</h2>
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
      <h2>HsDialog Events</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in eventsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in eventsTbody2">
        <td v-for="th in eventsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
    <div class="anchor">
      <h2>HsDialog Slot</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in slotThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in slotTbody2">
        <td v-for="th in slotThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Dialog',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-dialog": "/dist/dialog/dialog",
  "sgxq-hs-dialog": "/dist/hs-dialog/hs-dialog"
}`,
        wxml: `<sgxq-button
  bind:tap="handleClick1"
  type="linear"
  block>
  手工星球
</sgxq-button>
<sgxq-dialog title="手工星球" show="{{ show1 }}">
  <view class="img">
    <view class="img-default"></view>
  </view>
  <text class="text margin-t-5">敬请期待</text>
</sgxq-dialog>

<sgxq-button
  bind:tap="handleClick2"
  type="linear"
  block>
  底部弹出
</sgxq-button>
<sgxq-hs-dialog
  bind:confirm="handleClose2"
  bind:cancel="handleClose2"
  show="{{ show2 }}"
  title="底部弹出">
  <view class="img">
    <view class="img-default"></view>
  </view>
</sgxq-hs-dialog>`,
        java: `Page({
  data: {
    show1: false,
    show2: false,
    show3: false
  },
  handleClick1 () {
    this.setData({ show1: true });
  },
  handleClick2 () {
    this.setData({ show2: true });
  },
  handleClose2 () {
    this.setData({ show2: false });
  }
})`,

        propsTbody1: [
          {
            label: 'show',
            type: 'Boolean',
            introduce: '是否显示弹窗',
            default: 'false'
          }, {
            label: 'title',
            type: 'String',
            introduce: '弹窗标题的文案',
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
          }
        ],
        eventsTbody1: [
          {
            name: 'bind:close',
            introduce: '关闭弹窗时触发',
            return: '-'
          }
        ],
        slotTbody1: [
          {
            name: 'title',
            introduce: '自定义弹窗标题'
          }, {
            name: '无',
            introduce: '自定义弹窗的内容'
          }
        ],
        propsTbody2: [
          {
            label: 'show',
            type: 'Boolean',
            introduce: '是否显示弹窗',
            default: 'false'
          }, {
            label: 'title',
            type: 'String',
            introduce: '弹窗标题的文案',
            default: '-'
          }, {
            label: 'footer',
            type: 'Boolean',
            introduce: '是否显示自定义的 <em>footer</em> 部分',
            default: 'false'
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
            label: 'cancel-text',
            type: 'String',
            introduce: '取消按钮的文案',
            default: '取消'
          }, {
            label: 'confirm-text',
            type: 'String',
            introduce: '确定按钮的文案',
            default: '确定'
          }
        ],
        eventsTbody2: [
          {
            name: 'bind:close',
            introduce: '关闭弹窗时触发',
            return: '-'
          }, {
            name: 'bind:cancel',
            introduce: '点击取消按钮时触发',
            return: '-'
          }, {
            name: 'bind:confirm',
            introduce: '点击确定按钮时触发',
            return: '-'
          }
        ],
        slotTbody2: [
          {
            name: 'header',
            introduce: '自定义弹窗 <em>header</em> 部分'
          }, {
            name: '无',
            introduce: '自定义弹窗的内容'
          }, {
            name: 'footer',
            introduce: '自定义弹窗 <em>footer</em> 部分'
          }
        ]
      }
    }
  }
</script>