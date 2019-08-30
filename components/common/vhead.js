const vhead = Vue.component('vhead', {
  data() {
    return {
      clicked_menu: false,
    }
  },
  props: ['vitem'],
  template: `
    <header class="bar bar-nav header">
      <span @click='showmenu'><i class="fas fa-bars"></i></span>
      <span @click='alermsg'><i class="fas fa-shopping-cart"></i></span>
      <span @click='alermsg2'><i class="fas fa-user-circle"></i></span>
    </header>
    `,
  methods: {
    alermsg: function () {
      //填入page 等同於置換整個內容 把新的vue.component加入
      //new vproduct().$mount('#webApp_content_snode')
      init_snode();
      $('#webApp_content').html('<h1>~~~~購物車~~~~</h1>');
    },
    alermsg2: function () {
      init_snode();
      $('#webApp_content_snode').html('<h1>~~~~會員~~~~</h1>');
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

