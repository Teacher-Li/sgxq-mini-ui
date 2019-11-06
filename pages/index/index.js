//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      { key: 'actionsheet', text: 'Actionsheet 上拉菜单' },
      { key: 'blank', text: 'Blank 空白' },
      { key: 'button', text: 'Button 按钮' },
      { key: 'card', text: 'Card 卡片' },
      { key: 'cell', text: 'Cell 布局' },
      { key: 'dialog', text: 'Dialog 弹窗' },
      { key: 'image', text: 'Image 图片' },
      { key: 'more', text: 'More 更多' },
      { key: 'reply', text: 'Reply 评论' },
      { key: 'search-bar', text: 'SearchBar 搜索' },
      { key: 'star', text: 'Star 评分' },
      { key: 'tabs', text: 'Tabs 标签页' }
    ]
  },

  onLoad () {

  },

  onShow () {

  },

  go (e) {
    wx.navigateTo({
      url: `/pages/${ e.currentTarget.dataset.url }/index`
    })
  }
})
