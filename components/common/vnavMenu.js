const vnavmenu = Vue.component('vnavmenu', {
  data(){
    return{
      menulist:[{href:'Pbrowser',txt:'商品瀏覽'},{href:'OQuery',txt:'訂單查詢'},{href:'PData',txt:'個人資料'}],
      isActive:false
    }
  },
  props: ['vitem'],
  template: `
  <div id="body_leftblock"  v-bind:class='{ menu_active: isActive }'>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="nav flex-column ">
                    <a href="#" v-for=" item in menulist"  @click="chagePage(item.href)" class="nav-link">{{item.txt}}</a>
                </nav>
            </div>
        </div>
    </div>
  </div> `,
  methods: {
    chagePage:function(e){
      if(e == this.menulist[0].href){
        init_snode();
        new vproduct().$mount('#webApp_content_snode');
      }
    }
  },
});
