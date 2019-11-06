<template>
  <div class="affix">
    <div class="catalogue">
      <div class="catalogue-title">目录</div>
      <div
        v-for="(item, i) in list"
        @click="handleClick(i)"
        class="catalogue-item"
        :key="i">
        {{ item }}
      </div>
    </div>
    <div class="wx-code">
      <img src="../assets/wx-code.jpg" alt="code">
      <span>微信扫描体验</span>
    </div>
  </div>
</template>

<script>
  import { scrollIntoView } from '../utils';

  export default {
    name: 'Affix',
    data () {
      return {
        list: []
      }
    },
    watch: {
      '$route': 'getAnchors'
    },
    methods: {
      getAnchors () {
        const anchors = document.querySelectorAll('div.anchor');
        this.list = [...anchors].map(item => item.innerText);
      },
      handleClick (index) {
        const anchor = document.querySelectorAll('div.anchor')[index];
        scrollIntoView(anchor);
      }
    }
  }
</script>