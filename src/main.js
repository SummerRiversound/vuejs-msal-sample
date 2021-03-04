import Vue from 'vue'
import App from './App'
import '@/plugins/axios'
import router from '@/plugins/router'
import { store } from '@/plugins/store'
import * as Global from '@/plugins/util/global'
import vuetify from './plugins/vuetify'
import msal from 'vue-msal'
import msalConfig from '@/plugins/msal/config'

Vue.use(msal, msalConfig)


Object.keys(Global).forEach(k => {
    Vue.use(Global[k])
})
Vue.config.productionTip = false

window.vm = new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
