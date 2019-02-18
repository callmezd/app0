<template>
  <div class="a-item" >
      <div class="box">
          <img src="" alt="" class="poster">
          <div>
              <span class="a-name"></span>
              <span class="a-time">time</span>
            </div>  
      </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
//   props: ['leftnavdata',"navState"],
   methods: {
        hide() {
            console.log('hideNav')
            this.$emit('hideNav');  //使用$emit()引入父组件中的方法
        }
   },
};
</script>

<style scoped lang="less">
   

</style>
