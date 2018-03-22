/**
 *@author wangbingyang
 *@date 2018/03/22 08:58:02
 *@desc
 */
$(function () {
  var data = JSON.parse(window.localStorage.getItem("uzhuang_infos"))
  var uz_style ='中式/新古典';
  var uz_style_range = '60%';
  var total = null
  var swiperImgSrc = ["zhongshi1","zhongshi2","zhongshi3"]

  var liHtml = '';
  var swiperHtml = '';
  if(data && data.style){
    switch (data.style){
      case "om":
        uz_style = '欧式/美式';
        uz_style_range = '25%';
        swiperImgSrc = ["oushi1","oushi2","oushi3"]
        break;
      case "zx":
        uz_style = '中式/新古典';
        uz_style_range = '20%';
        swiperImgSrc = ["oushi1","oushi2","oushi3"]
        break;
      case "xj":
        uz_style = '现代/极简';
        uz_style_range = '50%';
        swiperImgSrc = ["xiandai1","xiandai2","xiandai3"]
        break;
      case "rd":
        uz_style = '日式/东南亚';
        uz_style_range = '5%';
        swiperImgSrc = ["rishi1","rishi2","rishi3"]
        break
    }
  }


  $.each(data.data,function (key,value) {
    var this_total = Math.floor(value.total);
    total += this_total -0
    liHtml +=  "      <li class=\"pay-infos\">\n" +
        "        <p class=\"room\">"+key+"</p>\n" +
        "        <p class=\"room-pay\">￥"+this_total+"</p>\n" +
        "      </li>"
  })

  $.each(swiperImgSrc,function (key,value) {
    console.log(value)
    swiperHtml += "    <div class=\"swiper-slide\"><img src=\"./images/" + value + ".png\" alt=\"\"></div>"
  })
  $("#my-swiper").html(swiperHtml)
  $("#uz-style").html(uz_style)
  $("#uz-style-range").html(uz_style_range);
  $("#sub-pay-total").html(total+"元");
  $("#pay-detail-ul").html(liHtml);
  $("#re-choose").on("click",function () {
    window.localStorage.clear('uzhuang_infos')
    window.location.href = "http://m.uzhuang.com/mobile/activity/my_home/index.html"
  })

  //
})

