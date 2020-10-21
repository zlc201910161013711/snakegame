// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
    maxscore: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx=wx.createCanvasContext("canvas")
    ctx.setFillStyle("pink")
    ctx.fillRect(10,10,150,75)
    ctx.draw()

    var people={
      name: "Alice",
      sex: "女",
      tel: "123",
      age: "23",
      friend: ["a","b","c","d"]
    }
    
    // console.log(people.name)
    // console.log(people.friend[1])

    var arr=["a","b","c"]
    console.log(arr)
    console.log(arr.push("d"))
    console.log(arr)
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