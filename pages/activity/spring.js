// pages/activity/spring.js
const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,//true为显示遮罩层
    speed_flag: false//true为摇成功了
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
    this.setData({
      isShow: false,
      speed_flag: false
    });
    this.startListen();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      isShow: false,
      speed_flag: false
    });
    innerAudioContext.loop = false;
    innerAudioContext.stop();
    innerAudioContext.destroy();
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
  
  /*监听摇动事 */
  startListen:function(){
   
    var that = this;
    //进入页面就开始监控加速度
    var speed1 = { x: 0, y: 0, z: 0 };
    var speed2 = { x: 0, y: 0, z: 0 };
    var speed2_1 = 0;
    wx.startAccelerometer();
    wx.onAccelerometerChange(function (res) {
      console.log("speed差>" + speed2_1);
      speed1.x = speed2.x;
      speed1.y = speed2.y;
      speed1.z = speed2.z;
      speed2.x = res.x;
      speed2.y = res.y;
      speed2.z = res.z;
      //xyz每200ms取一次值,
      speed2_1 = Math.abs(speed2.x + speed2.y + speed2.z - speed1.x - speed1.y - speed1.z) / 0.2
      //速度超出阈值，则摇成功，停止监听加速度，播放摇一摇音乐，显示动画，3秒后停止播放摇一摇音乐，隐藏动画，跳转页面
      console.log("speed2_12>" + speed2_1);
      if ((speed2_1 > 12) && (that.data.speed_flag == false)) {
        console.log("摇成功");
        wx.stopAccelerometer({
            success: function () {
                
            },
            fail: function () {
                console.log("fail to stopAccelerometer");
            }
        });
        
        that.setData({
          isShow: true,
          speed_flag: true
        });
        innerAudioContext.loop = true;
        innerAudioContext.src = "/audios/s.mp3";
        innerAudioContext.play();
        setTimeout(function(){
          
          innerAudioContext.loop = false;
          innerAudioContext.stop();
          innerAudioContext.destroy();

          let num = Math.ceil(10 * Math.random());
          wx.navigateTo({
              url: "/pages/activity/spring_detail?num=" + num,
          });

        },3000)
        
      }
    });
  }
})