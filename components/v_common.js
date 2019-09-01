const v_common = Vue.component('vcommon', {
  data() {
    return {
      clicked_menu: false,
      menulist: [{ href: 'PDitems', txt: '商品瀏覽' }, { href: 'OQuery', txt: '訂單查詢' }, { href: 'PData', txt: '個人資料' }],
      isActive: false
    }
  },
  template: `
  <div>
      <header class="bar bar-nav header">
          <span @click='showmenu'><i class="fas fa-bars"></i></span>
          <span @click='pageTo("shopping_cart")'><i class="fas fa-shopping-cart"></i></span>
          <span @click='pageTo("member_center")'><i class="fas fa-user-circle"></i></span>
      </header>
      <div id="body_leftblock"  v-bind:class='{ menu_active: isActive }'>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="nav flex-column ">
                        <a href="#" v-for=" item in menulist"  @click="pageTo(item.href)" class="nav-link">{{item.txt}}</a>
                    </nav>
                </div>
                </div>
            </div>
      </div> 
  </div>
    `,
  methods: {
    pageTo: function (e) {
      //填入page 等同於置換整個內容 把新的vue.component加入
      //new vproduct().$mount('#webApp_content_snode')
      init_snode();
      if (e == "shopping_cart") {
        $('#webApp_content').html('<h1>~~~~購物車~~~~</h1>');
      } else if (e == "member_center") {
        $('#webApp_content_snode').html('<h1>~~~~會員~~~~</h1>');
      } else if (e == this.menulist[0].href){
        new vproduct({
          router:router
        }).$mount('#webApp_content_snode');
      }

    },
    showmenu: function () {
      if (this.clicked_menu == false) {
        $('#body_leftblock').addClass('menu_active');
        this.clicked_menu = true;
      } else {
        $('#body_leftblock').removeClass('menu_active');
        this.clicked_menu = false;
      }
    }
  }
});