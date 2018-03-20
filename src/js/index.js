$(function () {
  one2two()
  two2three()
  thrree2four()
//
  $(".info-submit").on("click",function () {
    var data ={
      area:100,
      city:'',
      mobile:15621185521,
      name:'王冰洋'
    }
    var url = ' http://m.uzhuang.com/api/calculator.php?action=details'
    $.ajax({
      url:url,
      type:"post",
      data:data,
      contentType: "application/json",
      dataType : "jsonp",
      jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
      jsonpCallback:"jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
      success: function (data) {
        console.log(JSON.stringify(data));
        console.log('you are at IP address: '+data.ip);
        console.log('you are at IP address: '+data.country_name);
      },
      error: function () {
      }
    })
    function jsonpCallback(res){
      alert(JSON.stringify(res))
    }
  })

  var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
      </script>
})

// 1 screen1中点击 跳转下一模块
var one2two = function () {
  $(".screen1-checked").on("click",function () {
    $('.screen1').fadeOut()
    $('.screen2').fadeIn()
  })
  $(".screen2 .left").on('click',function () {
    $('.screen1').fadeIn()
    $('.screen2').fadeOut()
  })
}
var two2three = function () {
  $(".screen2-checked").on("click",function () {
    $('.screen2').fadeOut()
    $('.screen3').fadeIn()
  })
  $(".screen3 .left").on('click',function () {
    $('.screen2').fadeIn()
    $('.screen3').fadeOut()
  })
}
var thrree2four = function () {
  $(".screen3-checked").on("click",function () {
    $('.screen3').fadeOut()
    $('.screen4').fadeIn()
  })
  $(".screen4 .left").on('click',function () {
    $('.screen3').fadeIn()
    $('.screen4').fadeOut()
  })
}
var end_1= function () {
  $(".screen4-checked").on("click",function () {
    $('.screen4').fadeOut()
    $('.screen5').fadeIn()
  })
  $(".screen5 .left").on('click',function () {
    $('.screen4').fadeIn()
    $('.screen5').fadeOut()
  })
}