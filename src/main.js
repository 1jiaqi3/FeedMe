// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';
import comments from './components/comments/comments';
import restaurants from './components/restaurants/restaurants';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/goods', component: goods },
  { path: '/comments', component: comments },
  { path: '/rests', component: restaurants }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
}).$mount('#app');
