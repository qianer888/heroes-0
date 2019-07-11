<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">Add weapon</h2>
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
          <button @click.prevent='weaponAdd' class="btn btn-success">提交</button>
        </form>
      </div>
</template>

<script>
// import axios from 'axios'
export default {
data(){
    return {
        formData:{
            name:'',
            power:''
        }
    }
},
methods:{
    weaponAdd(){
        this.axios.post('http://localhost:3000/weapons',this.formData)
        .then((response) => {
            const status = response.status
            if(status === 201) {
                alert('添加成功')
                //实现页面跳转
                this.$router.push('/weapon')
            }else{
                alert('添加失败')
            }
        })
    }
}
}
</script>

<style>

</style>
