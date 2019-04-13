<template>
  <div class="layout-mine">
    <textarea id="txt" placeholder="请输入..."></textarea>

    <input type="file" id="upload-btn" ref="img" @change="change()"   multiple accept="image/gif, image/png, image/jpg, image/jpeg">
  <ul>
    <li  @click = "clickEvent" style="" ><div id="upload-box">+</div></li>
    <li v-for="(item,index) in piclist"  v-bind:key="index">
      <span class="close" @click="close(index)" ><i class="iconfont icon-icon-test"></i></span>
        <div>
          <img class="img" :style="{marginLeft:item.marginLeft+'rem',marginTop:item.margintTop+'rem'}"  :src="item.src" :class="item.class"/>
        </div>
    </li>
  </ul>
  <div class="btn-box">
    <div class="btn">
      发布
    </div>
    <div class="btn">
      取消
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      piclist:[]
    }
  },
  methods: {
    change(){
        var that = this;
        var file = this.$refs.img.files[0];
        if(file){
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(){
            var img = new Image();
            img.src = reader.result;
            img.onload=function(){
              if(this.complete){
                var cls = "",marginLeft = 0,margintTop = 0;
                var size = 2.8;
                if(this.width>this.height){
                    cls = "w-img";
                    marginLeft = -.5*(this.width/this.height*size - size);
                }else{
                    margintTop = -.5*(this.height/this.width*size - size);
                }
                var obj = {src:img.src,class:cls,marginLeft,margintTop};
                console.log(obj)
                that.piclist.push(obj);
              }
            }
          }
        }
    },
    clickEvent(){
      if(this.piclist.length<5){
        this.$refs.img.click();
      }
    },
    close(index){
      this.piclist.splice(index,1);
    }
  }
}
</script>
<style lang="less">
.layout-mine{
    position: absolute;
    width: 100%;
    height: calc(100% - 2.4rem);
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
  #upload-btn{
      display:none;
  }
  .btn-box{
    width: 10rem;
    display: flex;
    justify-content: space-around;
    margin-top:.6rem; 
    div{
      width: 4rem;
      height: .8rem;
      line-height: .8rem;
      background-color: #b1b1b1 ;
      color:white;
      border-radius: 5rem;
      }
  }
  ul{
    width:10rem;
    display: block;
    overflow: hidden;
    li{
      float:left;
      margin-top:.1rem;
      margin-left:.1rem;
      width:2.8rem;
      height:2.8rem;
      padding:0.1rem;
      position: relative;
      background:rgba(0,0,0,.3);
      .close{
        position: absolute;
        top: .1rem;
        right: .2rem;
      }
      div{
        width:2.8rem;
        margin:0 auto;
        height:2.8rem;
        overflow:hidden;
        img{
          display:block;
          width:2.8rem;
          height:auto;
          margin:0 auto;
        }
        img.w-img{
          height:2.8rem;
          width:auto;
          margin:0 auto;
        }
      }

      #upload-box{
        font-size:2.4rem;
        text-align:center;
        line-height:2.8rem;
        box-sizing:border-box;
        color:#fff;
        border:.013333rem solid #fff;
      }
    }
  }
}
</style>
