<template>
  <div class="page from-page word-centered">
    <div id="from-box" >
      <p class="info-title">
        注册
      </p>
      <div v-for="(item ,index) in list" v-bind:key="index">


        <input v-if="!item.optionList" class="ipt" type="text"  :id= "item.data" :placeholder="'请输入'+item.name" v-model="item.val" :maxlength="item.max">


        <select name="" v-if="item.optionList"   v-model="item.val" >
          <option v-for="(i ,idx) in item.optionList"   class="ipt" v-bind:key="idx"   :value="i.val">{{i.sex}}</option>
        </select>

      </div>
    <div id="from-btn" @click="submit">
      提交
    </div>

    </div>
  </div>
</template>

<script>
import untils from "../utils/index.js";
import tools from "../tools/tools.js";

export default {
  data(){
    return{
      list:[
        {name:"姓名",data:"name" , val:"朱丹",max:6,formType:"nomal",},
        {name:"电话",data:"phone" , val:"15680717059",max:11,formType:"phone"} ,

        {name:"邮箱",data:"email" ,val:"",formType:"email"},
        // {name:"地址",data:"addr" ,val:""},
        // {name:"性别",data:"sex",optionList:[{sex:"请选择性别",val:"-1"},{sex:"男",val:"1"},{sex:"女",val:"0"}] ,val:"请选择性别"} ,
      ],
      name:"",
      phone:"",
    }
  },
  mounted(){
    tools.addCheackList(this.list);
  },
  methods:{
    submit(){
      var obj = {};
      var that = this;
      var succ = true;
      for(var i = 0;i<this.list.length;i++){
        if(!tools.tools[i](that.list[i].val,that.list[i].name)){
          succ = false;
          break;
        };
        obj[this.list[i].data]=this.list[i].val;
      }
      if(succ) {

      untils.ajax("insertUserInfo",obj,function(e){
        console.log(e)
      }); 
      }
     
    }
  }
}
</script>

<style>
@import '../style/mybase.less';

.from-page{
  background: url("../assets/bg.jpg") no-repeat center;
  background-size:cover; 
}

#from-box{
  padding:  .2rem;
  background: rgba(1, 1, 3, .3);
}
.ipt{
  display: block;
  width: 7.5rem;
  margin:.25rem auto;
  height: 1rem;
  text-indent: 2em; 
}
.info-title{
      width: 100%;
    height: 0.8rem;
    /* line-height: 0.8rem; */
    font-size: 0.6rem;
    text-align: center;
    display: block;
    color: #fff;
}
#from-btn{
  border: 1px solid;
  background: white;
  width: 2rem;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  display: block;
  margin: 0 auto;
}
select{
      display: block;
    width: 7.5rem;
    margin: .25rem auto;
    height: 1rem;
    text-indent: 2em;
}

</style>
