<template>
  <div class="home">
      <HelloWorld :msg="'获取元素到顶部的距离'"></HelloWorld>
      <div class='d1'>
         元素距离顶部的距离
        适合手机端移动端共用代码特效时使用
      </div>
      <div class="d1">2</div>
      <div class="d1">3</div>
      <div class="d1">4</div>
      <div class="d1">5</div>
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
      arr:[],
      functions:{}
    }
  },
  created(){
    this.$nextTick(()=>{
    this.getscoloor()
    this.listenerFunction()
    })
  },
  methods:{
    getscoloor() {
      let  w = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let d1 = document.getElementsByClassName('d1')
      for(let el of d1){
        let s = el.offsetTop - w + el.offsetHeight //元素刚好完全出现在屏幕执行动画
        console.log(el.offsetTop , w,el.offsetHeight)
        this.arr.push(s)
      }
        
      console.log(this.arr)
    },
    listenerFunction(e) {
        document.addEventListener('scroll', this.handleScroll, true);
    },
    handleScroll () {
        console.log(window.pageYOffset)
        let scroll = window.pageYOffset
        



    },
    func() {

    }
  },
}
</script>

<style lang="stylus" scope>
.home
  & > div ~div
    height 300px
.d1,.d3,.d
  background yellow 
.d2,.d4
  background #e8e8e8
</style>
