// pages/index/components/select/index.js
import navList from './data'
const {webViewUrl} = require('../../../../utils/util')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgs:Array,
    HeritageList:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    navList:Object.freeze(navList)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNavTo(e){
      const url =  e.currentTarget.dataset['url']
      const webViewPath = webViewUrl+'pages/contentList'
      wx.navigateTo({
        url: '/pages/webView/index?webViewPath='+webViewPath+'&type='+url
      })
    },
    onContentTo(e){
      const type =  e.currentTarget.dataset['type']
      const id =  e.currentTarget.dataset['id']  
      const webViewPath = webViewUrl+'pages/introduce'
      wx.navigateTo({
        url: '/pages/webView/index?webViewPath='+webViewPath+'&type='+type+'&id='+id
      })
    },
    onHeritageView(e){
      const heritage =  e.currentTarget.dataset['heritage']
      const webViewPath = webViewUrl+'pages/heritage'
      wx.navigateTo({
        url: '/pages/webView/index?webViewPath='+webViewPath+'&heritage='+heritage
      })
    }
  }
})
