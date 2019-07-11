<template>
   <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">英雄列表</h2>
            <a class="btn btn-success" href="add.html">Add</a>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in list" :key='item.id'>
                    <td>{{index+1}}</td>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.gender}}</td>
                    <td>
                      <a href="edit.html">修改</a>
                      &nbsp;&nbsp;
                      <a href="javascript:window.confirm('Are you sure?')">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>  
</template>

<script>
// import axios from 'axios'
//获取英雄列表
export default {
  data(){
    return {
      //将获取到的数据存储在这里
      list:[]
    }
  },
  //在组件加载完成后,发送ajax
  mounted(){
    this.loadData()
  },
  methods:{
    loadData(){
      this.axios
    .get('heroes')
    .then((response) => {
      const {data , status} =response
      if(status === 200){
        this.list = data;
      }else {
        alert('获取数据失败')
      }
    })
    .catch((err) => {
      alert('服务器异常'+err)
    })
    }
  }
}
</script>

<style>

</style>
