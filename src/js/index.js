$(function () {
  one2two()
})

// 1 screen1中点击 跳转下一模块
var one2two = function () {
  $(".screen1-checked").on("click",function () {
    $('.screen1').fadeOut()
    $('.screen2').fadeIn()
  })
}
var two2three = function () {
  $(".screen1-checked").on("click",function () {
    $('.screen2').fadeOut()
    $('.screen3').fadeIn()
  })
}
var thrree2four = function () {
  $(".screen1-checked").on("click",function () {
    $('.screen3').fadeOut()
    $('.screen4').fadeIn()
  })
}
var end_1= function () {
  $(".screen1-checked").on("click",function () {
    $('.screen1').fadeOut()
    $('.screen2').fadeIn()
  })
}