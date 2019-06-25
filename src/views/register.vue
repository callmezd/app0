<template>
  <div class="page from-page word-centered">
    <div id="from-box" >
      <p class="info-title">
        注册
      </p>
      <div v-for="(item ,index) in list" v-bind:key="index">

        <input v-if="item.formType == 'nomal'" class="ipt" type="text"  :id= "item.data" :placeholder="'请输入'+item.name" v-model="item.val" :maxlength="item.max">


      

        <select name="" v-if="item.optionList"   v-model="item.val" >
          <option v-for="(i ,idx) in item.optionList"   class="ipt" v-bind:key="idx"   :value="i.val">{{i.sex}}</option>
        </select>

          <input v-if="item.formType == 'password-list'" class="ipt" type="password"  :id= "item.data+'0'" :placeholder="'请输入'+item.name" v-model="item.val" :maxlength="item.max">
          <input v-if="item.formType == 'password-list'" class="ipt" type="password"  :id= "item.data+'1'" :placeholder="'请再次输入'+item.name" v-model="item.reval" :maxlength="item.max">

      </div>
    <div id="from-btn" @click="submit">
      提交
    </div>
      {{user}}

    </div>
  </div>
</template>

<script>
import untils from "../utils/index.js";
import tools from "../tools/tools.js";
import alertObj from "../tools/alert.js";
import {mapGetters,mapState,mapActions } from 'vuex'; //先要引入


const alert = alertObj.alert;


export default {
  data(){
    return{
    
      list:[
        {name:"姓名",data:"username" , val:"zz",max:16,formType:"nomal"},
        // {name:"电话",data:"phone" , val:"15616111000",max:11,formType:"nomal",checkrule:"phone"},
        // {name:"邮箱",data:"email" ,val:"",formType:"nomal",checkrule:"email"},
        {name:"密码",data:"password" ,val:"zd",reval:"zd",formType:"password-list"},
        // {name:"地址",data:"addr" ,val:"",formType:"nomal"},
        // {name:"性别",data:"sex",optionList:[{sex:"请选择性别",val:"-1"},{sex:"男",val:"1"},{sex:"女",val:"0"}] ,val:"-1",formType:"radio"}
      ],
      name:"",
      phone:"",
      ruleArr:[]

    }
  },
  computed:{
    ...mapState('user', {
          user: state => state.user,
        }),
  },
  mounted(){

    var that = this;
    that.ruleArr = tools.addCheackList(that.list);
  },
  methods:{
      ...mapActions(["update"]),
    submit(){
      var obj = {};
      var that = this;
      var succ = true;
      var fnArr = this.ruleArr;
      var formData = that.list;
      for(var i = 0;i<fnArr.length;i++){
        if(!fnArr[i](formData[i].val,formData[i].name,formData[i].reval)){
          succ = false;
          break;
        };
        obj[this.list[i].data]=this.list[i].val;
      }
        
      untils.ajax("register",obj,function(res){
        console.log(res)

        if(res.data.code==200){
        that.$router.push("/");
          sessionStorage.setItem("token", res.data.data.token);
          sessionStorage.setItem("id", res.data.data.id);
          sessionStorage.setItem("username", res.data.data.username);
           that.update(res.data.data);

        }else{

          alert(res.data.messages);
        }
       
      }); 
      // }
     
    }
  }
}
</script>

<style>
@import '../style/mybase.less';

.from-page{
  background: url("../assets/bg1.jpg") no-repeat center;
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
