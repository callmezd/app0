<template>
  <div id="img-page" >
     <img :src="src" alt="">
     <div @click="hide">返回</div>
  </div>
</template>

<script>
export default {
  name: "img-show",
  props: ['src',"state"],
    methods: {
        hide() {
            this.$emit('closeImg');  
        }
   },
};
</script>

<style scoped lang="less">
#img-page{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color:#fff;
}
</style>
