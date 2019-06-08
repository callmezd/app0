<template>
  <div class="detail">
    <div class="top-nav">
         <div @click='backLastRoute' class="back-warp" to='/'> <span class="iconfont icon-back"></span></div>
         <div class="title" >
           <!-- {{list[this.$route.query.id].title}} -->
         </div>
    </div>

    <div class="main">

      <div v-if="list[this.$route.query.id]" >
        <div v-for="(item,index) in list[this.$route.query.id].content" v-bind:key = "index">
          <p>{{item}}</p>        
            <img src="http://www.si27.com/wp-content/uploads/2015/12/2016.jpg" alt="">        
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src params
import {mapGetters,mapState,mapActions } from 'vuex'; //先要引入

export default {
  name: "mine",
  components: {
  },
  computed:{
    ...mapState('list', {
      list: state => state.list,
    }),
  },
  mounted(){
    console.log(this.$store.state.list)
  },
  watch:{
  },
  methods: {
    backLastRoute(){
      this.$router.back(-1)
    },
   
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
  .detail{
    height: calc(100%);
    .main{
      height: calc(100% - 1rem);
      width: 100%;
      overflow-y: auto;
    }
  }
 
</style>
