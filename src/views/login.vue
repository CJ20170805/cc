<template>
  <div class="wrap">
    <div class="content">
      <el-input v-model="loginInfo.un" placeholder="username"></el-input>
      <el-input v-model="loginInfo.pw" type="password" placeholder="password"></el-input>
      <el-button type="primary" @click="Login">Login</el-button>
    </div>
  </div>
</template>
<script>

import { mapState,mapActions} from 'vuex'
// import { registApi } from '../api/regist'
// import { userApi } from '../api/user'

export default {
  data () {
    return{
      loginInfo: {
        un: '',
        pw: ''
      }
    }
  },
  computed: {
    ...mapState({
      token: 'token'
    })
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    Login () {
      this.login(this.loginInfo).then(res => {
        console.log('Ls',res);
        if(res.code === 200){
          this.$router.push('regist');
        }
        // this.$router.push('/home');
      }).catch(err => {
        console.error('Le', err);
      })
    }
  },
  created () {
    // loginRequest().then(res=>console.log(res.data));
    //  axios.get("/api/users")
    //   .then(res=>{
    //     console.log(res);
    //   }).catch(err=>{
    //     console.error(err);
    //   })
    // request({
    //   url: '/users',
    //   method: 'get'
    // }).then(res=>{
    //   console.log(res);
    // })
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


