<template>
    <el-container>
        <el-row class="tac">
            <el-col :span="2">
                11
            </el-col>
            <el-col :span="20">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">前端</template>
                        <el-menu-item index="1-1">html</el-menu-item>
                        <el-menu-item index="1-2">css</el-menu-item>
                        <el-menu-item index="1-3">js</el-menu-item>
                </el-submenu>
                
                <el-submenu index="2">
                    <template slot="title">程序</template>
                    <el-menu-item index="2-1">php</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
            </el-col>
            <el-col :span="2">
                11
            </el-col>

        </el-row>
           













        <el-header>头部</el-header>
        <el-footer>底部</el-footer>
       
    </el-container>
</template>

<script>
export default {
 data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }

};
</script>

<style lang="less">
.tac{
    background: rgb(84, 92, 100)
}
</style>
