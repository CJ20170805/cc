<template>
  <div>
    <input type="text" v-model="userInfo.username" name="username" id="un">
    <input type="password" v-model="userInfo.password" name="password" id="pw">
    <button @click="login(userInfo)">login</button>
    <h1>{{token}}</h1>
  </div>
</template>
<script>

import { mapState,mapActions} from 'vuex'

export default {
  data () {
    return{
      userInfo: {
        username: '',
        password: ''
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
    })
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

