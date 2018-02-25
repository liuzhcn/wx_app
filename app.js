//app.js
App({
  onLaunch: function () {
 
   
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
/**华中师范大学数据 
  globalData: {
    userInfo: null,
    appUserInfo: null,
    token: null,
    contextPath:'https://wxapp.ccnu.edu.cn/wxapp',
    mapPoint:{
        latitude: 30.517330,
        longitude: 114.360600,
    }
  }
  */
/** 九江学院数据*/
    globalData: {
      userInfo: null,
      appUserInfo: null,
      token: null,
      contextPath: 'https://small.sibetech.cn/wxapp',
      mapPoint: {
          latitude: 29.710460,
          longitude: 115.995400
      }
    }

})