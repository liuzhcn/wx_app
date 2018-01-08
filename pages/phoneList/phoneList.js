
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 'form',
      name: '修缮服务电话',
      open: false,
      names: ['文理学院', '学工部', '信息学院', '网上报修平台']
    },
    {
      id: 'widget',
      name: '车队服务电话',
      open: false,
      names: ['校巴服务车队1', '校巴服务车队2', '校巴服务车队3', '校巴服务车队4', '校巴服务车队5', '校巴服务车队6', '校巴服务车队7', '校巴服务车队8', '校巴服务车队9']
    }]
  },
  /*点击*/
  kindToggle: function (e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
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