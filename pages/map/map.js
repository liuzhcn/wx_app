// pages/map/map.js
var sliderWidth = 96;
Page({
  data: {
    tabs: ["校门", "教学楼", "宿舍", "食堂","操场","学院","场馆","公交站","学生活动中心","党员活动中心","校长办公室"],
    markers: [{
        iconPath: "/images/location-640.png",
        id: 0,
        title: "华中师范大学1",
        latitude: 30.5183503570,
        longitude: 114.3620538712,
        width: 20,
        height: 20
    }],
    label:{
      content: "华中师范大学",
      color:"white",
      fontSize:12,
      borderRadius:4,
      bgColor:"#0093dc",
      padding:"3",
      display:"ALWAYS",
      textAlign:"center"
    },
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      tmpIndex:0
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
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

  },

  chooseItem: function (e) {
    
  }
})