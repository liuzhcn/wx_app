// pages/activity/spring_detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const innerAudioContext = wx.createInnerAudioContext();
    var num = Number(options.num);
    this.setData({
      num: num
    });
    innerAudioContext.src = "/images/r.mp3";
    innerAudioContext.play();
    innerAudioContext.onPlay(() => {
      console.log('开始播放');
      setTimeout(function(){
        innerAudioContext.stop();
        innerAudioContext.destroy();
      },1500)
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    wx.showShareMenu({
      withShareTicket: true
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
    // innerAudioContext.destroy();
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
  onShareAppMessage: function (res) {
    console.log(res);
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我在华师小程序玩新年抽签活动,快来一起玩吧！',
      path: '/pages/activity/spring',
      success: function (res) {
        console.log(res);
        // 转发成功
        wx.showToast({
          title: '转发成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log(res);
        wx.showToast({
          title: '转发失败',
          icon: 'success',
          duration: 2000
        })
      }
    }
  },
  // 自定义方法，回到上一页再抽，
  zaichou: function () {
    console.log("666666666666");
    wx.navigateBack({
      delta: 1
    })
  },
  //分享抽到的签


})