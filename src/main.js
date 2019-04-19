import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { Input,Button,MessageBox,Message,Alert } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Input)
Vue.use(Alert)
Vue.use(Button)
Vue.use(MessageBox)

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
