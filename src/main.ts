import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import VueFuse from 'vue-fuse'
import VModal from 'vue-js-modal'
import '@/assets/css/tailwind.css'

// Vue.use(VueFuse)
Vue.use(VModal)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
