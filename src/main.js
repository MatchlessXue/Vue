// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import layer from 'vue-layer'
import App from './App'
// import router from './router'
import HelloWorld from './components/HelloWorld'
import HomePage from './components/HomePage'
import Investment from './components/Investment'
import PersonCenter from './components/PersonCenter'
import InvDetail from './components/InvDetail'
import SetUp from './components/SetUp'

import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false;

Vue.prototype.$layer = layer(Vue);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUi);

//配置路由
const router = new VueRouter({
  routes:[
    {path:'/',component:HomePage},
    {path:'/helloworld',component:HelloWorld},
    {name:'Investment',path:'/investment',component:Investment},
    {path:'/personcenter',component:PersonCenter},
    {path:'/InvDetail',component:InvDetail},
    {path:'/setup',component:SetUp},
  ],
  mode:'history',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// const history = window.sessionStorage;
// history.clear()
// let historyCount = history.getItem('count') * 1 || 0;
// history.setItem('/', 0);
//
// router.beforeEach(function (to, from, next) {
//
//   const toIndex = history.getItem(to.path);
//   const fromIndex = history.getItem(from.path);
//
//   if (toIndex) {
//     if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
//       store.commit('UPDATE_DIRECTION', {direction: 'forward'})
//     } else {
//       store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
//     }
//   } else {
//     ++historyCount;
//     history.setItem('count', historyCount);
//     to.path !== '/' && history.setItem(to.path, historyCount);
//     store.commit('UPDATE_DIRECTION', {direction: 'forward'})
//   }
//   next()
// });
