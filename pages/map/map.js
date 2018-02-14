// pages/map/map.js

var appInstance = getApp();
var map_api_url = appInstance.globalData.contextPath + '/map/api';


Page({
  data: {
    mapPoint: appInstance.globalData.mapPoint,
    mapData:[],
    markers: [],
    mapKindFlag:0,
    includes:[]
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
    this.loadMap();
    this.mapCtx = wx.createMapContext('map');
    
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
    this.includePoints();
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
    var that = this;
     wx.request({
       url: map_api_url,
       success: function (res) {
         console.log(res.data);
         var markeritems = that.builderMarkers(res.data[0].MapItem);
         that.setData({
            mapData : res.data,
            markers : markeritems
         });
         //写入缓存
         wx.setStorage({
           key: 'mapInfo',
           data: res.data,
         })
       },
       fail: function () {
        console.log("failed to load mapData");
       }
     })
  },

  builderMarkers:function(mapitems){
      var items = [];//地图上的每个小点
      var includes = [] ;//地图上点的经纬度
      for(var i=0;i<mapitems.length;i++){
        console.log(mapitems[i]);
        var marker_item = {
          iconPath: "",
          id: i,
          latitude: mapitems[i].wd,
          longitude: mapitems[i].jd,
          width: 1,
          height: 1,
          alpha:0,
          callout: {
            content: mapitems[i].name,
            color: "#FFFFFF",
            fontSize: 14,
            borderRadius: 3,
            bgColor: "#0093dc",
            padding: 5,
            display: "ALWAYS",
            textAlign: "center"
          }
        };
        items.push(marker_item);
        
        var include = {
          latitude: mapitems[i].wd,
          longitude: mapitems[i].jd,
        };
        includes.push(include);
      }
      console.log(items);
      console.log(includes);
      this.setData({
        includes:includes
      })
      return items;
  },
  //切换地图类别
  changeMapKind:function(event){
    var that = this;
    //获取当前地图的类别索引号,从data里取出经纬度生成每个点,写入makers,
    var index = event.currentTarget.dataset.index;
    var markeritems = that.builderMarkers(that.data.mapData[index].MapItem);
    that.setData({
      markers: markeritems
    });
    //点击地图种类，字体变粗
    that.setData({
      mapKindFlag: index
    })
    // that.includePoints();
  },
  /*地图详情 */
  toMapDetail: function (event) {
    console.log(event);
    //传2个参数，1、地图种类索引，2、markerId
    let mapKindFlag = this.data.mapKindFlag;
    console.log("mapKindFlag " + mapKindFlag);
    console.log("event.markerId " + event.markerId);
    wx.navigateTo({
      url: '/pages/mapDetail/mapDetail?mapKindFlag=' + mapKindFlag + '&markerId=' + event.markerId,
    })
    console.log("toMapDetail");
  },
  /*选择地图 */
  chooseLocation:function(event){
      console.log(event);

  },
  /*自动缩放视界，适应所有地图上的所有标注点*/
  includePoints: function () {
    var that = this;
    that.mapCtx.includePoints({
      padding: [70],
      points: that.data.includes
    })
  }
})