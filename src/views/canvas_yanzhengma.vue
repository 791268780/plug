<template>
  <div class="home">
      <canvas id="c1"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return{
        w:300,
        h:100,
        pool:'ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890',
    }
  },
  created(){
      this.$nextTick(()=>{
          var ctx=c1.getContext("2d");
      ctx.fillStyle=this.rc(180,230);
      ctx.fillRect(0,0,this.w,this.h);
      let m = 20;
     for(var i=0;i<4;i++){
        var c=i//随机的字
        var fs = 6 ;//字体的大小
        var deg=this.rn(-30,30);//字体的旋转角度
        ctx.font=fs+'vw Simhei';
        ctx.textBaseline="top";
        ctx.fillStyle=this.rc(80,150);
        ctx.save();
        ctx.translate(m,15);
        m+=70
        ctx.rotate(deg*Math.PI/180);
        ctx.fillText(c,-15+5,-15);
        ctx.restore();
    }

    for(var i=0;i<9;i++){ //5.随机产生5条干扰线,干扰线的颜色要浅一点
        ctx.beginPath();
        ctx.moveTo(this.rn(0,this.w),this.rn(0,this.h));
        ctx.lineTo(this.rn(0,this.w),this.rn(0,this.h));
        ctx.strokeStyle=this.rc(180,230);
        ctx.closePath();
        ctx.stroke();
    }
    for(var i=0;i<40;i++){  // 点
        ctx.beginPath();
        ctx.arc(this.rn(0,this.w),this.rn(0,this.h),1,0,6*Math.PI);
        ctx.closePath();
        ctx.fillStyle=this.rc(150,200);
        ctx.fill();
    }
      })
      
  },
  methods:{
    rn(min,max){// 产生随机数
        return  parseInt(Math.random()*(max-min)+min);
    },
    rc(min,max){ // 随机的颜色
        var r = this.rn(min,max);
        var g = this.rn(min,max);
        var b = this.rn(min,max);
        return `rgb(${r},${g},${b})`;
    },
  },
}
</script>

<style lang="stylus" scope>
    .home
        width 300px
        height 100px
        #c1
            width 100%
            height 100%

</style>
