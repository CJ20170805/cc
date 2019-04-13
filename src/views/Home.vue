<template>
  <div class="home">
    <!-- <HelloWorld :msg="aaa"/> -->
    <drawer :visible="flag" />

    <p @click="trigger">GGGG</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import drawer from '@/components/drawer'

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
  components: {
    // HelloWorld,
    drawer
  }
}
</script>
