import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'
import { ValidationObserver } from 'vee-validate'

import CxltToastr from 'cxlt-vue2-toastr'
var toastrConfigs = {
  position: 'top right',
  showDuration: 1000,
  timeOut:5000,
  closeButton:true,
  showMethod:'fadeIn',
  hideMethod:'fadeOut'
}
Vue.use(CxltToastr, toastrConfigs)

import { HasError, AlertError } from 'vform'
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.config.productionTip = false

// Vue.prototype.$file_path = 'http://127.0.0.1:8000'
Vue.prototype.$image_path = 'http://localhost:8000/';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
