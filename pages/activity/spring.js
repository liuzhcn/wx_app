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
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      isShow: false,
      speed_flag: false
    });
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
  // 自定义方法，摇一摇
  yaoyiyao: function () {
    console.log("speed2_11" + speed2_1);
    var that = this;
    //显示遮罩层
    this.setData({
      isShow: true
    });
    //播放摇一摇声音，
    innerAudioContext.loop = true;
    innerAudioContext.src = "https://wxapp.ccnu.edu.cn/wxapp/resource/showMusic?path=/spring/s.mp3";
    innerAudioContext.play();
    innerAudioContext.onPlay(() => { console.log('开始播放'); })
    innerAudioContext.onError((res) => { console.log(res.errMsg); console.log(res.errCode); })
    //1、监听加速度，判断是否摇成功
    let speed1 = { x: 0, y: 0, z: 0 };
    let speed2 = { x: 0, y: 0, z: 0 };
    let speed2_1 = 0;
    wx.startAccelerometer();
    wx.onAccelerometerChange(function (res) {
      //xyz每200ms取一次值,
      speed2_1 = Math.abs(speed2.x + speed2.y + speed2.z - speed1.x - speed1.y - speed1.z) / 0.2
      // console.log("speed差" + speed2_1);
      speed1.x = speed2.x;
      speed1.y = speed2.y;
      speed1.z = speed2.z;
      speed2.x = res.x;
      speed2.y = res.y;
      speed2.z = res.z;
      //速度超出阈值，则摇成功，否则，摇失败
      console.log("speed2_12" + speed2_1);
      if (speed2_1 > 12) {
        console.log("摇成功");
        //停止监听加速度
        wx.stopAccelerometer();
        //隐藏遮罩层
        that.setData({
          isShow: false,
          speed_flag: true
        });
        //停止播放摇一摇音乐
        innerAudioContext.loop = false;
        innerAudioContext.stop();
        innerAudioContext.destroy();
        speed2_1 = 0;
      } else {
        console.log("摇失败");
        //提示用大点力摇

      }
    });

      //每隔0.5秒，检测一次是否摇成功，speed_flag
      var isshowtoast = true;
      var x = setInterval(function () {
        //摇成功,清除定时器，跳转页面
        if (that.data.speed_flag == true) {
          that.setData({
            speed_flag: false
          });
          clearInterval(x);
          let num = Math.ceil(10 * Math.random());
          wx.navigateTo({
            url: "/pages/activity/spring_detail?num=" + num,
          });
        } else {
          if (isshowtoast == true) {
            wx.showToast({
              title: '请用力摇！',
              icon: 'none',
              duration: 2000,
            });
            isshowtoast = false; //重置为false，为了让toast只显示一次 
          }
        }
      }, 500);
  }
})