// pages/song/song.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // ip: 'http://192.168.5.7',
    ip: 'http://172.20.10.8',
    port: ':3333',
    DNS:':2222',
    songList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    wx.request({
      url: this.data.ip + this.data.port + '/musicList/find', 
      data: {
        submitType: "findJoin",
        ref: ["songList", ""]
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        for(let item of res.data){
          if (item._id == id){
            this.setData({
              songList:item.songList
            })
          }
        }
      }.bind(this)
    })
  },
  //播放歌曲
  playSong(event){
    let url = event.target.dataset.url;
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.src = this.data.ip +this.data.DNS+url // 设置了 src 之后会自动播放
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})