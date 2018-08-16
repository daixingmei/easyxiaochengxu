//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    shopList:[],
    pageSize:10,
    pageIndex:0,
    hasMore:true
  },
  onshow: function (options) {
    
  },
  // 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数
  onLoad: function (options) {
    console.log(options)
    this.setData({
      catId: options.cat
    })
    if (options.title){
      wx.setNavigationBarTitle({
        title: options.title
      })
    }
    //初始化 
      this.loadMore()
  },
  onready: function (options) {

  },

  // 下拉
  onPullDownRefresh: function () {
      this.setData({
        shopList: [],
        pageSize: 10,
        pageIndex: 0,
        hasMore: true,
      })
      this.loadMore()
      // 停止刷新，否则在手机上一直存在
      wx.stopPullDownRefresh()
  },
  // 自定义函数，加载更多函数
  loadMore:function(){
     if (!this.data.hasMore&&this.data.shopList.length>0){
       return wx.showToast({
         title: '到底部了',
         icon: 'success',
         duration: 2000
       })
     }
    wx.request({
      url: 'https://locally.uieee.com/categories/' + this.data.catId +'/shops',
      data: {
        _limit: this.data.pageSize,
        _page: ++this.data.pageIndex
      },
      success: (res) => {
        // 直接赋值只更新数据，不更新试图
        // this.data.slideList=res.data
        // this.setData  1.更新数据  2.更新视图
        // 上一页和下一页的数据总和显示在页面上
        var newList=this.data.shopList.concat(res.data)
        // console.log(res.header.X-Total-Count)响应头里面的总数据
        const hasMore = 
          this.data.pageSize * this.data.pageIndex < res.header['X-Total-Count']-0
        this.setData({
          shopList: newList,
          hasMore:hasMore
        })
      },
    })
  },
  //上拉触底
  onReachBottom:function(){
    this.loadMore()
  }  
})