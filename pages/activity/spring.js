// pages/activity/spring.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.startAccelerometer();
    wx.onAccelerometerChange(function (res) {
      console.log(res.x)
      console.log(res.y)
      console.log(res.z)
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
  
  },
  // 自定义方法，摇一摇
  yaoyiyao:function(){
    var that = this;
  //显示遮罩层
  this.setData({
    isShow:true
  })

  //播放摇一摇声音，摇成功了的声音
  const innerAudioContext = wx.createInnerAudioContext();
  innerAudioContext.autoplay = true;
  innerAudioContext.src = "https://wxapp.ccnu.edu.cn/wxapp/resource/showMusic?path=/spring/s.mp3";
  innerAudioContext.onPlay(() => {
    console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
  //显示摇到的图片取1-10之间的数
  let num = Math.ceil(10*Math.random());

  setTimeout(function(){
    that.setData({
      isShow: false
    })
    wx.navigateTo({
      url: "/pages/activity/spring_detail?num=" + num,
    });
    
  },3000)
    
  }
})