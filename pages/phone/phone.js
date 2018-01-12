// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    local_dataVersion:'',
    remote_dataVersion:'',
    dataVersion: '',
    items:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取本地版本号
    that.setData({
      local_dataVersion:wx.getStorageSync('dataVersion')
    })      
    //获取远程版本号
   /* wx.request({
      url: '/address_book/get_data_version',
      dataType:'json',
      success:function(res){
        that.setData({remote_dataVersion:res.data.dataVersion})
      }
    })*/
    //本地数据版本号不存在，或者与最新版本号不一致
   // if (that.data.local_dataVersion !== that.data.remote_dataVersion){
      //将最新的数据版本号写入缓存

      //请求最新的数据
     /* wx.request({
        url: 'http://wxapp.ccnu.edu.cn/wxapp/group/api',
        dataType: 'json',
        success: function (res) {
          console.log(res.data);
          that.setData({ 
            items: res.data
          });
          wx.setStorage({
            key: 'phone_data',
            data: 'res.data',
          })
        }
      })*/
    //}

    
   
    //获取远程版本号，并与本地版本号进行对比，如相同则不继续请求数据，否则请求远程数据，并更新版本号




    // var version_flag;
    // wx.request({
    //   url: '/address_book/get_data_version',
    //   data:{},
    //   method:'get',
    //   dataType:'json',
    //   success:function(res){
    //     if(res.errcode == 0){
    //       console.log(res.data.dataVersion);
    //     }else{
    //       console.log(res.errmsg);
    //     }
    //   } 
    // })
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