<template>
  <div class="layout-index">
    <!-- <swiper :options="adSwiperOption" class="ad-swiper-slide">
      <swiper-slide v-for="(item,index) in ads" v-bind:key="index">
        <p>{{item}}</p>
      </swiper-slide>
    </swiper> -->
    <!-- <swiper :options="swiperOption" class="banner-swiper-slide">
      <swiper-slide v-for="(item,index) in banner" v-bind:key="index">
        <img :src="item.imageUrl">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper> -->
      <!-- <div id="itembox" v-bind:style="{height:height}">
       <scroller :on-refresh="refresh" :on-infinite="infinite"  ref="scroller">
          <Indexitem v-for="(i,index) in list"   v-bind:myindex="index" v-bind:list="i" v-bind:key="index" />
       </scroller>
      </div> -->


      <div id="bg">
        {{flag}}
      </div>
      <ul  @click="test">
        <li v-for="(item,index ) in list"  :key="index">
          <div class="info">
            <span>{{item.data.username}}</span>
          </div>
          <div class = "content">
              {{item.data.content}}
          </div>
          <div class="piclist">
              <img class="img-list" v-for="(img,idx ) in item.data.img"  @click="showImg(img)"  :key="idx" :src="img" alt="">
          </div>
          <div class="detail">

          </div>
        </li>
      </ul>

      <imgShow :src = "nowimg" :state1="flag" v-on:closeImg='closeImg' />
  </div>
</template>

<script>
import Indexitem from "@/components/Indexitem.vue";
import imgShow from "@/components/imgshow.vue";

import {mapGetters,mapState,mapActions } from 'vuex'; //先要引入

  import {
    swiper,
    swiperSlide,
    scroller
  } from "vue-awesome-swiper";

  export default {
    name: "layout-index",
    components: {
      swiper,
      swiperSlide,
      Indexitem,
      imgShow
    },
    computed: {
      // 方式一
      // ...mapState({
      //     banner: state => state.list.banner,
      // })
      // 方式二
       ...mapState('list', {
          banner: state => state.banner,
          list: state => state.list,
        }),
      ...mapState('data', {
          adSwiperOption: state => state.adSwiperOption,
          swiperOption: state => state.swiperOption,
      }),
       ...mapState('alert', {
          alertShow: state => state.alertShow,
      }),

    },
    data() {
      return {
        ads: ["广告1", "广告2", "广告3", "广告4"],
        slideImages: [],
        indexItemOption:{
          type:0
        },
        height: 0,
        noData: '',
        active:"nomal",
        flag:false,
        nowimg:""

        
      }
    },
    mounted() {
        this.$store.dispatch('resetlist');
    },
    methods: {
      ...mapActions(["pushlist",'resetlist']),
      toLogin(){
          var token = sessionStorage.getItem("token");
          if(!token){
              this.$router.push("/login");
          }
      },
      test(){
        console.log(1)
            this.$emit('test');  
      },
      rand(a,b){
          var w = b-a;
          return parseInt(Math.random()*w+a , 10);
      },
      showImg(e){
        console.log(e);
        this.nowimg = e;
        this.flag = true;

      },
      closeImg(){
        console.log(1111)
        this.flag = false;
      },
      infinite(done) {
        // 没有数据的处理
        var s= this;
 
        if (this.noData) {
            setTimeout(()=>{
                this.$refs.scroller.finishInfinite(2);
            })
        }else{
            let self = this; //this指向问题
            let start = this.list.length;
            setTimeout(() => {
              for (let i = start + 1; i < start +1 + 4; i++) {
                var time = this.rand(1558518400000,1598518400000);
                var hot = this.rand(155,10000);
                var anews = {title:'标题'+i,time:time,hot:hot,id:new Date().getTime(),content: [1, 2, 5, 54, 5, 51, 2, 1, 5, 2, 1, 52215152, 12, 1215, 121, 2121]};   

                this.$store.dispatch('pushlist',anews);
              }
              if (start > 30) {
                self.noData = "没有更多数据"
              }
              done();
            }, 1500)
        }
      },
      refresh() {
        let start = 100;
        let list = [];
        //  for (let i = start + 1; i < start + 20; i++) {
        //       list.push(i+'刷新')
        //  }
         setTimeout(()=>{
            this.$store.dispatch('resetlist');
            this.$refs.scroller.resize();
         },500)
      },
      changeSortRule(e){
        e.cancelBubble = true;
        var id = e.currentTarget.dataset.id
        this.active = id;
        this.activeObj[id] = !this.activeObj[id];
        // this.list = sort(this.list,id,this.activeObj[id]);
      },
    }
  };
</script>

<style lang="less">
  .layout-index{
    overflow: auto;
    margin-bottom: .9rem;
    #bg{
      background: rgba(1, 2, 32, .3);
      width: 10rem;
      height: 4rem;
    }
    ul{
      li{
        overflow: hidden;
        width: 10rem;
        background: #ccc;
        padding: .3rem;
        box-sizing: border-box;
        border-bottom: .013333rem solid #fff;
      .img-list{
          display: block;
          height: 1rem;
          width: 1rem;
          float: left;
          margin: .2rem;
        }
      }
    }
    .lide{
      height: 10rem;
      border: 1px solid;
      box-sizing: border-box;
    }
  
}
 

</style>




