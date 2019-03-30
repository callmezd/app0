


import axios from "axios";
const apiUrl = "http://api.local.com/";
const apiVersion = "1.0/";

const baseUrl = apiUrl+apiVersion+"users/";
function ajax (type,data,cb) {
    var params = new URLSearchParams();
    if(data){
        for(var i in data) {
            params.append(i,data[i]);   
        };
    }
    axios.post(baseUrl+type,params)
    .then(res => {
        cb(res);
    }).catch(err => {
    })
}





export default {
    ajax: ajax
}