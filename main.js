
//vue設定
Vue.config.productionTip = false

//page內容節點設定
function init_snode(){
  // vhead.clicked_menu = false;
  $('#webApp_content').empty();
  $('#webApp_content').append(`<div id="webApp_content_snode"></div>`);
}

//加入vue實例方式
//0901 改用.vue檔 httpVueLoader()套件載入
// $('body').before("<script src='components/v_common.js'></script>");


//加入router
$('body').before("<script src='router/router.js'></script>");

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
  components: {
    // 'vhello': httpVueLoader('/components/product/vhello.vue'),
    'vcommon': httpVueLoader('/components/vcommon.vue'),
    'vproduct': httpVueLoader('/components/product/vproduct.vue'),
  },
  router:app_router, //從router.js來的設定
});

//載入後先掛上要呈現的vue實例
$(function(){
  // new vproduct({
  //   router
  // }).$mount('#webApp_content_snode');
})

