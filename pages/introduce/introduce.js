// pages/introduce/introduce.js

var WxParse = require('../../wxParse/wxParse.js');

var sliderWidth = 96;

Page({

  /**
   * 页面的初始数据
   */
  data: {
      tabs:["学校介绍","百年校史","华大标识"],
      activeIndex : 0,
      sliderOffset : 0,
      sliderLeft : 0,
      introduceText:'',
      historyText:'',
      leadersText:'',
      logoText:''  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    wx.request({
        url: 'https://wxapp.ccnu.edu.cn/wxapp/schoolInfo/api/info',
        success:function(res){
            console.log(res);
            WxParse.wxParse('introduceText', 'html', res.data.introduceText,that);
            WxParse.wxParse('historyText', 'html', res.data.historyText, that);
            WxParse.wxParse('logoText', 'html', res.data.logoText, that);
        }
    });
    // wx.request({
    //     url: 'https://wxapp.ccnu.edu.cn/wxapp/schoolInfo/api/info?type=1',
    //     success: function (res) {
    //         console.log(res);
    //         WxParse.wxParse('historyText', 'html', res.data.content, that);
    //     }
    // });
  
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

  tabClick:function(e){
    this.setData({
      activeIndex:e.currentTarget.id,
       sliderOffset: e.currentTarget.offsetLeft
    });
  }
})