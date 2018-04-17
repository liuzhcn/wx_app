//app.js
const serverPath = "https://wxapp.ccnu.edu.cn";
App({
    onLaunch: function () {


        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo
                            console.log(res.userInfo);
                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    /**华中师范大学数据 */
      globalData: {
        version: '1.3.3',
        userInfo: null,
        appUserInfo: null,
        token: null,
        contextPath:'https://wxapp.ccnu.edu.cn/wxapp',
        api:{
          isQiandao: serverPath + "/wxapp/wxMeeting/getSign",//会议签到，判断是否签到
          jiangxaingList: serverPath + "/wxapp/wxMeeting/getAwardInfo",//拿奖项选项的列表
          submitQD: serverPath + "/wxapp/wxMeeting/toSign",//签到表单提交
          xuanyan: serverPath + "/wxapp/wxMeeting/toCns",//传name，code
          isxuanyan: serverPath + "/wxapp/wxMeeting/getCns",//是否已宣言，传code
          getNameList: serverPath + "/wxapp/wxMeeting/getCnsName",//拿签到的名单
          fzbg: serverPath + "/wxapp/wxMeeting/fzbg",//发展报告
          hyyc: serverPath + "/wxapp/wxMeeting/hyyc",//会议议程
        },
        qiandao:"",//是否签到
        sign:"",
        mapPoint:{
            latitude: 30.517330,
            longitude: 114.360600,
        }
      },
      getHeader2: function () {
        var headers = {
          "Content-Type": "application/x-www-form-urlencoded"
        }
        return headers;
      }
    
    /** 九江学院数据*/
    // globalData: {
    //     version: '1.2.1',
    //     userInfo: null,
    //     appUserInfo: null,
    //     token: null,
    //     contextPath: 'https://small.sibetech.cn/wxapp',
    //     mapPoint: {
    //         latitude: 29.710460,
    //         longitude: 115.995400
    //     }
    // }

})