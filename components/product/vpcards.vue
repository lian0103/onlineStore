<template>
  <div>
    <div class="flexbox">
        <div
        class="pcard"
        v-for="item in pcard_datas"
        :key="item.pid"
        v-on:click="showdetail(item.pid,item.ptitle,item.pimg)"
        >
        <img v-bind:src="item.pimg" alt />
        <p>{{item.ptitle}}</p>
        <span>{{item.pprice}}</span>
    </div>
    <div class="pdetail" style="display:none" v-bind:class="{ pdtail_active: isActive }">
        <div class="pdtailflexbox">
            <img src alt />
            <p></p>
            <span></span>
        </div>
        <div class="btn_close" @click="btn_close">
            <i class="far fa-times-circle"></i>
        </div>
        <div class="addPdbox"><button class="btn_addPd" @click="addPd">加入購物車</button></div>
    </div>
  </div>

  </div>

</template>

<script>
module.exports = {
  data: function() {
    return {
      pcount:0,
      pid : 0,
      isActive: false,
      pcard_datas: [
        {
          pid: 1,
          ptitle: "正品Vaporesso Aurora Play",
          pprice: "$999",
          pimg: "https://picsum.photos/400/400/?random=1"
        },
        {
          pid: 2,
          ptitle:
            "正品Vaporesso Aurora Play極光Zero2 含果汁Zero二代 Zero2代電子煙 電子菸",
          pprice: "$1200",
          pimg: "https://picsum.photos/400/400/?random=2"
        },
        {
          pid: 3,
          ptitle:
            "正品Vaporesso Aurora Play極光Zero2 含果汁Zero二代 Zero2代電子煙 電子菸",
          pprice: "$3000",
          pimg: "https://picsum.photos/400/400/?random=3"
        },
        {
          pid: 4,
          ptitle:
            "正品Vaporesso Aurora Play極光Zero2 含果汁Zero二代 Zero2代電子煙 電子菸",
          pprice: "$99",
          pimg: "https://picsum.photos/400/400/?random=4"
        }
      ]
    };
  },
  methods: {
    showdetail: function(id, title, img) {
        this.pid = id;
      if (this.isActive == false) {
        this.isActive = true;
        $(".pdtailflexbox img").attr("src", img);
        $(".pdtailflexbox p").text(title);
        $(".pdtailflexbox span").text("內文字串");
        $(".pdetail").addClass("pdtail_active").show();
      }
    },
    btn_close : function() {
      if (this.isActive == true) {
        this.isActive = false;
        $(".pdetail").removeClass("pdtail_active").hide();
      }
    },
    addPd : function(){
        var c = this.pcount + 1;
         this.pcount = c;
        alert(this.pid);
        alert(this.pcount);
        this.$emit('count-event',{'pid':this.pid,'pcount':this.pcount})
    },
  }
};
</script>

<style>
.flexbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.pcard {
  width: 45%;
  min-height: 340px;
  padding: 0 0 30px 0;
  margin-top: 15px;
  position: relative;
  overflow-y: hidden;
}
.pcard > img {
  width: 100%;
}
.pcard p {
  color: #000;
  padding: 0 5px;
  font-size: 0.9em;
}
.pcard span {
  color: #d0021b;
  font-size: 0.7em;
  position: absolute;
  left: 10px;
  bottom: 15px;
}

.btn_close,.addPdbox {
  position: fixed;
  z-index: 210;
}
.btn_close{
  top: 70px;
  right: 15px;
  color: #000;
  font-size: 1.3em;
}
.addPdbox {
    width: 100%;
    height: 70px;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    line-height: 1;
}
.addPdbox button{
    width: 75%;
    height: 55px;
    margin: auto;
    display: inline-block;
    border-radius: 3px;
    background-color: #f5a623;
    color: #fff;
}

.pdetail p,
.pdetail span {
  padding: 5px 20px;
  color: #000;
}
.pdetail img {
  max-height: 45vh;
}

.pdtailflexbox{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: hidden;
    position: fixed;
    z-index: 200;
    display: flex;
    width: 100%;
    height: 92vh;
    padding: 20px 0;
    left: 0;
    top: 50px;
    background-color: #fff;
}

</style>