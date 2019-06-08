<template>
    <div>
        <el-row >
            <!-- <route-link path="/">返回首页</route-link> -->
             <el-col :span="18" :offset="3"  >
                   <div ref="box" class="editor-style"></div>
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

