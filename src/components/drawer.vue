<template>
    <div class="drawer-wrap" v-if="wrapHideFlag">
      <transition name="drawer">
        <div class="drawer" v-if="hideFlag">
          <h3>drawer</h3>
        </div>
      </transition>
      <transition name="drawerBg">
        <div class="bg" @click="hideDrawer" v-if="hideFlag"></div>
      </transition>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      hideFlag: this.visible,
      wrapHideFlag: this.visible
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    hideFlag (o,n) {
      setTimeout(()=>{
        this.wrapHideFlag = false;
      },1000);
    },
    visible (n, o) {
      console.log('ccccccccc',n,o);
      return n;
    }
  },
  created () {
    console.log(this.visible);
  },
  methods: {
    hideDrawer () {
      this.hideFlag = false
    }
  }
}
</script>

<style lang="less">
  .drawer-wrap{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    .drawer{
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 70%;
      background-color: rgb(4, 130, 247);
    }
    .bg{
      width: 100%;
      height: 100vh;
      background-color:rgba(0,0,0,.4);
    }
    .drawer-enter-active, .drawer-leave-active{
      transition: all .4s ease-in-out;
    }
    .drawer-enter, .drawer-leave-to{
      transform: translate(-100%);
    }
    .drawerBg-enter-active, .drawerBg-leave-active{
      transition: all .4s ease-in-out;
    }
  }
</style>

