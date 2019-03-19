<template>
  <div class="home page">
    <transition name="left">
        <keep-alive>
          <Leftnav v-if="navState" v-bind:leftnavdata="leftnavdata" v-bind:navState="navState" v-on:hideNav='hideNav'/>
        </keep-alive>
    </transition>
    <div id="head-box">
       <img class="head" src="../../public/head.jpg" alt="" v-on:click="navState=!navState" >
       <span style=" position: absolute;
    z-index: 3;
    top: 1%;
    right: 7%;
    color: white;">
         {{navState}}
         </span>
    </div>
    <div id="nav">
      <router-link to="/layout/index">Home</router-link> |
      <router-link to="/layout/mine">mine</router-link> |
      <router-link to="/layout/about">About</router-link>
    </div>

      <transition name="bounce"  mode="in-out">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Leftnav from "@/components/Leftnav.vue";
import axios from "axios";
import untils from "../utils/index.js";

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
        userInfo:{nick:'nick',headImg:require('../../public/head.jpg')},
        allNav:[
         {desc:'base',name:'base',navList: [{name:'我的收藏',icon:'iconfont icon-shoucang'},{name:'我的赞',icon:'iconfont icon-zan'}]},
         {desc:'hot',name:'hot',navList: [{name:'热点1',icon:'iconfont icon-tubiao-'},{name:'新闻',icon:'iconfont icon-xinwen'}]},
         {desc:'user',name:'user',navList: [{name:'自定义1',icon:'iconfont icon-zidingyi'},{name:'自定义2',icon:'iconfont icon-zidingyi'}]},
        ]
      }
    }
  },
  methods: {
    hideNav(){
      this.navState = false;
    }
  },
  mounted () {
    untils.ajax("test0",{
      type:"test0"
    },function(e){

    });
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
  display: block;
  margin-left: 0rem;
}
#head-box {
  height: 1rem;
  width: 10rem;
  background-color: blueviolet;
}
#left-main {
  background: #2c3e50;
}
#nav {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background-color: blueviolet;
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
