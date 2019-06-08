const groupData = [
    {
        name:"首页", value: '1',label: '首页',path:"",index:"1"},
    {
        name:"前端",path:"",index:"2",isGroup:true,label:"前端", 
        children:[
            {name:"html",path:"",index:"2-1",value: '2-1',label: 'html'},
            {name:"js",path:"",index:"2-2",value: '2-2',label: 'js'},
            {name:"css",path:"",index:"2-3",value: '2-3',label: 'css'},
        ]
    },
    {
        name:"程序",path:"",index:"3",value: '3',label: '程序',isGroup:true,
        children:[
            {name:"php",path:"",index:"3-1",value: '3-1',label: 'php',},
            {name:"其它",path:"",index:"3-2",value: '3-2',label: '其它',},
        ]
    },
    {name:"关于",path:""}
];

var group = [];
for(var i = 0 ;i<groupData.length;i++){
    if(!groupData[i].isGroup){
        continue;
    }else{
        group.push(groupData[i]);
    }
}
  
const state = {
  groupData , group,
};
  
export default {
    state,
    namespaced: true,
}

