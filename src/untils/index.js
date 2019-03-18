


import axios from "axios";
const baseUrl = "http://localhost:80/api/api2/api/api.php"
function ajax (type,data,cb) {
    console.log(data);
    
    axios({
        method: "POST",
        url: baseUrl+"?type="+type,
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(res) {
        console.log(res);
        cb(res);
    });
}




export default {
    ajax: ajax
}