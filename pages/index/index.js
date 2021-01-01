// pages/personal/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:1,
    imgs:[],
    HeritageList:[]
  },
  onChangeNav:function(e) {
    const count =  e.currentTarget.dataset['index'] || 1
    if(count == 2 || count == 3){
      const type = count == 2?11:12
      this.getInitData(type)
    }
    
    this.setData({
      count:count  
    })
  },
  getInitData(type){
    wx.request({
      url: 'https://swagger.zjdmwh.cn/API/information/list',
      method:'GET',
      data:{
        informationTypeId:type,
        placeId:1,
        pageSize:100,
        currentPage:1
      },
      success:(res)=>{
        const data = res.data.data
        const list = data.list || []
        this.setData({
          list
        })
      }
    })
  },
  getImgs(){
    wx.request({
      method:'GET',
      url:'https://swagger.zjdmwh.cn/API/index/pictures',
      data:{
        placeId:1
      },
      success:(res)=>{
        const data = res.data
        const imgs = data.data || []
        this.setData({
          imgs:JSON.parse(imgs)
        })
      }
    })
  },
  getHeritage(){
    wx.request({
      url: 'https://swagger.zjdmwh.cn/API/page/information/list',
      method:'GET',
      data:{
        informationTypeId:3,
        placeId:1,
        pageSize:10000,
        currentPage:1
      },
      success:(res)=>{
        const data = res.data.data
        const list = data.list || []
        this.setData({
          HeritageList:list
        })
        console.log(list)
      }
    })
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
    this.getImgs()
    this.getHeritage()
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