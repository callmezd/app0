<template>
  <div class="layout-mine">
    <textarea id="txt"></textarea>

    <input type="file" ref="s" @change="change()"  multiple accept="image/gif, image/png, image/jpg, image/jpeg">
  <ul>
  </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      img:[]
    }
  },
  methods: {
    change(){
      console.log(this.$refs.s)
    }
  },
}
</script>
<style lang="less">
.layout-mine{
  position: absolute;
  width: 100%;
    height: calc(100% - 2.4rem);

}
#txt{
  resize:none;
  outline:0;
  border:none;
  width:100%;
  height:3rem;
  padding:.09rem;
  font-size:.38rem;
  font-family:"黑体";
  box-sizing:border-box;
}
</style>
