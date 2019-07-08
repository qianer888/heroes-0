<template>
  <div id="app">
    <!-- AppHeader -->
    <app-header></app-header>
     <div class="container-fluid">
        <div class="row">
          <app-sidebar></app-sidebar>
         <!-- 主内容区域 -->
         <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
//导入AppHeader
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
