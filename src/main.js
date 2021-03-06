import 'bootflat/css/bootstrap.min.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import routes from './routers';

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
  // mode: 'history',1
  routes, // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
