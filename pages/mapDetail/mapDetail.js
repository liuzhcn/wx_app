// pages/mapDetail/mapDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;
    var mapKindFlag = options.mapKindFlag;
    var markerId = options.markerId;
    //读缓存
    wx.getStorage({
      key: 'mapInfo',
      success: function(res) {
        console.log(res.data[mapKindFlag].MapItem[markerId]);
        that.setData({
          info: res.data[mapKindFlag].MapItem[markerId]
        })
      },
    })
  },
  checkRoute:function(){
    var latitude = parseFloat(this.data.info.wd);
    var longitude = parseFloat(this.data.info.jd);
    var name = this.data.info.name;
    console.log(latitude);
    console.log(longitude);
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: name
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