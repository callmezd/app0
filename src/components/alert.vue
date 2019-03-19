<template>

  <div class="page  alert-page">
    <div class="alert" >
      <div id="msgbox">
        <p>{{msg}}</p>
      </div>
        <div class="btn">确定</div>
    </div>
  </div>
</template>

<script lang="ts">

import {mapGetters,mapState,mapActions } from 'vuex'; //先要引入

export default {
  name: "alert",
  computed:{
   


  },
  props: {
    msg: String
  },
  mounted(){

  }


};
</script>

<style lang="less">
.alert-page{
  background: rgba(1,1,1,.7);
  position: absolute;
  z-index: 9;
}
.alert{
    border-radius: .5em;
    height: 3rem;
    width: 5rem;
    margin: 50% auto 0;
    background: white;
}
#msgbox{
  height: 2.3rem;
  padding: .15rem 0 ;
  box-sizing: border-box;
  border-bottom: 1px solid;
}
#msgbox p{
  font-size: .4rem;
  line-height: .6rem;
  text-align: center;  
}
.btn{
  height: .7rem;
  line-height: .7rem;
  font-size: .4rem;
  width: 100%;
  text-align: center;
}
</style>
