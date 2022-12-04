import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import html2pdf from "html2pdf.js";
import Select2 from 'v-select2-component';


Vue.use(Vuelidate);
Vue.use(html2pdf);
Vue.component('Select2', Select2);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
