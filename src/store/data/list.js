

const list= [{title:'标题1',time:1448518400000,hot:1,id:0},
{title:'标题2',time:1455555500000,hot:122,id:1},
{title:'标题3',time:1498518400000,hot:70,id:2},
{title:'标题4',time:1558518400000,hot:50,id:3}];

const state={
    list
}
const getters={
    renderList(state){ 
      return state.list;
    }
  };
  
  const mutations={
        pushlist(state,items){ 
            console.log(1)
          state.list.push(items);
       },
       shows(state){
            console.log('show')
       }
   };

  const actions={
      invokePushList(context,item){
          context.commit('pushlist',item);
      },
      shows(context){
            context.commit('show')
      }
  };
  export default {
       namespaced:true,
       state,
       getters,
       mutations,
       actions
  }