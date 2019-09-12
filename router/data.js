//data物件

const dataClass = function(){
  return {
    component:"",
    info:"",
    datas:[]
  }
}

//平行傳值 開一個全域data物件
const shoppingCart = new dataClass();
shoppingCart.component = "vcards.vue,common.vue";
shoppingCart.info = "計算購物車數量";
shoppingCart.datas.push(-1);

//平行傳值 開一個全域data物件
const shoppingList = new dataClass();
shoppingList.component = "shopping.vue,vcard.vue";
shoppingList.info = "計算購物車數量";

//平行傳值 開一個全域data物件
const orderList = new dataClass();
orderList.component = "order.vue";
orderList.info = "訂單內容";
