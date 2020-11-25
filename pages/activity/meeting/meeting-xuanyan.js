// pages/activity/meeting/meeting-xuanyan.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        height: "",
        name: "",
        list: "",//已签到人的列表
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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

        this.getxuanyan_list();//拿宣言列表
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
    getxuanyan_list: function () {
        let that = this;
        //请求名字列表，显示在目标区域
        wx.request({
            url: app.globalData.api.getNameList,
            method: 'POST',
            dataType: 'json',
            success: function (res) {
                console.log(res.data);
                if (res.data.errcode == '0') {
                    that.setData({
                        list: res.data.nameStr
                    })
                }
            },
            fail: function (res) { }
        })

    },//长按宣言
    xuanyan: function () {
        let that = this;


        wx.login({
            success: function (res) {
                wx.request({
                    url: app.globalData.api.xuanyan + "?code=" + res.code,
                    method: 'POST',
                    dataType: 'json',
                    success: function (res) {
                        console.log(res.data);
                        if (res.data.errcode == '0') {
                            wx.showToast({
                                title: res.data.errmsg,
                                icon: 'success',
                                duration: 2000,
                                mask: false
                            })
                            that.getxuanyan_list();//刷新名字列表
                        } else if (res.data.errcode == '1'){
                            wx.showToast({
                                title: res.data.errmsg,
                                icon: 'success',
                                duration: 2000,
                                mask: false
                            })
                        } else {
                            wx.showToast({
                                title: res.data.errmsg,
                                icon: 'none',
                                duration: 2000,
                                mask: false
                            })
                        }
                    },
                    fail: function (res) { }
                })
            }
        })
    }

})