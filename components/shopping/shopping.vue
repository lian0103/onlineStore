<template>
  <div class="container wrapper">
    <div class="row">
      <div class="col-12" v-if="num == 0">
        尚未加入購物車 {{num}}
      </div>
      <div v-else-if="num >= 1">
        <div class="col-12">
          <span class="btn_edit" @click="showInputs">編輯</span>
          <div class="clearbox"></div>
        </div>
        <div class="col-12" v-for="item in datas" :key="item.pid" @click="chooseThis(item.pid)">
          <div class="flexbox_shopping">
            <div class="checkboxinputs" style="display:none">
              <input type="checkbox" name="item-ccheckbox" v-bind:id="item.pid" checked>
              <label for="item.pid" class="asCheckbox"><i class="fas fa-check"></i></label>
            </div>
            <img v-bind:src="item.pimg" alt="">
            <div class="txtbox">
              <h3>{{item.ptitle}}</h3>
              <span>{{item.pprice}}</span>
              <div class="btn_num">
                <span @click.stop="minusnumber(item.pid,item.pprice)"><i class="fas fa-minus"></i></span>
                <span v-bind:id="item.pid">1</span>
                <span @click.stop="addnumber(item.pid,item.pprice)"><i class="fas fa-plus"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 fixed_bottom">
          <label  @click.prevent="selectall">
            <input type="checkbox" id="selectall01" checked>
            <label for="selectall01" class="asCheckbox" name="selectall01"><i class="fas fa-check"></i></label>
            <span>全選</span>
          </label>
          <label for="">
            合計<input type="text" v-bind:value="sumtotal">
          </label>
          <button @click="neworder">產生訂單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      // num:shoppingList.datas.length,
      // datas:shoppingList.datas,
      btnnum:0,
      isselectall:true,
      isfirsttime:true,
      isshow:false,
      isinputwork:false,
      ctotal:0,
      checkedlist:[],
      num:1,
      datas:[
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
      ],
    };
  },
  methods:{
    showInputs:function(){
      if(this.isshow == false){
        $('.checkboxinputs').show();
        this.isshow = true;
        this.isinputwork = true;
      }else{
        $('.checkboxinputs').hide();
        this.isshow = false;
        this.isinputwork = false;
      }
    },
    chooseThis:function(id){
      if(this.isinputwork == true){
        var target = 'input[id="'+ id +'"]';
        var temparr = this.checkedlist;

        if(temparr.includes(id)){
          $(target).removeAttr('checked');
          temparr.splice(temparr.indexOf(id),1);
        }else{
          temparr.push(id);
          $(target).attr('checked','true');
        }
        this.checkedlist = temparr ;
         console.log(this.checkedlist);
      }
    },
    addnumber:function(id,price){
      var target = 'span[id="'+ id+'"]';
      var num = parseInt($(target).text());
      $(target).text((num+1));
      this.btnnum = num +1;
      this.checkedlist.push('-1');

    },
    minusnumber:function(id,price){
      var target = 'span[id="'+ id+'"]';
      var num = parseInt($(target).text());
      if(num>0){
        $(target).text((num-1));
        this.btnnum = num - 1;
        this.checkedlist.push('-1');
      }
    },
    selectall: function(){
      console.log(this.isselectall);
      if(this.isselectall == true){//已都選了 要拿掉
         var tarr = [];
         this.checkedlist = tarr;
         this.isselectall = false;
         $('input[name="item-ccheckbox"]').removeAttr('checked');
         $('#selectall01').removeAttr('checked');
      }else if(this.isselectall == false){
        var rnums = this.datas.length;
        var tarr = [];
        for(let i=0;i<rnums;i++){
          tarr.push(i+1);
        }
        this.checkedlist = tarr;
        this.isselectall = true;
        $('input[name="item-ccheckbox"]').attr('checked','true');
          $('#selectall01').attr('checked','true');
      }
    },
    neworder : function(){

    }
  },
  watch:{
    btnnum:function(value){
      console.log(value);
    }
  },
  computed: {
    sumtotal: function() {
      var sum = 0;
      var arrkey = this.checkedlist;
      var arrMapping = this.datas;

      for(let i=0;i<arrkey.length;i++){
        if(arrkey[i] != "-1"){
          for(let k=0;k<arrMapping.length;k++){
            if(arrkey[i] == arrMapping[k].pid){
              var pval = parseInt(arrMapping[k].pprice.replace('$',''));
              var target = 'span[id="'+ arrkey[i] +'"]';
              var pnum= parseInt($(target).text());
              sum += (pnum*pval);
              // console.log(sum);
            }
          }
        }
      }

      return sum;
    },
  },
  mounted: function(){
    //預設全選
    if(this.isfirsttime == true){
      var rnums = this.datas.length;
      var tarr = [];
      for(let i=0;i<rnums;i++){
        tarr.push(i+1);
      }
      this.checkedlist = tarr;
    }
  }
};

</script>

<style>
.flexbox_shopping{
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 150px;
  max-height: 170px;
}

.flexbox_shopping div input,.asCheckbox,.fixed_bottom label label{
  width: 21px;
  height: 21px;
  border-radius: 3px;
  background-color: #f5a623;
  font-size: 0em;
}
.fixed_bottom label label{
  width: 23px;
  height: 23px;
  display: inline-block;
  margin: 0 15px;
  position: absolute;
  left: 0;
}

.flexbox_shopping div input{
  /* display: none; */
  opacity: 0;
}

#selectall01{
  display: none;
}

.flexbox_shopping div input + label{
  position: absolute;
  left: 15px;
  top: 40%;
}

.flexbox_shopping div input:checked+label,#selectall01:checked+label{
    font-size: 1em;
    color: #fff;
    text-align: center;
    line-height: 1.2;
    display: block;
    margin-bottom: unset;
}

.flexbox_shopping img{
  width: 30%;
  padding: 10px;
}
.txtbox{
  width: 100%;
  position: relative;
  min-height: 100px;
  max-height: 120px;
}
.txtbox span{
  position: absolute;
  left: 0;
  bottom: 0;
}
.txtbox h3{
  font-size: .7em;
  color: #000;
  font-weight: bold;
}
.btn_num{
  position: absolute;
  right: 5%;
  bottom: 0;
  display: flex;
}
.btn_num span{
  position: relative;
  background-color: #fff;
  width: 30px;
  display: block;
  text-align: center;
  font-size: 1em;
}
.btn_num span:nth-child(2){
  color: #000;
}
.btn_edit{
  float: right;
  padding: 5px;
}
.clearbox{
  clear: both;
}
.fixed_bottom{
  position: fixed;
  bottom: 0;
  min-height: 60px;
  line-height: 1.5;
  padding: 5px 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fixed_bottom input{
  width: 50px;
  padding: 0px 5px;
  background-color: transparent;
  border: unset;
  color: #f00;
}
.fixed_bottom label{
  display: inline-block;
  margin: unset;
}
.fixed_bottom label:nth-child(2) input{
  width: 100px;
}
.fixed_bottom label:nth-child(1){
  padding-left: 40px;
  line-height: 1.1;
  width: 25%;
}
.fixed_bottom button{
  height: 50px;
  padding: 2px 5px;
  border-radius: 3px;
  background-color: #f5a623;
  color: #fff;
}

</style>