<template>
  <div class="home page">
    <div id="left-route"  v-bind:class="{run:run}">
      <div id="left-main">
        <div id="glass" v-on:click="run=false" >

        </div>
        

        <div id="meau"> 
          <transition name="fade">
            <img class="head" src="../../public/head.jpg" alt="">
         </transition>
        <div id="list">


          <li v-for="(item,index) in mymeaulist" v-bind:key="index">
            {{item.name}}
          </li>

          
        </div>
        </div>
   
      </div>      
    </div>
    <div id="head-box">
       <img class="head" src="../../public/head.jpg" alt="" v-on:click="run=true" >
    </div>
    <div id="nav">
      <router-link to="/layout/index">Home</router-link> |
      <router-link to="/layout/mine">mine</router-link> |
      <router-link to="/layout/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      run:false,
      mymeaulist:[
        { name: '我的关注',url: '' },
        { name:'我的收藏',url: ' '}
        ]
      }
  }
};
</script>

<style lang="less">
#left-route {
  height: 100%;
  width: 100%;
  position: absolute;
  border: 1px solid;
  box-sizing: border-box;
  z-index: 3;
  left: -10rem;
  background: rgba(0, 0, 0, 0.3);
}

.run {
  animation: ss 0.6s ease-in-out;
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
