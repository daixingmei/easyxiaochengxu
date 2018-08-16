//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slideList:[],
    imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
  },
  onLoad:function(options){
    //我们需要从网上请求一些数据，显示在小程序上 
    wx.request({
      url: 'https://locally.uieee.com/categories',
      header:{},
      data:{},
      method:"GET",
      success:(res)=>{
        // 直接赋值只更新数据，不更新试图
        // this.data.slideList=res.data
        // this.setData  1.更新数据  2.更新视图
        console.log(res.data)
        this.setData({
            slideList:res.data
        })
      },
      fail:function(res){},
      complete:function(res){}
    })
  },
  onshow:function(options){

  },
  onLaunch: function () {
    //初始化 

  },
  onready : function (options) {

  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})