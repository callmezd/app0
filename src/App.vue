<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import "./style/base.less";
#app,html,body{
  overflow: hidden;
  width: 100%;
  height: 100%;
}

</style>
