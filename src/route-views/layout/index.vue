<template>
  <div class="layout-index">
    <swiper :options="adSwiperOption" class="ad-swiper-slide">
      <swiper-slide v-for="(item,index) in ads" v-bind:key="index">
        <p>{{item}}</p>
      </swiper-slide>
    </swiper>

    <swiper :options="swiperOption" class="banner-swiper-slide">
      <swiper-slide v-for="(item,index) in slideImages" v-bind:key="index">
        <img :src="item.imageUrl">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
      <div id="itembox" v-bind:style="{height:height}">
        <scroller :on-refresh="refresh" :on-infinite="infinite"  ref="scroller">
         
            <!-- <li v-for="(i,index) in list" v-bind:key="index">{{i}}</li> -->

            <Indexitem v-for="(i,index) in list"  v-bind:option="indexItemOption" v-bind:key="index">{{i}}</Indexitem>
        </scroller>
      </div>

  </div>
</template>

<script>
import Indexitem from "@/components/Indexitem.vue";

  import {
    swiper,
    swiperSlide,
    scroller
  } from "vue-awesome-swiper";

  let adSwiperOption = {
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
  };

  let swiperOption = {
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  export default {
    name: "layout-index",
    components: {
      swiper,
      swiperSlide,
      Indexitem
    },
    data() {
      return {
        ads: ["广告1", "广告2", "广告3", "广告4"],
        slideImages: [{
            imageUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3708759485,2703464663&fm=26&gp=0.jpg",
            title: "y",
            name: ""
          },
          {
            imageUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2695047413,3283828312&fm=26&gp=0.jpg",
            title: "y",
            name: ""
          },
          {
            imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550147776228&di=717914dc28349f5a34c21f18d4bb65a3&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cdc1592fac02a8012193a36a9fab.jpg%401280w_1l_2o_100sh.jpg",
            title: "y",
            name: ""
          },
          {
            imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550147776228&di=6479f67eeead4f9b74c5fc208edf7f8e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3522d49a0c889fef7859745baf89a8d8880c5c54f6e0-vu5doF_fw658",
            title: "y",
            name: ""
          }
        ],
        list: [
          "JSON书写格式",
          "json解密",
          
        ],
        adSwiperOption,
        swiperOption,
        height: 0,
        noData: ''
      }
    },
    created() {
      this.height = ((document.documentElement.clientHeight / document.documentElement.clientWidth) *
        10 - 3.5 - .9) + 'rem';
    },
    methods: {
      infinite(done) {
        // 没有数据的处理
        if (this.noData) {
          setTimeout(()=>{
              this.$refs.scroller.finishInfinite(2);
          })
          }else{
          let self = this; //this指向问题
          let start = this.list.length;

          setTimeout(() => {
            for (let i = start + 1; i < start + 10; i++) {
              self.list.push(i)
            }
            console.log(start)
            if (start > 30) {
              self.noData = "没有更多数据"
            }
            done()
          }, 1500)
        }
      },
      refresh() {
        let start = 100;
        let list = [];
         for (let i = start + 1; i < start + 20; i++) {
              list.push(i+'刷新')
         }
         setTimeout(()=>{

           this.list = list;
            this.$refs.scroller.resize();
         },500)
      }
    }
  };
</script>

<style lang="less">
  .swiper-slide img {
    width : 10rem;
    height : 3rem;
  }

  .ad-swiper-slide {
    height : 0.5rem;
    background : white;
  }

  .banner-swiper-slide {
    height : 3rem;
  }

  .swiper-slide p {
    width : 10rem;
    text-align : left;
    height : 0.5rem;
  }

  #itembox {
    height : 5rem;
    overflow : auto;
    width : 100%;
    display : block;
    position : relative;
  }

  ul li {
    text-align: left;
    font-size: 0.6rem;
    text-indent: .3rem;
    padding: .03rem;
    border: 1px solid;
    box-sizing: border-box;
    width: 9.4rem;
    margin:.3rem;
  }
</style>