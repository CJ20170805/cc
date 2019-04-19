<template>
  <div class="wrap">
    <div class="content">
      <el-input v-model="input.un" placeholder="username"></el-input>
      <el-input v-model="input.pw" type="password" placeholder="password"></el-input>
      <el-button type="primary" @click="Regist()">Regist</el-button>
    </div>
  </div>
</template>
<script>
import { registApi } from '../api/regist'
export default {
  data () {
    return {
      input: {
        un: '',
        pw: ''
      }
    }
  },
  methods: {
    Regist () {
      registApi(this.input).then(res=>{
        console.log(res.data);
      }).catch(err =>{
        console.log(err);
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .6);
    overflow: hidden;
    .content{
      width: 500px;
      height: 190px;
      background-color: #fff;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 20px 60px;;
      border-radius: 8px;
      text-align: right;
      margin-top: 50vh;
      transform: translateY(-100px);
      .el-input{
        margin-bottom: 10px;
      }
    }
  }
</style>


