/*
1:歌曲搜索接口
请求地址:https://autumnfish.cn/search
请求方法:get
请求参数:keywords(查询关键字)
响应内容:歌曲搜索结果

*/

var app = new Vue ({
    data:{
        //查询关键字
      query:'',
      //歌曲数组
      musicList:[],  
    },

    methods:{
        //歌曲搜索
        searchMusic(){
            axios.get('https://autumnfish.cn/search?keywords='+this.query)
            .then( (response) => {/* 用箭头函数确保this指向，将从接口获取的数据存入musicList中*/
                // console.log(response);
                this.musicList = response.data.result.songs;
            })
            .catch( function(err){})
        }
    },
}).$mount('#player')