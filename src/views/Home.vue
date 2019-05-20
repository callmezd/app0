<template>
    <div>
        <el-row>
            {{routerPath}}
            <el-col :span="18" :offset="3" class="hidden-xs-only" >
            <el-menu :default-active="activeIndex" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">前端</template>
                <el-menu-item index="2-1">html</el-menu-item>
                <el-menu-item index="2-2">css</el-menu-item>
                <el-menu-item index="2-3">js</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">程序</template>
                <el-menu-item index="3-1">php</el-menu-item>
                <el-menu-item index="3-2">mysql</el-menu-item>
                <el-menu-item index="3-3">other</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">关于</el-menu-item>
            </el-menu>
            </el-col>
        </el-row>
        <div class="hidden-sm-and-up">
            <el-row class="mynav" :span='24'>
                <el-col :span='24'  :offset="2">
                  <i class="el-icon-menu" @click="showOrHideSmallNav"></i>
                </el-col>
            </el-row>
            <el-row v-show="showSamllNav">
                <el-col :span="24" >
                    <el-menu
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    mode="vertical"
                    @select="handleSelect"
                    :collapse="!collapse"
                    :collapse-transition="collapse"
                    >
                        <el-menu-item index="1">
                            <span slot="title">首页</span>
                        </el-menu-item>

                        <el-submenu index="2">
                            <template slot="title">
                            <span>前端</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">html</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <el-menu-item index="2-2">css</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <el-menu-item index="2-3">js</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                            <span>程序</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1">php</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <el-menu-item index="3-2">mysql</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <el-menu-item index="3-3">其他</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="4">
                            <span slot="title">关于</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="banner" :xs="24" :sm="24" :md="24" :lg="24" >
        </div>
        <el-row type="flex" justify="center">
            <el-col :xs="20" :sm="18" :md="18" :lg="18" :xl="18">
                 <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="content-list" v-for='(item,idex) in list' :key="idex">
                     <div>
                        <p>
                            {{item.title}}
                        </p>
                        <div class='info-box'>
                            <el-tag type="success" size='mini'>标签二</el-tag>
                            <div class="content-info">
                                <i class="el-icon-chat-dot-square"></i>
                                <span>1</span>
                                <el-divider direction="vertical"></el-divider>
                                <i class="el-icon-s-data"></i>
                                <span>2</span>
                            </div>
                        </div>
                     </div>
                </el-col>
            </el-col>
        </el-row>
            <div class="block">
                <el-pagination 
                 style="display: flex;justify-content: center;marginTop:10px"
                 type="flex" justify="center"
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="1"
                :pager-count="5"
                :total="10"
                layout=" prev, pager, next"
                >
                </el-pagination>
        </div>
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
        data() {
            return {
                activeIndex: '1',
                collapse:true,
                hasRoute:true,
                showSamllNav:false,
                list:[
                    {content:"内容",title:'标题'},
                    {content:"内容",title:'标题'},
                    {content:"内容",title:'标题'},
                    {content:"内容",title:'标题'},
                ],
                currentPage1: 3,
                currentPage2: 5,
                currentPage3: 4,
                currentPage4: 4,
                routerPath:'home',
                bannerHeight:document.documentElement.clientWidth*.4
            };
        },
        methods: {
            showOrHideSmallNav(){
                this.showSamllNav = !this.showSamllNav
            },
            handleSelect(key, keyPath) {
                var e = keyPath.length == 1?0:1;
                if(routeData[keyPath[e]]){
                this.showSamllNav = false;
                console.log(routeData[keyPath[e]])
                this.routerPath = routeData[keyPath[e]].path
                }
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
                handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        ready(){
            var that = this;
            window.onresize=function(){                
                bannerHeight:document.documentElement.clientWidth*.4
            }
        }
    };
  
</script>

<style lang="less">
.tac{
    background: rgb(84, 92, 100)
}
.el-menu-item{
    min-width: auto !important;
}
.mynav{
    padding:12px 0;
    border-bottom: solid 1px #e6e6e6;
}
.info-box{
    overflow: hidden;
}
.content-info{
    float: right
}
.content-list{
    padding:5px;
    box-sizing: border-box;
    >div{
        padding:6px;
        box-sizing: border-box;
        border: solid 1px #e6e6e6;
    }
}
.banner{
    width: 100%;
}
  
</style>
