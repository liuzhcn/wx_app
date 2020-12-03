// pages/activity/meeting/meeting-baogao.js\
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"",
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.api.fzbg);
    this.setData({
      url:app.globalData.api.fzbg
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getFileList();
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
  showPDF(e){
    let pdf_url = `${app.globalData.contextPath}/files/${e.currentTarget.dataset.item.filename}`;
    // debugger;
    console.log(pdf_url)
    wx.showLoading({
      title: '加载中...',
    })
    wx.downloadFile({
      url: pdf_url,
      success: function (res) {
        console.log('downloadFile', res);
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log(res);
            console.log('打开文档成功')
            wx.hideLoading()
          },
          fail: function (res) { 
            wx.hideLoading()
            console.log('打开失败')
          },
        })
      }
    })
  },
  getFileList(){
    let _this = this;
    wx.request({
      url: `${app.globalData.contextPath}/api/security/getFiles`,
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        console.log(res.data);
        if (res.data.errcode == '0') {//说明已经签到了，直接进入四宫格界面
           _this.setData({list:res.data.fileList})
        } else {
         
        }
      },
      fail: function (res) {
        console.log(res);
       }
    })
  }
})