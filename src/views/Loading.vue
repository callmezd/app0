<template>
  <div class="loading">
      <img src="../assets/bg1.jpg" :class="cls" alt="">
      <p class="wel">
        welcome to my home~
      </p>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      cls:"cls1"
    }
  },
  mounted(){
    setTimeout(()=>{
      this.cls = "cls1"
    },1000)
  }
}
</script>

<style lang="less">
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rebeccapurple;
  }
  .text{
    font-size: 1rem;
    color: rgb(46, 42, 42);
  }
  .wel{
    position: absolute;
    top: 50%;
    z-index: 1;
    background: rgba(255, 255, 255, .3);
    padding: 10px 12px;
    border-radius: 12px;
    font-size: 18px;
    opacity: 0;
    animation: fadeIn .3s ease-in-out;
    animation-fill-mode: forwards;
  }
  img.cls1{
      transform: scale(1);
      animation: bebig .6s linear;
      animation-fill-mode: forwards;
      width: 100%;
      display: block;
  }
  @keyframes bebig {
    0%{
      transform: scale(1)
    }
    100%{
      transform: scale(1.2)
    }
  }
  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

</style>
