<template>
  <div id="app">
      <alert/>
       <transition name="fade"  mode="in-out">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
  </div>
</template>


<script>
  import alert from "@/components/alert.vue";
  export default {
    data(){
      return {
        msg:""
      }
    },
    components: {
      alert
    }
  };


</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}

</style>
