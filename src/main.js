// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueBreadcrumbs from 'vue2-breadcrumbs'
import VueResource from 'vue-resource'
import VmBackTop from 'vue-multiple-back-top'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import Lang from 'vuejs-localization'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'


// jvector map
import 'jvectormap'
import 'jvectormap/tests/assets/jquery-jvectormap-world-mill-en'
import 'jvectormap/jquery-jvectormap.css'

// include all css files
import './lib/VuelyCss'

function toast({ title, message, type, timeout, cb }) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToastr.init({ types: toastTypes })

Vue.use(VModal, { })
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueBreadcrumbs)
Vue.use(VueNotifications, options)
Vue.component(VmBackTop.name, VmBackTop)

Lang.requireAll(require.context('./lang', true, /\.js$/))
Vue.use(Lang)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
