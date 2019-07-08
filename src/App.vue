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
import AppHeader from './components/AppHeader'
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

</style>
