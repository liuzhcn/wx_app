
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   isShow:false
  },
 
  onLoad: function () {
      // 登录
      wx.login({
          success: res => {
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
              wx.request({
                  url: 'https://wxapp.ccnu.edu.cn/wxapp/wxUser/getUserInfo',
                  data: {
                      code: res.code
                  },
                  success: result => {
                      console.log(result.data);

                      if (result.data.errcode == '0') {
                          getApp().globalData.token = result.data.token;
                          getApp().globalData.appUserInfo = result.data.userInfo;
                      } else {
                          getApp().globalData.token = null;
                          getApp().globalData.appUserInfo = null;
                      }

                  }

              })
          }
      })


  },
  onReady:function(){
    this.setData({
      isShow:true
    })
  }

})
