<template>
   <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">装备列表</h2>
            <a class="btn btn-success" href="add.html">Add</a>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>编号</th>
                    <th>技能</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in list" :key="item.id">
                    <td>{{index+1}}</td>
                    <td>{{item.id}}</td>
                    <td>{{item.skill}}</td>
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
//导入axios
// import axios from 'axios'
export default {
  //能与页面页面拼接的数据
  data(){
    return {
      list:[]
    }
  },
  //当组件加载完成后调用请求方法
  mounted(){
    this.loadData()
  },
  methods:{
    loadData(){
      this.axios
      .get('http://localhost:3000/equips')
      .then((response) => {
        const {data,status}  = response
        if(status === 200){
          this.list = data
        }else {
          alert('获取数据错误')
        }
      })
      .catch((err) => {
        alert('服务器错误'+err)
      })
    }
  }
}
</script>

<style>

</style>
