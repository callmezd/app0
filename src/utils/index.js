


import axios from "axios";
const baseUrl = "http://localhost:80/api/api2/api/api.php"
function ajax (type,data,cb) {
    var params = new URLSearchParams();
    if(data){
        for(var i in data) {
            params.append(i,data[i]);   
        };
    }
    axios.post(baseUrl+"?type="+type,params)
    .then(res => {
        cb(res);
    }).catch(err => {
    })
}





export default {
    ajax: ajax
}