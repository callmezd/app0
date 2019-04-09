<template>
  <div class="home page">
    <transition name="left">
        <keep-alive>
          <Leftnav v-if="navState" v-bind:leftnavdata="leftnavdata" v-bind:navState="navState" v-on:hideNav='hideNav'/>
        </keep-alive>
    </transition>

  
    
    <div id="nav">
      <router-link to="/layout/index">Home</router-link> |
      <router-link to="/layout/mine">mine</router-link> |
      <router-link to="/layout/about">About</router-link>
    </div>

      <!-- <transition name="bounce"  mode="in-out"> -->
        <keep-alive>
          <router-view />
        </keep-alive>
      <!-- </transition> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Leftnav from "@/components/Leftnav.vue";
import axios from "axios";
import untils from "../utils/index.js";
import {mapGetters,mapState,mapActions } from 'vuex'; //先要引入

  // <div id="head-box">
  //       <img class="head" src="" alt="" v-on:click="navState=!navState" >
  //       <input id="search" value="" type="text" />
  //       <span id="search-btn"><i class="iconfont icon-htmal5icon25"></i></span>
  //   </div>
export default {
  name: "home",
  components: {
    Leftnav
  },
  data() {
    return {
      run:false,
      navState:false,
      leftnavdata:{
        userInfo:{nick:'nick',headImg:require('../assets/head.jpg')},
        allNav:[
         {desc:'base',name:'base',navList: [{name:'我的收藏',icon:'iconfont icon-shoucang'},{name:'我的赞',icon:'iconfont icon-zan'}]},
         {desc:'hot',name:'hot',navList: [{name:'热点1',icon:'iconfont icon-tubiao-'},{name:'新闻',icon:'iconfont icon-xinwen'}]},
         {desc:'user',name:'user',navList: [{name:'自定义1',icon:'iconfont icon-zidingyi'},{name:'自定义2',icon:'iconfont icon-zidingyi'}]},
        ]
      }
    }
  },
  computed:{
       ...mapState('user', {
          user: state => state.user,
      })
  },
  methods: {
    hideNav(){
      this.navState = false;
    }
  },
  mounted () {
    // untils.ajax("test0",{
    //   type:"test0"
    // },function(e){
    // });
  }
};
</script>

<style lang="less">
.run {
  animation: ss 0.3s ease-in-out;
  animation-fill-mode: forwards;
}



#left-main {
  height: 100%;
  width: 5rem;
  overflow: hidden;
}

#meau {
  position: relative;
  height: 100%;
  width: 5rem;
  overflow: hidden;
}
#left-main li {
  list-style: none;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: left;
  text-indent: 0.1rem;
  border-bottom: 1px solid white;
  box-sizing: border-box;
  color: white;
}
#list {
  margin-top: 0.2rem;
}
@keyframes ss {
  form {
    left: -10rem;
  }
  to {
    left: 0rem;
  }
}
@keyframes s2 {
  form {
    left: 0rem;
  }
  to {
    left: -10rem;
  }
}
.head {
  height: 1rem;
  width: 1rem;
  border-radius: 0.5rem;
  display: inline-block;
  margin-left: 0rem;
  border:.013333rem solid;
}
#head-box {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 1.5rem;
  padding: .25rem;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  border-bottom:.013333rem solid #6c6c6c;
}
#left-main {
  background: #2c3e50;
}

#search{
  text-indent:1em;
  border:.013333rem solid;
  height:.466667rem;
  margin-left:.6rem;
  display:block;
  border-radius:2em;
  width:4rem;
}

#search-btn{
  position:absolute;
  left:5.45rem;
  width:.4rem;
  height:.4rem;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:2em;
}
#nav {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  box-sizing:border-box;
  border-top:.013333rem solid;
  z-index: 1;
  a {
    font-weight: bold;
    margin: 0rem 0.6rem;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#glass {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
