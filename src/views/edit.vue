<template>
  <div class="">
   <el-row>
     <h2>NEW NOTE</h2>
     <el-col :span="18" :offset="3"  >
        <textarea id="editor" placeholder="这里输入内容" autofocus>
        </textarea>  
     </el-col>

     <el-col :span="18" :offset="3" class="list" >
       <p color="">常用标签</p>
       <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
  


    </el-col>
    <el-col :span="18" :offset="3" class="group" >
      <el-cascader :options="group"></el-cascader>
    </el-col>

     <el-col class="list" :span="18" :offset="3"  >
    <el-button type="warning" @click="delAllTag">删除所有标签</el-button>
    <el-button type="primary">提交</el-button>
    </el-col>
   </el-row>
        <p>预览</p>
    <div ref="box" class="editor-style"></div>
  </div>
</template>


<script>
import Simditor from 'simditor';
import {mapGetters,mapState,mapActions } from 'vuex'; //先要引入


export default {
  data(){
    return {
       dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
    }
  },
  computed:{
    ...mapState('group', {
      group: state => state.group,
    }),
  },
  mounted() {
    var that = this;
    this.editor = new Simditor({
       toolbar: [
        'title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale',
        'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link',
        'image', 'hr', '|', 'alignment'
    ],
      textarea: document.getElementById("editor"),
      upload : {  
    		url : "", //文件上传的接口地址  
    		params: {"1":"1"}, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交  
    		fileKey: 'file', //服务器端获取文件数据的参数名  
    		connectionCount: 3,  
        leaveConfirm: '正在上传文件'  
      }

      //optional options
    });
    this.editor.on("valuechanged",function(e,src){
      var v = that.editor.getValue();
      console.log(v)
      that.$refs.box.innerHTML=v;
    })
  },
  methods:{
     handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      delAllTag(){
          this.dynamicTags=[];
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        console.log(inputValue)
        this.inputVisible = false;
        this.inputValue = '';
    }
  }
}
</script>
<style lang="less">
@import url('../../node_modules/simditor/styles/simditor.css');
.about{
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(1, 5, 2, .3);
  height: calc(100% - 2.4rem);
}
.list{
  margin-top: 15px;
}
  .el-tag {
    margin-right: 10px;
    margin-top: 10px !important;

  }
  .button-new-tag {
    height: 32px;
    line-height: 30px;
    margin-top: 10px !important;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    margin-top: 10px;
    width: 100px  !important;
    vertical-align: bottom;
  }
  #box{
    display: block
  }
  .group{
    margin-top: 60px;
  }
</style>
