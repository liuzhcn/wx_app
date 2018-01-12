// pages/campusCard/campusCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yikatong:{
     
    },
    water:{

    },
    btnFlag:{
      flag1:true,
      flag2:false,
      flag3:false
    }
  },
  //获取一卡通信息
  loadCard:function() {
    var that = this;
    wx.request({
      url: 'https://wxapp.ccnu.edu.cn/wxapp/ecard_portal/get_info',
      dataType:'json',
      success:function(res){
        console.log(res.data);
        that.setData({
          yikatong:res.data
        });
      },
      fail:function(){
        console.log('请求一卡通数据失败！');
      }
    });
  },
  //获取流水信息
  loadWater:function(type){
    //type 1=一周，2=一个月，3=三个月
    var that = this;
    wx.request({
      url: 'https://wxapp.ccnu.edu.cn/wxapp/ecard_portal/query_trans?type=' + type,
      dataType:'json',
      success:function(res){
        console.log(res.data);
        that.setData({
          water: res.data
        });
      },
      fail:function(){
        console.log('请求流水数据失败！');
      }
    })
  },
  loadWater1:function(){
    this.loadWater(1);
   this.setData({
      flag1:true,
      flag2:false,
      flag3:false
   })
  },
  loadWater2: function () {
    this.loadWater(2);
    this.setData({
      flag1: false,
      flag2: true,
      flag3: false
    })
  },
  loadWater3: function () {
    this.loadWater(3);
    this.setData({
      flag1: false,
      flag2: false,
      flag3: true
    })
  },
  //点击改变颜色
  changeC:function(){
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})