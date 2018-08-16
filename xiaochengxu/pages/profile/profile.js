//logs.js
var app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    check:true,
    userInfo: {},
    openId: ''
  },
  onLoad: function () {
    app.getUserInfo(function (userInfo) {
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo: userInfo,
        openId: app.globalData.openid
      })
    })
  },
  bindViewContact:function(){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },
  bindViewHelp:function(){
    wx.navigateTo({
      url: '../help/help'
    })
  },
  checkChange:function(e){
    console.log(e)
    console.log(e.detail.value)
  },
  fatherChange: function(){
    console.log('我是爸爸')
  },
  sonChange:function(){
    console.log('我是儿子')
  },
  longtap:function(){
    console.log('长按')
  },

})
