<template>
    <div>
        <el-row >
             <el-col :span="18" :offset="3"  >
            <router-link to="/">返回首页</router-link>
             </el-col>
             <el-col :span="18" :offset="3"  >
                   <div ref="box" class="editor-style">
                       <p style="text-align: center;">测试</p><table><colgroup><col width="33.21123321123321%"><col width="33.33333333333333%"><col width="33.57753357753357%"></colgroup><thead><tr><th>测试</th><th>成都市</th><th>武侯</th></tr></thead><tbody><tr><td><br></td><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td><td><br></td></tr></tbody></table>
                   </div>
                </el-col>
                
        </el-row>
    </div>
</template>
<script>

    const routeData={
        '1':{path:'home'},
        "2-1":{path:'html'},
        "2-2":{path:'css'},
        "2-3":{path:'js'},
        "3-1":{path:'php'},
        "3-2":{path:'mysql'},
        "3-3":{path:'other'},
        "4":{path:'about'},
    };
    
export default {
    
}
</script>

<style lang="less" scoped>

</style>

