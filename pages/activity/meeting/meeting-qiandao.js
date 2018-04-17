// pages/activity/meeting/meeting-qiandao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //进页面先扫码,扫码成功再填表单
    let code = "";
    wx.login({//获取code
      success: function (res) {
        console.log(res.code);
        code = res.code;
        wx.scanCode({//扫码获取接口地址
          success: function (res) {
            console.log(res);
            wx.request({//传code
              url: res.result + "?code=" + code,
              method: 'POST',
              dataType: 'json',
              success: function (res) {//回调,签到成功则继续填写表单数据
                console.log(res.data);
                
              },
              fail: function (res) {
                console.log(res);                
               }
            })
          },
          fail: function (res) {
            console.log("扫码失败");          
           }
        })
      },
      fail: function (res) {
        console.log("调用login失败");
       }
    })



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