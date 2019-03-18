<template>
  <div class="page from-page word-centered">
    <div id="from-box" >
      <div v-for="(item ,index) in list" v-bind:key="index">
        <input v-if="!item.optionList" class="ipt" type="text"  id= "item.data" :placeholder="'请输入'+item.name" v-model="item.val">
        <select name="" v-if="item.optionList"   >
          <option v-for="(i ,idx) in item.optionList"   class="ipt" v-bind:key="idx"   value="i.val">{{i.sex}}</option>
        </select>
      </div>
    <div id="from-btn" @click="submit">
      提交
    </div>

    </div>
  </div>
</template>

<script>
import untils from "../untils/index.js";


export default {
  data(){
    return{
      list:[
        {name:"姓名",data:"name" ,val:""} ,
        {name:"邮箱",data:"email" ,val:""} ,
        {name:"电话",data:"tel" ,val:""} ,
        {name:"地址",data:"addr" ,val:""} ,
        {name:"性别",data:"sex",optionList:[{sex:"男",val:"1"},{sex:"女",val:"0"}] ,val:""} ,
      ]
    }
  },
  methods:{
    submit(){
      console.log(this.list);

      // untils.ajax("")

        untils.ajax("insertUserInfo",{
          name:"ss",
          // email:this.list[1].val,
          // phone:this.list[2].val,
          // addr:this.list[3].val,
          // sex:this.list[4].val,
      },function(e){
      });
    }
  }
}
</script>

<style>
@import '../style/mybase.less';



#from-box{
  width:  8rem;
  height: 8rem;
  background: rgba(1, 1, 3, .3);
}
.ipt{
  display: block;
  width: 7.5rem;
  margin:.25rem auto;
  height: 1rem;
  text-indent: 2em; 
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

</style>
