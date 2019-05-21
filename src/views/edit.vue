<template>
  <div class="about">
    <h1>wait...</h1>
    <p>dsdsds</p><pre><code>313212121121212</code></pre>
    <textarea id="editor" placeholder="这里输入内容" autofocus>
      </textarea>  
  </div>
</template>


<script>
import Simditor from 'simditor';
export default {
  mounted() {
    var that = this;
    this.editor = new Simditor({
      textarea: document.getElementById("editor")
      //optional options
    });
    this.editor.on("valuechanged",function(e,src){
      console.log(e)
      console.log(src)
      var v = that.editor.getValue();
      console.log(v)
    })
  },
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
</style>
