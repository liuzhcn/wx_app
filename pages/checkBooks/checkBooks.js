// pages/checkBooks/checkBooks.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book_flag : 1,
    reader : {},
    booking : {},
    booked : {}, 
  },
  book_ing:function(){
    this.setData({
      book_flag : 1
    });    
  },
  book_ed:function(){
    this.setData({
      book_flag : 2
    });    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
     
      console.log(app.globalData.token);   
      //获取读者信息
        wx.request({
          url: "https://wxapp.ccnu.edu.cn/wxapp/wxLibrary/dz",
          dataType: "json",
          data:{
            token:app.globalData.token,
          },
          success:function(res) {
            console.log(res.data);
            that.setData({
              reader : res.data,
            })
          }
        });
      //获取正在借阅信息
        wx.request({
          url: "https://wxapp.ccnu.edu.cn/wxapp/wxLibrary/jy",
          dataType: "json",
          data: {
            token: app.globalData.token,
          },
          success: function (res) {
            console.log(res.data);
            that.setData({
              booking : res.data,
            })
          }
        });

        //获取历史借阅信息
        wx.request({
          url: "https://wxapp.ccnu.edu.cn/wxapp/wxLibrary/jyls",
          dataType: "json",
          data: {
            token: app.globalData.token,
          },
          success: function (res) {
            console.log(res.data);
            that.setData({
              booked: res.data,
            })
          }
        });
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