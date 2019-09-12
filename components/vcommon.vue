<template>
  <div>
    <header class="navbar navbar-dark bg-dark header">
      <span @click="showmenu">
        <i class="fas fa-bars"></i>
      </span>
      <!-- <span>迷霧森林</span> -->
      <span>
        <router-link to="/Search">
          <i class="fas fa-search"></i>
        </router-link>
      </span>
      <span id="shopping-cart">
        <router-link to="/Scart">
          <i class="fas fa-shopping-cart"></i>
          <div></div>
        </router-link>
      </span>
    </header>
    <div id="body_leftblock" v-bind:class="{ menu_active: isActive }">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="nav flex-column nav-fix">
              <!-- <a href="#" v-for=' item in menulist' :key='item.id' @click="pageTo(item.href)" class="nav-link">{{item.txt}}</a> -->
              <router-link
                v-for=" item in menulist"
                :key="item.id"
                :to="{path:'/'+item.href}"
              >{{item.txt}}</router-link>
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
        { id: 3, href: "member", txt: "個人資料" }
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
        //讓選項被點選後 選單回去
        $('a').click(()=>{
           //ES6 箭頭函式語法 確保this指向這個vue實例
           $("#body_leftblock").removeClass("menu_active");
           this.clicked_menu = false;
        })
      } else {
        $("#body_leftblock").removeClass("menu_active");
        this.clicked_menu = false;
      }
    },
  },
  watch:{

  },
  mounted: function(){
    //讓選單點選後回去

  },
};
</script>

<style>
#webApp_common .header {
  background-color: #3e3e3e;
  padding: 5px 0;
  height: 8vh;
  min-height: 40px;
  max-height: 50px;
  line-height: 1.5;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  display: inherit;
}

.header span {
  width: 2.2em;
  padding: 0em 0.45em;
  vertical-align: middle;
  background: transparent;
  width: 2em;
  font-size: 1.5em;
  color: #fff;
  text-align: center;
}
/* .header span{
  font-family: DFKai-sb;
} */

.header span:nth-child(n + 2) {
  float: right;
}

.header span > a {
  color: #fff;
}

#body_leftblock {
  position: fixed;
  height: 100vh;
  z-index: 1080;
  background-color: #3e3e3e;
  transform: translateX(-100%);
  transition: 1s;
  top: 50px;
  left: 0;
}

.menu_active {
  transform: translateX(0%) !important;
}

.nav-fix {
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.nav-fix a {
  display: block;
  flex-basis: 5vh;
}
</style>