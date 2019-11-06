<template>
  <div class="search-page">
    <h1>Image 图片</h1>
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
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-image": "/dist/components/image/image"
}`,
        wxml: `<sgxq-image></sgxq-image>`,

        propsTbody: [
          {
            label: 'src',
            type: 'String',
            introduce: '图片资源地址',
            default: '-'
          }, {
            label: 'default-src',
            type: 'String',
            introduce: '默认图片资源地址',
            default: '/static/images/bg_default.png'
          }, {
            label: 'custom-style',
            type: 'String',
            introduce: '自定义样式',
            default: '-'
          }, {
            label: 'mode',
            type: 'String',
            introduce: '图片裁剪、缩放的模式',
            default: 'scaleToFill'
          }, {
            label: 'webp',
            type: 'Boolean',
            introduce: '是否支持 <em>webP</em> 格式',
            default: 'false'
          }, {
            label: 'lazy-load',
            type: 'Boolean',
            introduce: '是否对图片做懒加载处理',
            default: 'false'
          }, {
            label: 'show-menu-by-longpress',
            type: 'Boolean',
            introduce: '是否开启长按图片显示识别小程序码菜单',
            default: 'false'
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
        eventsTbody: [
          {
            name: 'bind:load',
            introduce: '图片载入完毕时触发',
            return: '图片加载的信息'
          }, {
            name: 'bind:error',
            introduce: '图片加载失败时触发',
            return: '图片加载的信息'
          }
        ]
      }
    }
  }
</script>