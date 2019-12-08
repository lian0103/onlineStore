
//vue設定
Vue.config.productionTip = false

//page內容節點設定
function init_snode(){
  // vhead.clicked_menu = false;
  $('#webApp_content').empty();
  $('#webApp_content').append(`<div id="webApp_content_snode"></div>`);
}

//加入router
$('body').before("<script src='router/router.js'></script>");
$('body').before("<script src='router/data.js'></script>");

// 組件數的頭 資料的頭?
new Vue({
  el: '#webApp_common',
  data: {
    datas : [],
  },
  methods:{
    alermsg:function(){
      alert('work');
    },
    getdatas:function(msg){
      alert(msg);
      console.log('接收的資料--------->'+msg);
    }
  },
  components: {
    // 'vhello': httpVueLoader('/components/product/vhello.vue'),
    'vcommon': httpVueLoader('./components/vcommon.vue'),
    'vproduct': httpVueLoader('./components/product/vproduct.vue'),
  },
  router:app_router, //從router.js來的設定
});



