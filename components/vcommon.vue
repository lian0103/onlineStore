<template>
  <div>
    <header class="bar bar-nav header">
      <span @click="showmenu">
        <i class="fas fa-bars"></i>
      </span>
       <span><router-link  to="/OQuery">
            <i class="fas fa-shopping-cart"></i>
        </router-link></span>
        <span><router-link  to="/PData">
            <i class="fas fa-user-circle"></i>
        </router-link> </span>
    
    </header>
    <div id="body_leftblock" v-bind:class="{ menu_active: isActive }">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="nav flex-column">
              <!-- <a href="#" v-for=' item in menulist' :key='item.id' @click="pageTo(item.href)" class="nav-link">{{item.txt}}</a> -->
              <router-link v-for=" item in menulist" :key="item.id" :to="{path:'/'+item.href}">{{item.txt}}
              </router-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      clicked_menu: false,
      menulist: [
        { id: 1, href: "PDitems", txt: "商品瀏覽" },
        { id: 2, href: "OQuery", txt: "訂單查詢" },
        { id: 3, href: "PData", txt: "個人資料" }
      ],
      isActive: false
    };
  },
  methods: {
    pageTo: function(e) {
      //填入page 等同於置換整個內容 把新的vue.component加入
      //new vproduct().$mount('#webApp_content_snode')
      init_snode();
      if (e == "shopping_cart") {
        $("#webApp_content").html("<h1>~~~~購物車~~~~</h1>");
      } else if (e == "member_center") {
        $("#webApp_content_snode").html("<h1>~~~~會員~~~~</h1>");
      } else if (e == this.menulist[0].href) {
        new vproduct().$mount("#webApp_content_snode");
      }
    },
    showmenu: function() {
      if (this.clicked_menu == false) {
        $("#body_leftblock").addClass("menu_active");
        this.clicked_menu = true;
      } else {
        $("#body_leftblock").removeClass("menu_active");
        this.clicked_menu = false;
      }
    }
  }
};
</script>

<style>
.h1title {
  color: red;
  font-size: 30px;
}
</style>