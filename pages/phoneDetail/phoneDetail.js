// pages/phoneDetail/phoneDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
     groupName: '',
     name: '',
     tel: '',
     tel1: '',
     tel2: ''
    }
  },
  add_phone:function() {
    var that = this;
    wx.addPhoneContact({
      firstName: that.data.info.name,
      remark: that.data.info.groupName,
      mobilePhoneNumber:that.data.info.tel,
      workPhoneNumber: that.data.info.tel1,
      homePhoneNumber: that.data.info.tel2,
    })
  },
  call:function(event) {
    var that = this;
    var tel = event.currentTarget.dataset.tel;
    wx.showModal({
      title: '提示',
      content: "确认拨打 " + tel + " 吗？",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.makePhoneCall({
            phoneNumber: tel
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
   
    this.setData({
      info:options
    })
    console.log(this.data.info);
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