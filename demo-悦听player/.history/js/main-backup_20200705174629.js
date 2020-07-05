/*
1:歌曲搜索接口
请求地址:https://autumnfish.cn/search
请求方法:get
请求参数:keywords(查询关键字)
响应内容:歌曲搜索结果
*/

var app = new Vue ({
    data:{
      query:'',
      musicList:[],  
    },

    methods:{
        searchMusic(){
            axios.get('https://autumnfish.cn/search?keywords='+this.query)
            .then( (response) => {
                console.log(response);
                this.musicList = response.data.result.songs;
            })
            .catch( function(err){})
        }
    },
}).$mount('#player')