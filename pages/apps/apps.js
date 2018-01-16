// pages/apps/apps.js 2006983633

Page({

    /**
     * 页面的初始数据
     */
    data: {
        grids: [
            {
                "name": "校园卡",
                "icon": "/images/card.png",
                "url": "/pages/campusCard/campusCard"
            },
            {
                "name": "通讯录",
                "icon": "/images/addressbook.png",
                "url": "/pages/phone/phone"
            },
            /*{
              "name":"看通知",
              "icon": "/images/notice.png"
              
        },*/
            {
                "name": "查图书",
                "icon": "/images/book.png",
                "url":"/pages/checkBooks/checkBooks"
            }

        ]
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

    openApp:function(event) {
        //如果没有身份绑定，则提示并退出
        if(getApp().globalData.token == null){
            wx.showModal({
                title: '',
                content: '您没有绑定身份，无法访问该服务',
                showCancel:false
            })
            return;
        }    

        //有身份绑定则进行跳转
        wx.navigateTo({
            url: event.currentTarget.dataset.url
        })
    }
})