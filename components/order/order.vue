<template>
  <div>
    <div class="container wrapper">
      <div class="row">
        <div class="col-12">
          <h3 class="h3title">購買訂單</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- 引用bt4組件修改 -->
          <ul class="nav fix_orderpill" id="pills-tab" role="tablist">
            <li class="nav-item" v-for=" item in orderbtns" :key="item.id">
              <a
                class="nav-link"
                v-bind:class="{active:item.id == 'order-1'?true:false}"
                v-bind:id="(item.id+'-tab')"
                data-toggle="pill"
                v-bind:href="'#'+item.id"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                @click="putcontent(item.id)"
              >{{item.txt}}</a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade"
              v-bind:class="{active:item.id == 'order-1'?true:false,
                             show:item.id == 'order-1'?true:false}"
              v-for=" item in orderbtns"
              :key="item.id"
              v-bind:id="item.id"
              role="tabpanel"
              v-bind:aria-labelledby="(item.id+'-tab')"
            ></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12"></div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      orderbtns: [
        { id: "order-1", href: "order_all", txt: "全部" },
        { id: "order-2", href: "order_notYetShipping", txt: "待出貨" },
        { id: "order-3", href: "order_notYetRecieve", txt: "待收貨" },
        { id: "order-4", href: "order_returnGoods", txt: "退款/退貨" }
      ],
      // orderstatus 1->已完成 2->待出貨 3->待收貨 4->退款/退貨
      orderlist: [
        {
          oid: 1,
          ordertime: "2019-09-01 09:33",
          ordernum: "AXXXSCCC123",
          orderstatus: 1,
          orderstatus_chi: '已完成',
          count: 3400,
          details: [
            {
              pid: 1,
              ptitle: "正品Vaporesso Aurora Play",
              pprice: "$999",
              ptxt: "愛文芒果",
              pnum: 1
            },
            {
              pid: 2,
              ptitle: "Vaporesso Aurora Play",
              pprice: "$1999",
              ptxt: "愛文芒果",
              pnum: 1
            }
          ]
        },
        {
          oid: 2,
          ordertime: "2019-09-01 09:33",
          ordernum: "AXXXSCCC123",
          orderstatus: 2,
          orderstatus_chi: '待出貨',
          count: 3400,
          details: [
            {
              pid: 1,
              ptitle: "正品Vaporesso Aurora Play",
              pprice: "$999",
              ptxt: "愛文芒果",
              pnum: 1
            }
          ]
        },
        {
          oid: 3,
          ordertime: "2019-09-01 09:33",
          ordernum: "AXXXSCCC123",
          orderstatus: 3,
          orderstatus_chi: '待收貨',
          count: 3400,
          details: [
            {
              pid: 1,
              ptitle: "正品Vaporesso Aurora Play",
              pprice: "$999",
              ptxt: "愛文芒果",
              pnum: 1
            }
          ]
        },
        {
          oid: 4,
          ordertime: "2019-09-01 09:33",
          ordernum: "AXXXSCCC123",
          orderstatus: 4,
          orderstatus_chi: '退款/退貨',
          count: 3400,
          details: [
            {
              pid: 1,
              ptitle: "正品Vaporesso Aurora Play",
              pprice: "$999",
              ptxt: "愛文芒果",
              pnum: 1
            }
          ]
        }
      ],
      temp: [],
      temp2:[],
    };
  },
  methods: {
    putcontent: function(id) {
      var target = "#" + id;
      $(target).empty();
      this.temp = [];
      switch (id) {
        case "order-1":
          this.temp = this.orderlist;
          break;
        case "order-2":
          for (let i = 0; i < this.orderlist.length; i++) {
            if (this.orderlist[i].orderstatus == 2) {
              this.temp.push(this.orderlist[i]);
            }
          }
          break;
        case "order-3":
          for (let i = 0; i < this.orderlist.length; i++) {
            if (this.orderlist[i].orderstatus == 3) {
              this.temp.push(this.orderlist[i]);
            }
          }
          break;
        case "order-4":
          for (let i = 0; i < this.orderlist.length; i++) {
            if (this.orderlist[i].orderstatus == 4) {
              this.temp.push(this.orderlist[i]);
            }
          }
          break;
      }

      var strtemp = "";
      var detail = [];
      for(var i=0;i<this.temp.length;i++){
        strtemp += `<div class="row"><div class="col-12 flexbox_order">`;
        strtemp += `<div class="btn_main mt-3">`;
        strtemp += `<p>${this.temp[i].ordertime} <span>${this.temp[i].orderstatus_chi}</span></p>`;
        strtemp += `<p>訂單編號:${this.temp[i].ordernum}<span>$${this.temp[i].count}</span></p>`;
        strtemp += `</div>`;

        detail = this.temp[i].details;
        // console.log(this.temp[i].details);
        for(var k=0;k<detail.length;k++){
          strtemp += `<div class="item_sub">`;
          strtemp += `<p>${detail[k].ptitle} <span>x${detail[k].pnum}</span></p>`;
          strtemp += `<p>${detail[k].ptxt} <span>${detail[k].pprice}</span></p>`;
          strtemp += `</div>`;
        }
        strtemp += `</div></div>`
      }

      $(target).append(strtemp);
    }
  },
  mounted: function(){
    //預設選全部
    this.putcontent('order-1');
  }
};
</script>

<style>
.h3title {
  font-size: 0.7em;
  line-height: 1.4;
  padding: 10px 0px;
  margin: 0;
  color: #4a4a4a;
}
.fix_orderpill {
  display: flex;
  justify-content: space-between;
}
.fix_orderpill li a {
  padding: 4px 10px;
  margin: 0;
  color: #4a4a4a;
  font-weight: normal;
  font-size: .85em;
}
#pills-tab .active{
  border-bottom: 3px solid #f5a623;
  color: #f5a623 !important;
  font-weight: bold !important;
}
.btn_main{
  background-color: #ededed;
  font-size: .8em;
  padding: 0 3px;
}
.item_sub{
  background-color: #fff;
  font-size: .75em;
  border-bottom: 1px solid rgba(88, 88, 88, .4);
}

.btn_main p,.item_sub p{
  width: 100%;
  position: relative;
  text-align: left;
  color: #000;
  padding: 4px 5px;
  margin: unset;
}
.btn_main p span,.item_sub p span{
  position: absolute;
  right: 0;
}
.btn_main p:nth-child(1) span{
  color: #f5a623;
  font-weight: bold;
}
.item_sub p:nth-child(1){
  font-weight: bold;
}
.item_sub p:nth-child(1) span{
  font-weight: normal;
}

</style>