import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    },

    {
      path: '/',
      redirect: '/start'
    },
    {
      path: '/start',
      name: 'Start',
      component: () => import('./views/Start.vue')
    },
    {
      path: '/actionsheet',
      name: 'Actionsheet',
      component: () => import('./views/Actionsheet.vue')
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () => import('./views/Blank.vue')
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('./views/Button.vue')
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import('./views/Card.vue')
    },
    {
      path: '/cell',
      name: 'Cell',
      component: () => import('./views/Cell.vue')
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => import('./views/Dialog.vue')
    },
    {
      path: '/image',
      name: 'Image',
      component: () => import('./views/Image.vue')
    },
    {
      path: '/more',
      name: 'More',
      component: () => import('./views/More.vue')
    },
    {
      path: '/reply',
      name: 'Reply',
      component: () => import('./views/Reply.vue')
    },
    {
      path: '/search-bar',
      name: 'SearchBar',
      component: () => import('./views/SearchBar.vue')
    },
    {
      path: '/star',
      name: 'Star',
      component: () => import('./views/Star.vue')
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: () => import('./views/Tabs.vue')
    }
  ]
});
