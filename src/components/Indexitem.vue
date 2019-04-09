<template>
  <div class="a-item" >

      
      <router-link  :to="{name:'detail',query:{id:myindex}}">
      <div class="box-warp ">
          <div class="box">
            <div class="img-box">
                <!-- <img src="../assets/test.jpg" alt="" class="poster"> -->
            </div>
            <div class="info">
                <span class="a-name">{{list.title}}</span>
                <span class="a-time">{{new Date(list.time).getFullYear()}}-{{new Date(list.time).getMonth()}}-{{new Date(list.time).getDate()}}</span>
                <span class="a-hot">
                    <span  class="iconfont icon-tubiao-"></span>
                    <span> {{list.hot}}</span>
                    <span style="color:red"> {{myindex}}</span>
                </span>

            </div>  
          </div>
         
      </div>
      </router-link>
  </div>
</template>

<script>


export default {
  name: "item",
  props: ["list",'myindex'],
  mounted(){
  },
   methods: {
        hide() {
            this.$emit('hideNav');  //使用$emit()引入父组件中的方法
        }
   },
};
</script>

<style scoped lang="less">
   .box-warp{
      width: 10rem;
      height: 3rem;
      padding: .12rem;
      box-sizing: border-box;
      .box{
        border: 1px solid;
        // background: rgba(164, 77, 246, 0.9);
        box-sizing: border-box;
        padding: .12rem;
        height: 100%;
        overflow: hidden;
        width: 100%;
        border-radius: .3rem;
            .img-box{
                height: calc(2.52rem - 2px);
                width: 50%;
                float: left;
                background: url() no-repeat center ;
                background-size:cover; 
                // background-image: url('../assets/test.jpg'); 
                background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550568292600&di=58179cf3a2765466377b23af21f8508f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019e585975a5f8a8012193a35466ef.jpg'); 
                border-radius: .3rem;
            }
            .info{
                 height: calc(2.52rem - 2px);
                width: 50%;
                float: left;
                line-height: 1.02rem;
                font-size: .6rem;
                .a-name{
                    float: left;
                    width: 100%;
                    text-align: left;
                    margin-left:.1rem;
                }
                .a-time{
                    float: left;
                    margin-left:.6rem;
                    font-size: 0.3rem;
                    line-height: 1.2rem;
                }
                .a-hot{
                    float: right;
                    font-size: 0.3rem;
                    margin-right:.2rem;

                }
            }
        }
   }

   .box-warp.smallsize{
      width: 5rem ;
      height: 3rem;
      padding: .06rem;
      .box{
        padding: .06rem;
        border-radius: .15rem;
            .img-box{
                height: 2.25rem;
                border-radius: .15rem;
            }
            .info{
                height: 0.51rem;
                line-height:  0.5rem;
                font-size: .3rem;
                .a-name{
                    margin-left:.5rem;
                }
                .a-time{
                    margin-right:.5rem;
                }
            }
        }
   }


</style>
