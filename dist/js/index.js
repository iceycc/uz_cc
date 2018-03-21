$(function () {
  window.strObj = {}
  one2two()
  two2three()
  thrree2four()
//
  $(".info-submit").on("click", function (e) {
    e.preventDefault();


    var data = $('#form-1').serialize()
    var str = ''
    var url = ' http://m.uzhuang.com/api/calculator.php?action=details'
    $.ajax({
      url:url,
      type:"post",
      data:data,
      contentType: "application/x-www-form-urlencoded",
      dataType : "json",
      success: function (res) {
        strObj.data = res.data.data
        var jsonStr =JSON.stringify(strObj)
        window.localStorage.setItem('uzhuang_infos',jsonStr)
        window.location.href='http://m.uzhuang.com/mobile/activity/my_home/result.html'
      },
      error: function (err) {
        console.log(err)

      }
    })
  })
})

// 1 screen1中点击 跳转下一模块
var one2two = function () {
  $(".screen1-checked").on("click", function () {
    $('.screen1').fadeOut()
    $('.screen2').fadeIn()
    strObj.new_old = $(this).data('new_old')

    // strObj.push({
    //   new_old:$(this).data('new_old')
    // })
    console.log(strObj)

  })
  $(".screen2 .left").on('click', function () {
    $('.screen1').fadeIn()
    $('.screen2').fadeOut()
  })
}
var two2three = function () {
  $(".screen2-checked").on("click", function () {
    $('.screen2').fadeOut()
    $('.screen3').fadeIn()
    strObj.room_num = $(this).data('room_num')
    console.log(strObj)
  })
  $(".screen3 .left").on('click', function () {
    $('.screen2').fadeIn()
    $('.screen3').fadeOut()
  })
}
var thrree2four = function () {
  $(".screen3-checked").on("click", function () {
    $('.screen3').fadeOut()
    $('.screen4').fadeIn()
    strObj.style = $(this).data('style')
    console.log(strObj)
  })
  $(".screen4 .left").on('click', function () {
    $('.screen3').fadeIn()
    $('.screen4').fadeOut()
  })
}
var end_1 = function () {
  $(".screen4-checked").on("click", function () {
    $('.screen4').fadeOut()
    $('.screen5').fadeIn()
  })
  $(".screen5 .left").on('click', function () {
    $('.screen4').fadeIn()
    $('.screen5').fadeOut()
  })
}