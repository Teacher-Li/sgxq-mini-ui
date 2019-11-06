import Vue from 'vue';
import App from './App.vue';
import router from "./router";

import leo from 'leo-ui';
import mixins from './mixins';

import './styles/index.less';

Vue.mixin(mixins);
Vue.use(leo, { prefixCls: 'sgxq' });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
