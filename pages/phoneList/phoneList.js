
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },
  /*自定义方法*/
  /*点击展开通讯录*/
  kindToggle2: function (e) {
    var id = e.currentTarget.id,
      items = this.data.items;
    for (var i = 0, len = items.length; i < len; ++i) {
      if (items[i].groupId == id) {
        items[i].open = !items[i].open
      } else {
        items[i].open = false
      }
    }
    this.setData({
      items: items
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options.index);
  var that = this;
  var index = options.index
  //取缓存
  wx.getStorage({
    key: 'phone_data',
    success: function(res) {
      console.log(res.data[index].group);
      that.setData({
        items: res.data[index].group
      })
    },
  })

    //TODO 整个代码需要重构
    //1.判断是否有缓存，有缓存则直接作为出事数据

    //2.如果没有缓存，则请求网络，获取通讯录数据    
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