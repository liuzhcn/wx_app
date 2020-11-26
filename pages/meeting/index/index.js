// pages/meeting/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [
      {
        name: "会议议程",
        icon: "/images/meeting/1.png",
        type: "inner",
        url: "/pages/meeting/agenda/agenda",
        auth: true,
        style: "padding:20px 0px 20px 40px"
      },
      {
        name: "会议资料",
        icon: "/images/meeting/2.png",
        type: "inner",
        url: "/pages/activity/meeting/meeting-baogao",
        auth: true,
        style: "padding:20px 40px 20px 0"        
      },
      {
        name: "会议建言",
        icon: "/images/meeting/3.png",
        type: "inner",
        url: "/pages/activity/meeting/meeting-xuanyan",
        auth: true,
        style: "padding:20px 0px 20px 40px"        
      },
      {
        name: "会议相册",
        icon: "/images/meeting/4.png",
        type: "inner",
        url: "/pages/activity/meeting/meeting-xiangce",
        auth: true,
        style: "padding:20px 40px 20px 0"        
      }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  openApp: function (e) {
    //打开
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },
})