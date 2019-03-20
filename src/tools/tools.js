

import Vuex from "../vuex/store.js";
let tools = [];

let addCheackList = function(arr){
    for(var i = 0;i<arr.length;i++){
        check(arr[i].formType);
    }
};


function alert(msg){
    Vuex.commit('alert/SHOWAlERT',msg);
}

function check(type){
    let fn;
    switch(type){
        case "nomal":
         fn =function(val,name){
            if(!isNullStr(val)) {
                alert("请填写"+name);
                return false;
            };
            return true;
        }
        tools.push(fn);
        break;
        case "phone":
        fn = function(val){
            if(!isNullStr(val)) {
                alert("请填写手机号码");
                return false;
            };
            let re=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if(!re.test(val)){
                alert("手机号格式不正确");
                return false;
            }
            return true;
        };
        tools.push(fn);
        break;
        case "email":
        fn = function(val){
            if(!isNullStr(val)) {
                alert("请填写邮箱");
                return false;
            };
            var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
            if(!re.test(val)){
                alert("邮箱格式不正确");
                return false;
            }
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
    addCheackList,tools
}