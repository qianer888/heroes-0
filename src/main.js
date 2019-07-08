import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入样式以及静态资源
import './assets/css/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

//导入路由模块
import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
