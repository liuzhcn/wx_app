// pages/map/map.js
Page({
  data: {
    mapData:[
      {
        MapKindName: "教学楼",
        MapItem: [
          {
            name: "8教学楼",
            jd: "114.3591900000",
            wd: "114.3591900000"
          },
          {
            name: "9教学楼",
            jd: "114.3632400000",
            wd: "30.5185600000"
          },
          {
            name: "7号教学大楼",
            jd: "114.3622900000",
            wd: "30.5166300000"
          }
        ]
      },
      {
        MapKindName: "部门",
        MapItem: [
          {
            name: "校团委",
            jd: "114.3618900000",
            wd: "30.5173200000"
          },
          {
            name: "人武部",
            jd: "114.3568300000",
            wd: "30.5232900000"
          },
          {
            name: "学工部",
            jd: "114.3582900000",
            wd: "30.5201800000"
          }
        ]
      },
      {
        MapKindName: "学院",
        MapItem: [
          {
            name: "美术学院",
            jd: "114.3643900000",
            wd: "30.5171300000"
          },
          {
            name: "研究生院",
            jd: "114.3641300000",
            wd: "30.5130200000"
          },
          {
            name: "音乐学院",
            jd: "114.3614300000",
            wd: "30.5156700000"
          },
          {
            name: "文学院",
            jd: "114.3599500000",
            wd: "30.5186300000"
          }
        ]
      }
    ],
    markers: [{
      iconPath: "/images/location-640.png",
      id: 0,
      latitude: 30.5183503570,
      longitude: 114.3591900000,
      width: 20,
      height: 20,
      callout: {
        content: "8教学楼",
        color: "#FFFFFF",
        fontSize: 12,
        borderRadius: 10,
        bgColor: "#0093dc",
        padding: 5,
        display: "ALWAYS",
        textAlign: "center"
      },
      }, {
        iconPath: "/images/location-640.png",
        id: 0,
        latitude: 30.5185600000,
        longitude: 114.3632400000,
        width: 20,
        height: 20,
        callout: {
          content: "9教学楼",
          color: "#FFFFFF",
          fontSize: 12,
          borderRadius: 10,
          bgColor: "#0093dc",
          padding: 5,
          display: "ALWAYS",
          textAlign: "center"
        },
    }, {
      iconPath: "/images/location-640.png",
      id: 0,
      latitude: 30.5166300000,
      longitude: 114.3622900000,
      width: 20,
      height: 20,
      callout: {
        content: "7教学楼",
        color: "#FFFFFF",
        fontSize: 12,
        borderRadius: 10,
        bgColor: "#0093dc",
        padding: 5,
        display: "ALWAYS",
        textAlign: "center"
      },
    }],
   /* controls: [{
      id: 1,
      position: {
        left: 0,
        top: 300,
        width: 100,
        height: 100
      },
      iconPath: "/images/location-640.png",
      clickable: true
    }
    ]*/

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

  /*请求地图数据 */
  loadMap: function () {
    /* wx.request({
       url: "http://wxapp.ccnu.edu.cn:8080/wxapp2/map/api",
       success: function (res) {
         console.log(res.data);
       },
       fail: function () {
 
       }
     })*/
    
    // this.setData({
    //   markers.latitude:
    // })
  },
  /*显示地图 */
  showMap: function () {

  },
  /*地图详情 */
  ToMapDetail: function () {
    wx.navigateTo({
      url: '/pages/mapDetail/mapDetail',
    })
  },
  /*切换种类 */
  switch: function (e) {

  }
})