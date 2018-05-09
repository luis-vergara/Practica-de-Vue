import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes'
import VueRouter from 'vue-router';
import {store} from './store';
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes
});
router.beforeEach((to,from,next)=>{
  console.log('acceso global a ruta');
  if(to.meta.privado)
   next(store.state.auth)
  else
   next();
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
