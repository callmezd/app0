



const banner=[
  {
      imageUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3708759485,2703464663&fm=26&gp=0.jpg",
      title: "y",
      name: ""
    },
    {
      imageUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2695047413,3283828312&fm=26&gp=0.jpg",
      title: "y",
      name: ""
    },
    {
      imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550147776228&di=717914dc28349f5a34c21f18d4bb65a3&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cdc1592fac02a8012193a36a9fab.jpg%401280w_1l_2o_100sh.jpg",
      title: "y",
      name: ""
    },
    {
      imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550147776228&di=6479f67eeead4f9b74c5fc208edf7f8e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3522d49a0c889fef7859745baf89a8d8880c5c54f6e0-vu5doF_fw658",
      title: "y",
      name: ""
    }
  
];  //初始化一个colects数组
const state={
  banner
};
const getters={
  renderBanner(state){ 
    return state.banner;
  }
};
const mutations={
     pushBanner(state,items){ 
        state.banner.push(items);
     }
 };
 
const actions={
    invokePushBanner(context,item){
        context.commit('pushBanner',item);
    }
};

export default {
     namespaced:true,
     state,
     getters,
     mutations,
     actions
}