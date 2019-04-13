<template>
  <div id="img-page" v-show="state1" @click="hide" >
    {{state1}}
     <img :src="src" alt="">
     <div @click="hide">返回</div>
  </div>
</template>

<script>
export default {
  name: "img-show",
  props: ['src',"state1"],
    methods: {
        hide() {
          console.log(1111)
            this.$emit('closeImg');  
        }
   },
};
</script>

<style scoped lang="less">
#img-page{
  background: rgba(1, 1, 1, .8);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color:#fff;
}
img{
  width: 8rem;
  display: block;
  height: auto;
  margin: 0 auto;
}
</style>
