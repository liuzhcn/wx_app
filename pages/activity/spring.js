// pages/activity/spring.js
const app = getApp();
const innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.loop = false;
innerAudioContext.src = "/audios/s.mp3";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,//true为显示遮罩层
    speed_flag: false,//true为摇成功了
    isqiandao: "",
    height:'',
    grids: [
      {
        name: "会议议程",
        icon: "/images/huiyiyicheng.png",
        type: "inner",
        url: "/pages/activity/meeting/meeting-yicheng",
        auth: true,
        style: "padding:20px 0px 20px 40px"
      },
      {
        name: "发展报告",
        icon: "/images/fazhanbaogao.png",
        type: "inner",
        url: "/pages/activity/meeting/meeting-baogao",
        auth: true,
        style: "padding:20px 40px 20px 0"        
      },
      {
        name: "会议宣言",
        icon: "/images/huiyixuanyan.png",
        type: "inner",
        url: "/pages/activity/meeting/meeting-xuanyan",
        auth: true,
        style: "padding:20px 0px 20px 40px"        
      },
      {
        name: "会议相册",
        icon: "/images/huiyixiangce.png",
        type: "inner",
        url: "/pages/activity/meeting/meeting-xiangce",
        auth: true,
        style: "padding:20px 40px 20px 0"        
      },
      // {
      //   name: "会议报名",
      //   icon: "/images/huiyibaoming.png",
      //   type: "inner",
      //   url: "/pages/activity/meeting/meeting-baoming",
      //   auth: true
      // },
      // {
      //   name: "会议签到",
      //   icon: "/images/huiyiqiandao.png",
      //   type: "web",
      //   url: "/pages/activity/meeting/meeting-qiandao",
      //   auth: false
      // },
     
     
      

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    

    //看用户 的校园活动是否已签到
    wx.login({
      success: function (res) {
        console.log(res.code);
        wx.request({
          url: app.globalData.api.isQiandao + "?code=" + res.code,
          method: 'POST',
          dataType: 'json',
          success: function (res) {
            console.log(res.data);
            if (res.data.errcode == '0' && res.data.sign != null) {//说明已经签到了，直接进入四宫格界面
                // app.globalData.qiandao == true;
                app.globalData.sign = res.data.sign;
            } else {//否则没签到，进入签到页面，填表
              // app.globalData.qiandao == false;
              wx.reLaunch({
                url: '/pages/activity/meeting/meeting-qiandaoanniu'
              })
            }
          },
          fail: function (res) {
            console.log(res);
           }
        })
      }
    })

    
    // this.setData({
    //   isqiandao: app.globalData.qiandao
    // })
    // if (this.data.isqiandao == true) {
    //   wx.reLaunch({
    //     url: '/pages/activity/spring'
    //   })
    // }
    // if (this.data.isqiandao == false) {
    //   wx.reLaunch({
    //     url: '/pages/activity/meeting/meeting-qiandaoanniu'
    //   })
    // }
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
    // this.startListen();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // this.setData({
    //   isShow: false,
    //   speed_flag: false
    // });
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
  /*监听摇动事 */
  startListen: function () {

    var that = this;
    //进入页面就开始监控加速度
    var speed1 = { x: 0, y: 0, z: 0 };
    var speed2 = { x: 0, y: 0, z: 0 };
    var speed2_1 = 0;
    var isListen = true;
    wx.startAccelerometer();
    wx.onAccelerometerChange(function (res) {
      speed1.x = speed2.x;
      speed1.y = speed2.y;
      speed1.z = speed2.z;
      speed2.x = res.x;
      speed2.y = res.y;
      speed2.z = res.z;
      //xyz每200ms取一次值,
      speed2_1 = Math.abs(speed2.x + speed2.y + speed2.z - speed1.x - speed1.y - speed1.z) / 0.2
      //速度超出阈值，则摇成功，停止监听加速度，播放摇一摇音乐，显示动画，3秒后停止播放摇一摇音乐，隐藏动画，跳转页面
      if ((speed2_1 > 12) && isListen) {
        console.log("speed2_1=" + speed2_1 + ",摇成功!");
        isListen = false;
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

        innerAudioContext.play();
        setTimeout(function () {
          innerAudioContext.stop();

          let num = Math.ceil(10 * Math.random());
          wx.navigateTo({
            url: "/pages/activity/spring_detail?num=" + num,
          });

        }, 3000)

      }
    });
  }
})