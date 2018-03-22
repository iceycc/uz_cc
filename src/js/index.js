/**
 *@author wangbingyang
 *@date 2018/03/22 08:58:15
 *@desc
 */
$(function () {
  window.strObj = {}
  one2two()
  two2three()
  thrree2four()
  window.myOptions = {
    showTime : 1000,
    hideTime : 500
  }
  // activeImg()
  // jiaoyan()

  //


  // $(".screen2 .active").find("img").attr("src","")
  doFormCheckSubmit()
  $(".input-box").find("change").blur(function () {
    doFormCheckSubmit()
  })
})
var doFormCheckSubmit = function () {
  var subForm = true;
  submitSingForm(function () {
    console.log(111111)
    if(!subForm){
      return false;
    }
    var data = $('#form-1').serialize()
    console.log(data)
    var url = ' http://m.uzhuang.com/api/calculator.php?action=details'
    $.ajax({
      url: url,
      type: "post",
      data: data,
      contentType: "application/x-www-form-urlencoded",
      dataType: "json",
      success: function (res) {
        console.log('请求成功')
        strObj.data = res.data.data
        var jsonStr = JSON.stringify(strObj)
        window.localStorage.setItem('uzhuang_infos', jsonStr)
        window.location.href='http://m.uzhuang.com/mobile/activity/my_home/result.html'
      },
      error: function (err) {
        console.log(err)

      }
    })


    subForm = false;
  })
}
var one2two = function () {
  $(".screen1-checked").on("click", function () {
    $(this).addClass("active").siblings("div").removeClass("active")
    $('.screen1').fadeOut(myOptions.showTime,function () {
      $('.screen2').fadeIn()
    })
    strObj.new_old = $(this).data('new_old')
  })
  $(".screen2 .left").on('click', function () {
    $('.screen2').fadeOut(myOptions.hideTime,function () {
      $('.screen1').fadeIn()
    })
  })
}
var two2three = function () {
  $(".screen2-checked").on("click", function () {
    $(this).addClass("active").siblings("div").removeClass("active")
    $('.screen2').fadeOut(myOptions.showTime,function () {
      $('.screen3').fadeIn()
    })
    strObj.room_num = $(this).data('room_num')
    console.log(strObj)
  })
  $(".screen3 .left").on('click', function () {
    $('.screen3').fadeOut(myOptions.hideTime,function () {
      $('.screen2').fadeIn()
    })

  })
}
var thrree2four = function () {
  $(".screen3-checked").on("click", function () {
    $(this).addClass("active").siblings("div").removeClass("active")
    $('.screen3').fadeOut(myOptions.showTime,function () {
      $('.screen4').fadeIn()
    })
    strObj.style = $(this).data('style')
    console.log(strObj)
  })
  $(".screen4 .left").on('click', function () {
    $('.screen4').fadeOut(myOptions.hideTime,function () {
      $('.screen3').fadeIn()
    })

  })
}
//前端校验
var submitSingForm = function(fn) {
  //报名提交
  $('.info-submit').on('click', function (e) {
    e.preventDefault();
    if(checkSingUpForms($(this), '.form')) {
      fn&&fn($(this));
    }
  });
}

var promptTextTimers;
function promptText(text) {
  $(".msg-info").fadeIn().text(text)
  // $(el).parent().css('backgroundColor','red');
  clearTimeout(promptTextTimers);
  promptTextTimers = setTimeout(function () {
    $(".msg-info").fadeOut().text('')
    //console.log(1)
  },1500);
}
//input 验证
var checkSingUpForms = function(_this,PARENTS) {
  if (_this.parents(PARENTS).find("._city").val() == 0) {
    promptText("请选择所在城市！");
    return false;
  }
  // 面积
  if (_this.parents(PARENTS).find(".area").val() == '' || _this.parents(PARENTS).find(".area").val() == '请输入您的房屋面积') {
    promptText("面积不能为空！");
    _this.parents(PARENTS).find(".area").focus();
    return false;
  }
  var numRef = /^\d{1,6}$/
  var mianji = _this.parents(PARENTS).find(".area").val()
  if(!numRef.test(mianji)){
    promptText("面积必须为纯数字！");
    _this.parents(PARENTS).find(".name").focus();
    return false;
  }
  // 姓名
  if (_this.parents(PARENTS).find(".name").val() == '' || _this.parents(PARENTS).find(".name").val() == '请输入您的姓名') {
    promptText("您的称呼不能为空！");
    _this.parents(PARENTS).find(".name").focus();
    return false;
  }
  var reg = /^[\u4E00-\u9FA5]+$/;
  var name = _this.parents(PARENTS).find(".name").val();
  if (!reg.test(name)) {
    promptText("称呼必须是中文！");
    _this.parents(PARENTS).find(".name").focus();
    return false;
  }
  if (_this.parents(PARENTS).find(".name").val().replace(/[^x00-xff]/g, "**").length > 20) {
    promptText("称呼保持在10个字以内！");
    _this.parents(PARENTS).find(".name").focus();
    return false;
  }
  if (_this.parents(PARENTS).find(".mobile").val() == '' || _this.parents(PARENTS).find(".name").val() == '请输入您的电话') {
    promptText("您的电话不能为空！");
    _this.parents(PARENTS).find(".mobile").focus();
    return false;
  } else {
    var tel = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
    if (!tel.test(_this.parents(PARENTS).find(".mobile").val())) {
      promptText("您的电话输入有误，请重新填写！");
      _this.parents(PARENTS).find(".mobile").focus();
      return false;
    }
  }

  // if(!_this.parents(PARENTS).find(".deft_agre_state").prop('checked')){
  //   promptText("请认真阅读用户协议，如已阅读请勾选！");
  //   return false;
  // }
  return true;
}