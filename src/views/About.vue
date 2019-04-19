<template>
  <div class="about">
    <navbar/>
    <h1>This is an about pages</h1>
    <h1>{{reqData}}</h1>
  </div>
</template>
<script>
import { userApi } from '../api/user'
import navbar from '@/components/navbar'

export default {
  data () {
    return{
      reqData: 'NO DATA'
    }
  },
  components: {
    navbar
  },
  created () {
    userApi().then(res=>{
      this.reqData = res.data
    });
  },
  mounted () {
  }
}
</script>


