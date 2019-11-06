<template>
  <div id="app">

    <Header></Header>

    <div class="body">
      <div class="wrapper">

        <Sider></Sider>

        <Affix></Affix>

        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sider from './components/Sider.vue';
  import Affix from './components/Affix.vue';
  import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      Sider,
      Affix,
      Header
    },
    mounted () {
      this.$Indicator.init();
    }
  }
</script>