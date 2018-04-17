// pages/activity/meeting/meeting-baoming.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: "",
    name: "",
    danwei1: ["职能部门", "教学科研单位", "学生组织", "学生社团", "其他"],
    danwei1_index: "",
    danwei2: "",
    zhiwu: "",
    linjiang: ["否", "是"],
    linjiang_index: "",
    jiangxiang1: [],
    jiangxiang1_index: "",
    jiangxiang2: [],
    jiangxiang2_index: "",
    isShowJx: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res);
        that.setData({
          height: res.windowHeight
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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
  //拿选项列表
  getList: function () {
    let that = this;
    wx.request({
      url: app.globalData.api.jiangxaingList,
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          jiangxiang1: res.data
        })
        //写入缓存
        wx.setStorage({
          key: 'jiangxiang_list',
          data: res.data
        })
      },
      fail: function (res) { }
    })
  },
  //选奖项1
  chooseJx1: function (e) {
    this.setData({
      jiangxiang1_index: e.detail.value
    })
    this.getJx2_list();
  },//选项2
  chooseJx2: function (e) {
    this.setData({
      jiangxiang2_index: e.detail.value
    })
  },
  //根据选项1的值，遍历缓存找出son
  getJx2_list: function () {
    let jx1 = this.data.jiangxiang1[this.data.jiangxiang1_index];
    console.log(jx1);
    let list = wx.getStorageSync('jiangxiang_list');
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (jx1.name == list[i].name) {
          console.log(list[i].son);
          this.setData({
            jiangxiang2: list[i].son
          })
          break;
        }
      }
    }
  },//姓名
  setName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  // chooseDanwei1: function (e) {
  //   this.setData({
  //     danwei1_index: e.detail.value
  //   })
  // },
  setDanwei2: function (e) {
    this.setData({
      danwei2: e.detail.value
    })
  },
  // setZhiwu: function (e) {
  //   this.setData({
  //     zhiwu: e.detail.value
  //   })
  // },
  chooseLJ: function (e) {
    this.setData({
      linjiang_index: e.detail.value,
    })
    if (this.data.linjiang[this.data.linjiang_index] == '是') {
      this.setData({
        isShowJx: true
      })
    } else {
      this.setData({
        isShowJx: false
      })
    }
  },//提交按钮
  submit: function () {
    //1、姓名
    let name = this.data.name;
    //2、单位，
    let danwei = this.data.danwei2;
    //3、职务
    // let zhiwu = this.data.zhiwu;
    //4、是否领奖
    var islingjiang = this.data.linjiang[this.data.linjiang_index];
    // console.log(islingjiang);
    //5、领奖1 id
    var id_1 = "";
    var id_2 = "";
    let jiangxiang1 = this.data.jiangxiang1[this.data.jiangxiang1_index] || "";
    // console.log(jiangxiang1);
    let list = wx.getStorageSync('jiangxiang_list');
    if (list && jiangxiang1) {
      for (let i = 0; i < list.length; i++) {
        if (jiangxiang1.name == list[i].name) {
          id_1 = list[i].id;
          // console.log(id_1);
          if (list[i].son.length > 0) {
            let jiangxiang2 = this.data.jiangxiang2[this.data.jiangxiang2_index];
            for (let j = 0; j < list[i].son.length; j++) {
              if (jiangxiang2.name == list[i].son[j].name) {
                id_2 = list[i].son[j].id;
                // console.log(id_2);
                break;
              }
            }
          }

        }
      }
    }
    if (!name) {
      wx.showModal({
        title: '提示',
        content: '请输入姓名！',
        showCancel: false,
      })
      return;
    }
    if (!danwei) {
      wx.showModal({
        title: '提示',
        content: '请选择单位！',
        showCancel: false,
      })
      return;
    }
    // if (!zhiwu) {
    //   wx.showModal({
    //     title: '提示',
    //     content: '请输入职务！',
    //     showCancel: false,
    //   })
    //   return;
    // }
    if (!islingjiang) {
      wx.showModal({
        title: '提示',
        content: '请选择是否领奖代表！',
        showCancel: false,
      })
      return;
    }
    wx.showLoading({
      title: '提交中...',
      mask: true
    })
    wx.login({
      success: function (res) {
        // console.log(res.code);
        let data = {};
        if (islingjiang == "是") {
          let id;
          if (id_2) {
            id = id_2;
          } else {
            id = id_1;
          }
          data = {
            'code': res.code,
            'xm': name,
            'dw': danwei,
            // 'zw': zhiwu,
            'sflj': islingjiang,
            'awardId': id
          }
        } else {
          data = {
            'code': res.code,
            'xm': name,
            'dw': danwei,
            // 'zw': zhiwu,
            'sflj': islingjiang,

          }
        }
        console.log(data);
        wx.request({
          url: app.globalData.api.submitQD,
          data: data,
          header: app.getHeader2(),
          method: 'POST',
          dataType: 'json',
          success: function (res) {
            console.log(res.data);
            if (res.data.errcode == '0') {//签到成功，跳转到四宫格
            wx.hideLoading();
              wx.showModal({
                title: '提示',
                content: '签到成功！请按照现场工作人员的指引前往指定位置就坐。祝您度过一个愉快的新媒体之夜。',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {
                    wx.reLaunch({
                      url: '/pages/activity/spring'
                    })
                  }
                }
              })

            }else{
              wx.showModal({
                title: '提示',
                content: '签到失败！',
                showCancel: false,
                success: function (res) {
                 
                }
              })
            }
            wx.hideLoading();
          },
          fail: function (res) {
            wx.hideLoading();
            console.log(res);
           }
        })
      }
    })

  }
})