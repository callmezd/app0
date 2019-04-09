<template>
  <!-- <div id="left-nav-page"   v-bind:class="[navState?'run':'']"> -->
  <div id="left-nav-page" >
        <div id="nav-glass" v-on:click="hide" >
          <p>
        {{navState?1:0}}
        </p>
        </div>
        <div id="nav-box">
            <div class="nav-userinfo">
                <img class="head" v-bind:src="leftnavdata.userInfo.headImg"/>
                <span class="nick">{{leftnavdata.userInfo.nick}}</span>          
            </div>

            <div id="allNav" v-for="(nav,index) in leftnavdata.allNav" v-bind:key="index">
                <!-- <p>{{nav.name}}</p> -->
                <li class="smallnav" v-for="(nav,index) in nav.navList" v-bind:key="index">
                    <span  v-bind:class="nav.icon"></span>
                    <i>{{nav.name}}</i>
                </li>                
            </div>

        </div> 
  </div>

</template>

<script>
export default {
  name: "left",
  props: ['leftnavdata',"navState"],
   methods: {
        hide() {
            this.$emit('hideNav');  //使用$emit()引入父组件中的方法
        }
   },
};
</script>

<style scoped lang="less">
    #left-nav-page{
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 3;
        // left: -10rem;
        background: rgba(0, 0, 0, 0.3);
    }

    .run{
        animation: show .3s ease-in-out;
        animation-fill-mode: forwards;
    }
    @keyframes show {
        for{
            left: -10rem;
        }
        to{
            left: 0rem;
        }
    }
    

    #nav-glass{
        position: absolute;
        height: 100%;
        width: 100%;
    }

    #nav-box{
        position: absolute;
        height: 100%;
        width: 5rem;
        // background: rgb(0, 209, 236);
        background: #fff;


        overflow: auto;

    }
    .nav-userinfo{
        width: 5rem;
        overflow: hidden;
        padding: .15rem;
        box-sizing: border-box;
    }

    .head{
        height: 1rem;
        width: 1rem;
        border-radius: 0.5rem;
        margin-left: 0rem;
        float: left;
    }
    
    .nick{
        float: left;
        height: 1rem;
        line-height: 1rem;
        margin-left: .3rem;

    }
  
    #allNav{
        // background: rgba(63, 207, 159, 0.9);
        margin-bottom: .3rem;
    }

    .smallnav{
        width: 5rem;
        height: .6rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom:1px solid #ccc; 
    }
    .smallnav i{
        margin-left: .2rem;
        font-style: normal;
    }
    .smallnav span{
        margin-left: .1rem;
    }

</style>
