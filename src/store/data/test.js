



const test='test';  //初始化一个colects数组
  const state={
    test
  };
  const getters={
    renderTest(state){ 
      return state.test;
    }
  };
  const mutations={
    
   };
  const actions={
    
  };
  export default {
       namespaced:true,
       state,
       getters,
       mutations,
       actions
  }