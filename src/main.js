import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Trend from 'vuetrend'
import VueRouter from 'vue-router'

Vue.config.devtools = true
/* import smallCard from '@/components/dashboard/smallCard';

Vue.components('smallCard', smallCard) */
Vue.config.productionTip = false
Vue.use(Trend)
Vue.use(VueRouter)

 



const router = new VueRouter({
  mode: "history",
  routes: [
    // 라우팅 설정하기
    {
      path: "/good-beers",
      name: "test",
      component: () => import(/* webpackChunkName: "test" */ "./components/dashboard/test.vue")
    }
  ]
}); 


new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')



