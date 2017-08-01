var app = getApp();
Page({
  data: {
    userInfo: {}
  },
  onTap: function (event) {
    wx.switchTab({
      url: '../tujian-family/tujian-family'
    })
  },
  onLoad: function () {
    wx.showNavigationBarLoading();
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      wx.hideNavigationBarLoading();
    })
  }
})