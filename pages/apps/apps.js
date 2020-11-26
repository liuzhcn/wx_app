// pages/apps/apps.js 2006983633

Page({

    /**
     * 页面的初始数据
     */
    data: {
      indicatorDots:true,
      autoplay:true,
      interval:3000,
      duration:1000,
      images:[
        {
            id:'index',
            url: "/images/app-title.jpg"
        }
      ],
      
        grids: [
            {
                name: "校园卡",
                icon: "/images/card.png",
                type: "inner",
                url: "/pages/campusCard/campusCard",
                auth:true
            },
            {
                name: "通讯录",
                icon: "/images/addressbook.png",
                type: "inner",
                url: "/pages/phone/phone",
                auth:true
            },
            /*{
              "name":"看通知",
              "icon": "/images/notice.png"
              
        },*/
            // {
            //     name: "查图书",
            //     icon: "/images/book.png",
            //     type: "web",
            //     url: "http://mlib.ccnu.edu.cn/sms/opac/search/showiphoneSearch.action",
            //     auth: false
            // },
            {
                name: "查借阅",
                icon: "/images/book.png",
                type: "inner",
                url: "/pages/checkBooks/checkBooks",
                auth:true
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
        //如果需要验证的应用没有身份绑定，则提示并退出
        var auth = event.currentTarget.dataset.auth;

        if(auth && getApp().globalData.token == null){
            wx.showModal({
                title: '',
                content: '您没有绑定身份，无法访问该服务',
                showCancel:false
            })
            return;
        }    

        //根据type用不同的方式打开应用
        var type = event.currentTarget.dataset.type;
        var appurl = event.currentTarget.dataset.url;
        if(type == 'inner'){
            wx.navigateTo({url: appurl});
        }

        if(type == 'web'){
            wx.navigateTo({url:'webapp?url='+appurl})
        }
        
    },

    onSwiperItemClicked:function(event){
        var id = event.currentTarget.dataset.id;
        
        if(id == 'activity'){
            console.log(id);
            wx.switchTab({
                url: '/pages/activity/spring'
            })
        }
    }
})