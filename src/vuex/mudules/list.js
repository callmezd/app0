const banner = [];

const list = [];
const lastList = [];

const picUrl = "";

const pei = [
    "蒹葭苍苍，白露为霜。所谓伊人，在水一方。",
    "溯洄从之，道阻且长。溯游从之，宛在水中央。",
    "蒹葭萋萋，白露未晞。所谓伊人，在水之湄。",
    "溯洄从之，道阻且跻。溯游从之，宛在水中坻。",
    "蒹葭采采，白露未已。所谓伊人，在水之涘。",
    "溯洄从之，道阻且右。溯游从之，宛在水中沚。"
];

var allimg = [
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2038427277,1277627658&fm=26&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1685311699,3015975169&fm=26&gp=0.jpg"
]
function rand(a, b) {
    var w = b - a;
    return parseInt(Math.random() * w + a, 10);
}




function getName() {
var result = [];
    for (var i = 0; i < 5; i++) {
        var ranNum = Math.ceil(Math.random() * 25);
        result.push(String.fromCharCode(65 + ranNum));
    }
    return result.join("");
}


function createObj() {
    var obj = {},
        img = "";
    var imgArr = [];
    var randNum = rand(0, 12);
    var pRand = pei[rand(0, 6)];
    var discuss = [];
    var detail = {
        dislike: 0,
        like: 100
    };
    for (var i = 0; i < randNum; i++) {
        var randImg = rand(0, 2);
        if (!obj[randImg]) {
            obj[randImg] = true;
            img = allimg[randImg];
            imgArr.push(img)
        }
    }
    return {
        data: {
            username:getName(),
            img: imgArr,
            content: pRand
        },
        discuss,
        detail,
    };
}

const state = {
    banner,
    list
};



const mutations = {
    SHOW(state, items) {

        // console.log("show");
    },
    PUSHLIST(state, items) {
        state.list.push(items);
    },
    RESESTLIST(state) {
        for (var i = 0; i < 10; i++) {
            state.list.push(createObj());
        }
    }
};



export default {
    namespaced: true,
    state,
    mutations,
}