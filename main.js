
//vue設定
Vue.config.productionTip = false

//page內容節點設定
function init_snode(){
  // vhead.clicked_menu = false;
  $('#webApp_content').empty();
  $('#webApp_content').append(`<div id="webApp_content_snode"></div>`);
}

//加入vue實例方式???
$('body').before("<script src='components/v_common.js'></script>");
$('body').before("<script src='components/product/vproduct.js'></script>");

//加入router
$('body').before("<script src='router/rindex.js'></script>");

// 組件數的頭 資料的頭
new Vue({
  el: '#webApp_common',
  data: {
    datas : [],
  },
  methods:{
    alermsg:function(){
      alert('work');
    }
  },
  // router:menu_router
});

//載入後先掛上要呈現的vue實例
$(function(){
  new vproduct({
    router
  }).$mount('#webApp_content_snode');
})

