<template>
     <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">修改武器</h2>
        <form>
          <div class="form-group">
            <label for="name">名称</label>
            <!-- 注意数据绑定 -->
            <input type="text" class="form-control" id="name" placeholder="名称" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="power">功能</label>
            <input type="text" class="form-control" id="power" placeholder="功能" v-model="formData.power">
          </div>
          <!--button自身带有提交功能 所以要阻止默认行为 .prevent 阻止默认行为 -->
          <button @click.prevent='weaponEdit' class="btn btn-success">提交</button>
        </form>
      </div>
</template>

<script>
import axios from 'axios'
//在组件中获取动态路由, 路由中的id --> $router.params.id
//路由规则设置props:true,路由自动把id数据传递给组件
//组件中接收 props:['id']
export default {
    props:['id'],
    data(){
        return {
           formData:{
               name:'',
               power:''
           }
        }
    },
    mounted(){
        this.getDataById()
    },
    methods:{
        getDataById(){
            axios.get(`http://localhost:3000/weapons/${this.id}`)
            .then((response) => {
                const {data,status} = response;
                console.log(response)
                if(status === 200) {
                   this.formData = data
                } else {
                    alert('获取失败')
                }
            })
            .catch((err) => {
                alert('服务器错误' + err)
            })
        },
        weaponEdit(){
            axios.put(`http://localhost:3000/weapons/${this.id}`,this.formData)
            .then((response) => {
                const status = response.status
                if(status === 200) {
                    this.$router.push('/weapon')
                }else {
                    alert('修改失败')
                }
                console.log(response)
            })
            .catch((err) => {
                alert('服务器错误' + err);
            })
        }
    }
}
</script>

<style>

</style>
