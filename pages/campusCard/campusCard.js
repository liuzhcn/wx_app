// pages/campusCard/campusCard.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appUserInfo: {

    },
    yikatong: {

    },
    water: {

    },
    rows: [],
    btnFlag: 1,
    page: 2,
    hasMoreData: true,//还有更多流水信息
    showPic: false//不显示“正在加载”
  },
  //获取一卡通信息
  loadCard: function () {
    var that = this;
    wx.request({
      url: 'https://wxapp.ccnu.edu.cn/wxapp/ecard_portal/get_info',
      dataType: 'json',
      data: {
        token: app.globalData.token
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          yikatong: res.data
        });
      },
      fail: function () {
        console.log('请求一卡通数据失败！');
      }
    });
  },
  //获取流水信息
  loadWater: function (type, page) {
    //type 1=一周，2=一个月，3=三个月
    var that = this;
    if (!type) {
      type = 1;
    }
    if (!page) {
      page = 1;
    }
    console.log("type is" + type);
    console.log("page is" + page);
    wx.request({
      url: 'https://wxapp.ccnu.edu.cn/wxapp/ecard_portal/query_trans',
      dataType: 'json',
      data: {
        token: getApp().globalData.token,
        type: type,
        page: page
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          water: res.data,
          rows: res.data.result.rows
        });
      },
      fail: function () {
        console.log('请求流水数据失败！');
      }
    })
  },
  loadWater1: function () {
    this.loadWater(1);
    this.setData({
      btnFlag: 1
    })
  },
  loadWater2: function () {
    this.loadWater(2);
    this.setData({
      btnFlag: 2
    })
  },
  loadWater3: function () {
    this.loadWater(3);
    this.setData({
      btnFlag: 3
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取appUserInfo的信息
    this.setData({
      appUserInfo: app.globalData.appUserInfo
    })
    console.log(app.globalData.appUserInfo);
    this.loadCard();
    this.loadWater(1);//默认一周
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
    console.log("触底了！");
    if (this.data.hasMoreData) {
      console.log("上拉加载更多！");
      wx.showToast({
        icon: "loading",
        title: "加载更多数据",
        duration: 2000
      })
      this.getMoreWater();
    } else {
      console.log("数据已全部加载");
      wx.showToast({
        title: "已全部加载！",
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /*下拉加载更多流水信息*/
  getMoreWater: function () {
   
    var that = this;
    
    console.log(that.data.page);

    wx.request({
      url: 'https://wxapp.ccnu.edu.cn/wxapp/ecard_portal/query_trans',
      dataType: 'json',
      data: {
        token: app.globalData.token,
        type: that.data.btnFlag,
        page: that.data.page
      },
      success: function (res) {
        console.log(res.data);
        if (res.data.errcode == "0") {
          //如果有流水信息
          if (res.data.result && (res.data.result.rows.length !== 0)) {
            //如果一页数据条数不是满的
            if (res.data.result.rows.length < res.data.result.pageSize){
              hasMoreData: false
            }
              that.setData({
                rows: that.data.rows.concat(res.data.result.rows),
                hasMoreData: true,
                page: that.data.page + 1
              });
          } else {
            that.setData({
              hasMoreData: false,
            });
          }
        } else {
          wx.showToast({
            title: res.data.errmsg
          })
        }

      },
      fail: function () {
        console.log('请求流水数据失败！');
      }
    })
  }
})

