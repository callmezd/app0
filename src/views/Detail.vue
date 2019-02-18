<template>
  <div class="detail">
    <div class="top-nav">
         <div @click='backLastRoute' class="back-warp" to='/'> <span class="iconfont icon-back"></span></div>
         <div class="title">
           name
         </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "mine",
  components: {
  },
  methods: {
    backLastRoute(){
      this.$router.back(-1)
    }
  },
};
</script>

<style lang="less" scoped>

  .top-nav{
    height: 1rem;
    width: 10rem;
    background-color: blueviolet;
    .back-warp{
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1rem;
      width: 1rem;
      color: aliceblue;
      position: absolute;
      left: 0;
      top: 0;
    }
    .title{
      width: 10rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      color: aliceblue;
    }
  }
</style>
