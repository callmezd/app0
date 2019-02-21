<template>
  <div id="app">
       <transition name="fade"  mode="in-out">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}

</style>
