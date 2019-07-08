import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.css'
//导入样式以及静态资源
import './assets/css/index.css'



// 导入vue-router
import VueRouter from 'vue-router'
// 注册VueRouter插件
Vue.use(VueRouter)

// 导入 HeroList 组件
import HeroList from './views/hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'

// 创建路由对象
const router = new VueRouter({
  // 配置路由规则
  routes: [
    { path: '/', redirect: { name: 'hero' } },
    { name: 'hero', path: '/hero', component: HeroList },
    { name: 'weapon', path: '/weapon', component: WeaponList },
    { name: 'equip', path: '/equip', component: EquipList },
  ]
})

new Vue({
  render: createElement => createElement(App),
  // 配置router对象
  router
}).$mount('#app')
