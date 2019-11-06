//index.js
//获取应用实例
Page({
  data: {
    show1: false,
    show2: false,

    actions1: [
      { text: '满心期待', value: 1, icon: '' },
      { text: '美美的赞一个', value: 2, icon: '' }
    ],
    actions2: [
      'slot1',
      'slot2'
    ]
  },
  handleClick1 () {
    this.setData({ show1: true });
  },
  handleClick2 () {
    this.setData({ show2: true });
  }
})
