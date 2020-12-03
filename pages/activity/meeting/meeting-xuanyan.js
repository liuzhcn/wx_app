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
        hyjy:"",//会议建言
        dis:false,//表单控件是否可用
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

        this.getjianyan();//拿建言列表
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
    getjianyan: function () {//获取建言列表
        let that = this;
        //请求名字列表，显示在目标区域
        wx.request({
            url:`${app.globalData.contextPath}/api/security/getUserMsgList` ,
            method: 'POST',
            header:app.getHeaderWithToken(),
            data:{token:app.globalData.token},
            dataType: 'json',
            success: function (res) {
                console.log(res.data);
                if (res.data.errcode == '0') {
                    if(res.data.dataList.length>0){//已经评价过了
                        that.setData({
                            hyjy: res.data.dataList[0].msg,
                            dis:true
                        })
                    }else{//未评价
                        
                    }
                    
                }
            },
            fail: function (res) { }
        })
    },
    inputText(e){
        this.setData({
            hyjy:e.detail.value
        })
    },
    submit(){//提交宣言
        let that = this;
        //请求名字列表，显示在目标区域
        let msg = this.data.hyjy;
        if(!msg){
            wx.showToast({
                icon:'none',
                title: '请填写宣言再提交',
            })
            return
        }
        wx.request({
            url:`${app.globalData.contextPath}/api/security/saveUserMsg` ,
            method: 'POST',
            header:app.getHeaderWithToken(),
            data:{msg:msg,token:app.globalData.token},
            dataType: 'json',
            success: function (res) {
                console.log(res.data);
                if (res.data.errcode == '0') {
                    wx.showToast({
                        icon:'none',
                        title: '宣言提交成功！',
                    })
                    that.setData({
                        dis:true
                    })
                }else{
                    wx.showToast({
                        icon:'none',
                        title: res.data.errmsg,
                    })
                }
            },
            fail: function (res) { }
        })
    },
    //长按宣言
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