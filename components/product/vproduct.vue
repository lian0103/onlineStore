<template>
    <div class="container" id="body_rightblock">
      <div class="row">
          <div class="col-12">
            <vproduct_carousel></vproduct_carousel>
          </div>
      </div>
      <div class="row">
          <ul class="nav nav-pills nav-justified ml-2">
              <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#home">最新動態</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#menu1">人氣商品</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#menu2">熱銷排行</a>
              </li>
          </ul>
          <div class="tab-content">
              <div id="home" class="container tab-pane active"><br>
                <h3>最新動態</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, totam?</p>
              </div>
              <div id="menu1" class="container tab-pane fade"><br>
                <h3>人氣商品</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, temporibus.</p>
              </div>
              <div id="menu2" class="container tab-pane fade"><br>
                <h3>熱銷排行</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sunt?</p>
              </div>
            </div>
      </div>
      <div class="row">
          <div class="col-12">
              <div class="card pd_card">
                  <img src="https://picsum.photos/400/300/?random=1" class="card-img-top">
                  <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk ofthescard's content.</p>
                  </div>
              </div>
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
        'vproduct_carousel': httpVueLoader('/components/product/vproduct_carousel.vue'),
    },
}
</script>

<style>
    .h1title{
        color: red;
    }
</style>