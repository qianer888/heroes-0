// ES6中的模块化的语法，导入模块
import Vue from 'vue'

// 根组件
import App from './App.vue'

// 提示当前处在开发模式, false 不提示
Vue.config.productionTip = false

import axios from 'axios'
// 配置axios的基地址，调用请求方法的时候get(url)，会自动把请求方法的路径拼接到基地址后面
axios.defaults.baseURL = 'http://localhost:3000/'
// 让所有vue 实例都具有一个属性axios，给Vue构造函数的原型增加成员
Vue.prototype.axios = axios


// 导入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

import router from './router'

// 创建路由对象
new Vue({
  render: createElement => createElement(App),
  // 配置router对象
  router
}).$mount('#app')
