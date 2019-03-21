<template>

  <div class="page  alert-page" v-show = "alertShow">
    <div class="alert" >
      <div id="msgbox">
        <div id="msgwrap" class="word-centered">
          <p>{{alertMsg}}</p>
        </div>
      </div>
        <div class="btn" @click="hide"> 确定</div>
    </div>
  </div>
</template>

<script lang="ts">

import {mapGetters,mapState,mapActions } from 'vuex'; //先要引入
import { mapMutations } from 'vuex'

export default {
  name: "alert",
  computed:{
    // ...mapState('alert', {
    //   alertShow: state => state.alert,
    // })
      ...mapState({
          alertShow: state => state.alert.alertShow,
          alertMsg: state => state.alert.alertMsg,
      })
  },
  props: {
  },
  mounted(){

  },
  methods: {
    hide(){
      // this.$store.dispatch('hideAlert');
      this.$store.commit('alert/HIDEAELRT')
    },
     ...mapMutations([
      'alert/HIDEAELRT' 
    ])
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
#msgwrap{
  height:100%;
  width:100%;
}
#msgbox p{
  font-size: .4rem;
  line-height: .6rem;
  text-align: center;  
}
.btn{
  height: .7rem;
  line-height: .7rem;
  font-size: .3rem;
  width: 100%;
  text-align: center;
}
</style>
