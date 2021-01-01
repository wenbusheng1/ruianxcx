// pages/index/components/adminArea/index.js
const {webViewUrl} = require('../../../../utils/util')
Component({
  properties:{
    list:Array
  },
  /**
   * 页面的初始数据
   */
  data: {
  },
  methods:{
    onNavTo(e){
      const type =  e.currentTarget.dataset['type']
      const id =  e.currentTarget.dataset['id']  
      const webViewPath = webViewUrl+'pages/details'
      wx.navigateTo({
        url: '/pages/webView/index?webViewPath='+webViewPath+'&type='+type+'&id='+id
      })
    }
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

  }
})