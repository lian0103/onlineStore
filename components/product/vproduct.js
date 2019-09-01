
const vproduct = Vue.component('vproduct', {
    data() {
        return {

        }
    },
    props: ['vitem'],
    template: `
    <div class="container" id="body_rightblock">
        <div class="row">
            <div class="col-12">
            <router-link to="/foo/aa">Go to Foo</router-link>
            <router-link to="/bar/bb">Go to Bar</router-link>
            </div>
            <router-view></router-view>
        </div>
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
  `
});


//拆解成小組件
//

const vproduct_carousel = Vue.component('vproduct_carousel', {
    data() {
        return {
            // slideImgs: [{ src: 'asset/images/demo_1.jpg', class: 'active'}, //目前無法迴圈綁定在這個結構
            //             { scr: 'asset/images/demo_2.jpg', class: ''}]
        }
    },
    template: `
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner carousel-inner-fix">
                <div class="carousel-item active">
                    <img src="asset/images/demo_1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="asset/images/demo_2.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `,
});
