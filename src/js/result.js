$(function () {
  //  获取参数中的参数
  var data = JSON.parse(window.localStorage.getItem("uzhuang_infos"))
  var uz_style ='中式/新古典';
  var uz_style_range = '60%';
  if(data && data.style){
    switch (data.style){
      case "om":
        uz_style = '欧式/美式';
        uz_style_range = '25%'
        break
      case "zx":
        uz_style = '中式/新古典';
        uz_style_range = '20%'
        break
      case "xj":
        uz_style = '现代/极简';
        uz_style_range = '50%'
        break
      case "rd":
        uz_style = '日式/东南亚';
        uz_style_range = '5%'
        break
    }
  }

  var liHtml = ''
  var total = null
  $("#uz-style").html(uz_style)
  $.each(data.data,function (item,index) {
    var this_total = Math.floor(index.total)
    total += this_total -0
    liHtml +=  "      <li class=\"pay-infos\">\n" +
        "        <p class=\"room\">"+item+"</p>\n" +
        "        <p class=\"room-pay\">￥"+this_total+"</p>\n" +
        "      </li>"
  })
  $("#uz-style-range").html(uz_style_range)
  $("#sub-pay-total").html(total+"元")
  $("#pay-detail-ul").html(liHtml)
  $("#re-choose").on("click",function () {
    window.localStorage.clear('uzhuang_infos')
    window.location.href = "http://m.uzhuang.com/mobile/activity/my_home/index.html"
  })

  //
})

