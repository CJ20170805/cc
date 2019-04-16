<template>
  <div>
    <input type="text" v-model="username" name="username" id="un">
    <input type="password" v-model="password" name="password" id="pw">
    <button>login</button>
  </div>
</template>
<script>
import request from '../utils/request'
// import axios from 'axios';
export default {
  data () {
    return{
      username: '',
      password: ''
    }
  },
  created () {
    //  axios.get("/api/users")
    //   .then(res=>{
    //     console.log(res);
    //   }).catch(err=>{
    //     console.error(err);
    //   })
    request({
      url: '/api/users',
      method: 'get'
    })
  }
}
</script>

