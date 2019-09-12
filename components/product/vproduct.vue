<template>
    <div class="container wrapper" id="body_rightblock">
      <div class="row">
          <div class="col-12" style="padding: inherit;">
            <vproduct_carousel></vproduct_carousel>
          </div>
      </div>
      <div class="row">
          <p class="ptitle">所有商品</p>
      </div>
      <div class="row">
          <div class="col-12">
              <!-- 商品卡片 -->
              <vpcards @count-event="getdatas"></vpcards>
          </div>
      </div>
    </div>
</template>

<script>
// httpVueLoaderRegister(vproduct_carousel, 'vproduct_carousel.vue');
// import vproduct_carousel from httpVueLoader('/components/product/vproduct_carousel.vue');

module.exports = {
    data: function() {
        return {

        }
    },
    components: {
        'vproduct_carousel': httpVueLoader(urlchange('/components/product/vproduct_carousel.vue')),
        'vpcards': httpVueLoader(urlchange('/components/product/vpcards.vue')),
    },
    methods: {
        getdatas : function(msg){
            console.log(msg);
        }
    },

}
</script>

<style>
    .ptitle{
        width: 100%;
        font-size: .8em;
        color: #4a4a4a;
        padding: 10px 0px 0px 15px;
    }
</style>