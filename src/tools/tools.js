

import Vuex from "../vuex/store.js";

function addCheackList(arr){
    var tools = [];
    for(var i = 0;i<arr.length;i++){
        check(arr[i],tools);
    }
    return tools;
};

function alert(msg){
    Vuex.commit('alert/SHOWAlERT',msg);
}

function check(item,tools){
    var type = item.formType;
    let fn;
    switch(type){
        case "nomal":
         fn =function(val,name){
            if(!isNullStr(val)) {
                alert("请输入"+name);
                return false;
            };
            if(item.checkrule){
                var re = item.checkrule =="phone"?/^[1][3,4,5,6,7,8,9][0-9]{9}$/: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
                if(!re.test(val)){
                    alert(name+"格式不正确");
                    return false;
                } 
            }
            return true;
        }
        tools.push(fn);
        break;
        case "password-list":
        fn = function(val,name,reval){
            if(!isNullStr(val)) {
                alert("请输入密码");
                return false;
            };
            if(val!=reval){
                alert("两次密码输入的不一样");
                return false;
            }
            return true;
        }
        tools.push(fn);
        break;
        case "radio":
        fn = function(val,name,reval){
            console.log(val)
            if(val == -1) {
                alert("请选择"+name);
                return false;
            };
            return true;
        }
        tools.push(fn);
        break;
    }
}

function isNullStr(val){
    var s = false;
    if(val == ""){
        s = false;
    } else {
        s = true;
    }
    return s;
}

export default{
    addCheackList
}