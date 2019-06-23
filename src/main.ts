import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import './registerServiceWorker';
import languages from './assets/lang';

Vue.config.productionTip = false;

Vue.use(VueI18n);
const lang = new VueI18n({
  locale: 'ja',
  messages: languages
});

new Vue({
  router,
  store,
  i18n:lang,
  render: (h) => h(App),
}).$mount('#app');
