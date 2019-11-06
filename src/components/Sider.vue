<template>
  <div class="sider">
    <div class="navigate">
      <router-link
        class="navigate-item"
        active-class="active"
        v-for="item in list"
        :key="item.key"
        :to="item.url"
        tag="div">
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sider',
    data () {
      return {
        list: [
          { key: 'Start', label: '快速上手', url: '/start' },
          { key: 'Actionsheet', label: 'Actionsheet 上拉菜单', url: '/actionsheet' },
          { key: 'Blank', label: 'Blank 空白', url: '/blank' },
          { key: 'Button', label: 'Button 按钮', url: '/button' },
          { key: 'Card', label: 'Card 卡片', url: '/card' },
          { key: 'Cell', label: 'Cell 布局', url: '/cell' },
          { key: 'Dialog', label: 'Dialog 弹窗', url: '/dialog' },
          { key: 'Image', label: 'Image 图片', url: '/image' },
          { key: 'More', label: 'More 更多', url: '/more' },
          { key: 'Reply', label: 'Reply 评论', url: '/reply' },
          { key: 'SearchBar', label: 'SearchBar 搜索', url: '/search-bar' },
          { key: 'Star', label: 'Star 评分', url: '/star' },
          { key: 'Tabs', label: 'Tabs 标签页', url: '/tabs' }
        ]
      }
    },
    watch: {
      '$route' (newValue) {
        const route = this.list.find(item => item.key === newValue.name);

        document.title = route ? route.label : '403';
      }
    }
  }
</script>