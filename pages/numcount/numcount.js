// pages/numcount/numcount.js
Page({
  data: {
    ip:'http://172.20.10.8',
    express:':3333',
    count:0
  },
  countDec(){
    this.setData({
      count:this.data.count - 1
    })
  },
  countAdd(){
    this.setData({
      count: this.data.count + 1
    })
  },
  getData(){
    wx.request({
      url: this.data.ip+this.data.express+'/hotMovie/find', 
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})