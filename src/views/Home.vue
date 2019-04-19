<template>
  <div class="home">
    <navbar/>
    <!-- <HelloWorld :msg="aaa"/> -->
    <drawer :visible="flag" />
    <p @click="trigger">GGGG</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import drawer from '@/components/drawer'
import navbar from '@/components/navbar'

export default {
  name: 'home',
  data () {
    return {
      aaa: 'aaa',
      flag: false
    }
  },
  methods: {
    trigger () {
      console.log('p',this.flag);
      this.flag = true
      console.log('n',this.flag);
    }
  },
  mounted () {
    // this.$alert('这是一段内容', '标题名称', {
    //     confirmButtonText: '确定',
    //     callback: action => {
    //       this.$message({
    //         type: 'info',
    //         message: 'fdasfdfasfsdf'
    //       });
    //     }
    //   });
  },
  components: {
    // HelloWorld,
    drawer,
    navbar
  }
}
</script>

