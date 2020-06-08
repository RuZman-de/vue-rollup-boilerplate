import Vue from 'vue';
{{#router}}import VueRouter from 'vue-router';{{/router}}
import App from './App.vue';
{{#if_eq vuetify "vuetify"}}import vuetify from './plugins/vuetify';{{/if_eq}}

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({{{#if_eq vuetify "vuetify"}}
  vuetify,{{/if_eq}}
  render: h => h(App)
}).$mount('#app');
