import Vue from 'vue';
import App from './App.vue';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import router from './routes';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
