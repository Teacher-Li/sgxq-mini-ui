<template>
  <div class="search-page">
    <h1>Card 卡片</h1>
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
      <h2>CardBox Properties</h2>
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
      <h2>CardRes Properties</h2>
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
      <h2>CardTopic Properties</h2>
    </div>
    <o-table>
      <tr slot="thead">
        <th v-for="th in propsThead">{{ th.label }}</th>
      </tr>
      <tr v-for="td in propsTbody3">
        <td v-for="th in propsThead" v-html="td[th.value]"></td>
      </tr>
    </o-table>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data () {
      return {
        json: `"usingComponents": {
  "sgxq-card-box": "/dist/components/card/card-box/card-box",
  "sgxq-card-res": "/dist/components/card/card-res/card-res",
  "sgxq-card-topic": "/dist/components/card/card-topic/card-topic"
}`,
        wxml: `<sgxq-card-box>
  <view class="img">
    <view class="img-default"></view>
  </view>
</sgxq-card-box>

<sgxq-card-res res-cover="/static/images/bg_default.png"></sgxq-card-res>

<sgxq-card-topic></sgxq-card-topic>`,

        propsTbody1: [
          {
            label: 'hover',
            type: 'Boolean',
            introduce: '是否呈现点击态效果',
            default: 'false'
          }
        ],
        propsTbody2: [
          {
            label: 'card-type',
            type: 'String',
            introduce: '卡片的类型，可选为 <em>map</em> 和 <em>des</em>',
            default: 'map'
          }, {
            label: 'title',
            type: 'String',
            introduce: '标题的文案',
            default: '荒岛求生'
          }, {
            label: 'date',
            type: 'String',
            introduce: '卡片的日期',
            default: '2019/04/01'
          }, {
            label: 'map-type',
            type: 'String',
            introduce: '玩法地图的标签',
            default: '枪战'
          }, {
            label: 'des-type',
            type: 'String',
            introduce: '设计图的标签',
            default: '像素风格'
          }, {
            label: 'des-size',
            type: 'String',
            introduce: '设计图的尺寸',
            default: '10*10'
          }, {
            label: 'res-cover',
            type: 'String',
            introduce: '卡片 <em>body</em> 部分的图片地址',
            default: '-'
          }, {
            label: 'heat',
            type: 'Number',
            introduce: '卡片的火热度',
            default: '0'
          }
        ],
        propsTbody3: [
          {
            label: 'card-type',
            type: 'String',
            introduce: '卡片的类型(<em warning>未实现</em>)',
            default: '0'
          }, {
            label: 'is-video',
            type: 'Boolean',
            introduce: '是否是视频卡片',
            default: 'false'
          }, {
            label: 'has-watch',
            type: 'Number',
            introduce: '浏览量',
            default: '0'
          }, {
            label: 'has-commit',
            type: 'Number',
            introduce: '评论量',
            default: '0'
          }, {
            label: 'img-list',
            type: 'Array',
            introduce: '图片列表(<em warning>未实现</em>)',
            default: '[]'
          }, {
            label: 'content',
            type: 'String',
            introduce: '卡片内容的文案',
            default: '-'
          }
        ]
      }
    }
  }
</script>