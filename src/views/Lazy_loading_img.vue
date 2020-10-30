<template>
  <div class="home">
      <HelloWorld :msg="'图片懒加载'"></HelloWorld>
     
      {{e}}

      <!-- <img v-lazy="require('../assets/20.jpg')">
      <img v-lazy="require('../assets/21.jpg')">
      <img v-lazy="require('../assets/22.jpg')"> -->


  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return{
      q:0,
      w:0,
      e:0
    }
  },
  created(){
     setInterval(() => {
        this.e = this.e+1
        console.log(this.e)
      }, 1000);
      // this.time1()
      // this.time2()
      // this.time3()
  },
  methods:{
    // time1() {
    //   setInterval(() => {
    //     this.q=2
    //   }, 1000);
    // },
    // time2() {
    //     setInterval(() => {
    //     this.w+=1
    //   }, 1000);
    // },
    time3() {
        setInterval(() => {
        this.e+=1
      }, 1000);
    }
  },
}
</script>

<style lang="stylus" scope>
img 
  width 100%
  height 120vh
</style>
