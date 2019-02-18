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

      <div id="sort" >

         <div id="nomal-sort" data-id='nomal' ref='nomal'
          v-bind:class="[active == 'nomal' ? 'active':'']" v-on:click="changeSortRule($event)">
            默认
        </div>


        <!-- 升序 asc  降序 desc -->
        <div id="time-sort" data-id='time' ref='time' 
         v-bind:class="[active == 'time' ? 'active':'']" @click="changeSortRule($event)">
            时间
            <span v-show="activeObj.time" class="iconfont icon-paixu-shengxu" data-id='span'></span>
            <span v-show="!activeObj.time" class="iconfont icon-paixu-jiangxu" data-id='span' ></span>
        </div>


        <div id="hot-sort" data-id='hot' ref='hot'
        v-bind:class="[active == 'hot' ? 'active':'']" v-on:click="changeSortRule($event)">
            热度
            <span v-show="activeObj.hot" class="iconfont icon-paixu-shengxu" data-id='span'></span>
            <span v-show="!activeObj.hot" class="iconfont icon-paixu-jiangxu" data-id='span'></span>
        </div>
      </div>
      <div id="itembox" v-bind:style="{height:height}">
        <scroller :on-refresh="refresh" :on-infinite="infinite"  ref="scroller">
            <!-- <li v-for="(i,index) in list" v-bind:key="index">{{i}}</li> -->
              <Indexitem v-for="(i,index) in list"  v-bind:option="indexItemOption" v-bind:list="i" v-bind:key="index" />
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

  function sort(arr,rule,flag){
    var t,ruleData = arr[rule];
    for(var i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i].ruleData>arr[j].ruleData){
                t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
    if(flag){
      arr = arr.reverse();
    }
    return arr;
  }
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
          {title:'标题1',time:1448518400000,hot:1},         
          {title:'标题2',time:1455555500000,hot:122},         
          {title:'标题3',time:1498518400000,hot:70},         
          {title:'标题4',time:1558518400000,hot:50},         
        ],
        indexItemOption:{
          type:0
        },
        adSwiperOption,
        swiperOption,
        height: 0,
        noData: '',
        active:"nomal",
        activeObj:{
          'time': false,
          'hot': false,
        }
      }
    },
    created() {
      this.height = ((document.documentElement.clientHeight / document.documentElement.clientWidth) *
        10 - 3.5 - .9  -.8) + 'rem';
    },
    methods: {
      rand(a,b){
          var w = b-a;
          return   parseInt(Math.random()*w+a , 10);
      },
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
              for (let i = start + 1; i < start + 17; i++) {
                var time = this.rand(1558518400000,1598518400000);
                var hot = this.rand(155,10000);
                var anews = {title:'标题'+i,time:time,hot:hot};   
                self.list.push(anews);
              }
              console.log(start)
              if (start > 110) {
                self.noData = "没有更多数据"
              }
              done();
            }, 1500)
        }
      },
      refresh() {
        let start = 100;
        let list = [];
        console.log("刷新")
        //  for (let i = start + 1; i < start + 20; i++) {
        //       list.push(i+'刷新')
        //  }
        //  setTimeout(()=>{

        //    this.list = list;
        //     this.$refs.scroller.resize();
        //  },500)
      },
      changeSortRule(e){
        console.log(e.currentTarget)
        e.cancelBubble = true;
        var id = e.currentTarget.dataset.id
        this.active = id;
        this.activeObj[id] = !this.activeObj[id];
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


 #sort{
    height: .8rem;
    background: rgba(32, 115, 148, 0.6);
    color: white;
    div{
      width: 3.3333rem;
      height: .8rem;
      line-height: .8rem;
      float: left;
    }
    div.active{
      color: red;
    }
    
  }
 

</style>