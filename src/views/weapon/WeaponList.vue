<template>
   <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 class="sub-header">武器列表</h2>
            <a class="btn btn-success" href="add.html">Add</a>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>编号</th>
                    <th>名称</th>
                    <th>能量</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in list" :key="item.id">
                    <td>{{index+1}}</td>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.power}}</td>
                    <td>
                      <a href="edit.html">修改</a>
                      &nbsp;&nbsp;
                      <a href="javascript:;" @click="del(item.id)">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>  
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    this.loadData()
  },
  methods:{
    //列表显示
    loadData(){
      axios
      .get('http://localhost:3000/weapons')
      .then((response) => {
        //解构
        const {data,status} = response;
        if(status === 200){
          this.list = data
        }else {
          alert("获取数据失败")
        }
      })
      .catch((err) =>{
          alert('服务器错误'+err)

      })
    },
    //删除
    del(id){
      if(!confirm('确定要删除?')){
        return false;
      }
      axios
      .delete(`http://localhost:3000/weapons/${id}`)
      .then((response) => {
        const status = response.status;
        if(status === 200){
          this.loadData();
          alert('删除成功')
        }else{
          alert('删除失败')
        }
      })
      .catch((err) => {
        
        alert('服务器错误--' + err);
      })
    }
  }
}
</script>

<style>

</style>
