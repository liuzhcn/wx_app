// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
  },
  /*请求公共通讯录数据*/
  loadPhone: function () {
    //判断本地是否有版本号，如没有，直接请求远程数据，如有，请求远程版本号，与本地版本号进行对比
    //版本号一致，直接读取缓存的数据，版本号不一致，请求远程数据
    // wx.clearStorage();
    var that = this;
    let local_dataV = "";
    let remote_dataV = "";
    let flag = true;//flag为true表示本地有版本号

    wx.getStorage({
      key: 'phone_data',
      success: function (res) {
        that.setData({
          items: res.data
        });
      },
    })

    //取远程版本号
    wx.request({
      url: 'https://wxapp.ccnu.edu.cn/wxapp/phonebook/version',
      dataType: 'json',
      success: function (res) {
        console.log("取到了远程版本号！");
        console.log(res.data);
        remote_dataV = res.data.versio;
        /* */
        //取本地版本号
        let value = wx.getStorageSync('dataVersion');
        if (value && (value !== "")) {
          console.log("已取到公共通讯录本地版本号");
          console.log(value)
          local_dataV = value;
        } else {
          console.log("本地没有公共通讯录版本号！");
          flag = false;
        }
        //本地有通讯录版本号，且版本与远程是一致的
        if (flag && (local_dataV == remote_dataV)) {
          console.log("比较本地和远程的版本号");
          //版本号一致，使用本地数据
          var tmp = wx.getStorageSync('phone_data');
          console.log(tmp);
          that.setData({
            items: tmp
          });
        } else {
          //将最新版本号写入存储，并请求远程数据,写入data，写入存储
          console.log("将最新版本号写入存储，并请求远程数据");
          wx.setStorage({
            key: 'dataVersion',
            data: remote_dataV,
          });
          console.log(remote_dataV);

          wx.request({
            url: 'https://wxapp.ccnu.edu.cn/wxapp/phonebook/api',
            dataType: 'json',
            success: function (res) {
              console.log(res.data);
              that.setData({
                items: res.data
              });
              wx.setStorage({
                key: 'phone_data',
                data: res.data,
              })
            }
          })
        }
      },
      fail: function () {
        console.log("取公共通讯录远程版本号失败!")
      }
    })

  },
  toPhoneList:function(event){
    var index = event.currentTarget.dataset.index;
      wx.navigateTo({
        //传索引到phonelist页
        url: '/pages/phoneList/phoneList?index=' + index,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadPhone();
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
})