//index.js
//获取应用实例
Page({
  data: {
    show1: false,
    show2: false,
    show3: false
  },
  handleClick1 () {
    this.setData({
      show1: true
    });
  },
  handleClick2 () {
    this.setData({
      show2: true
    });
  },
  handleClose2 () {
    this.setData({
      show2: false
    });
  }
})
