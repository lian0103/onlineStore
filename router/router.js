
//路由設定
const Foo = { template: '<div class="h1title">foo~~ {{ $route.params.id }}</div>' }
const Bar = { template: '<div class="h1title">bar~~ {{ $route.params.id }}</div>' }
const routes = [
  { path: '/foo/:id', component: Foo },
  { path: '/bar/:id', component: Bar }
]
const app_routes = [
  { path: '/', redirect: 'PDitems' },
  { path: '/PDitems', component: httpVueLoader('/components/product/vproduct.vue'),name:'產品'},
  { path: '/OQuery', component: Foo },
  { path: '/PData', component: Bar },
]
  
const app_router = new VueRouter({
  routes: app_routes, 
})
