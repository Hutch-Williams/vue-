/*
1:歌曲搜索接口
请求地址:https://autumnfish.cn/search
请求方法:get
请求参数:keywords(查询关键字)
响应内容:歌曲搜索结果

2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
    
3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
 
4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
*/

var app = new Vue ({
    data:{
        //查询关键字
      query:'',
      //歌曲数组
      musicList:[],  
      //歌曲地址
      musicUrl:'',
      //歌曲封面地址
      musicCover:'',
      //歌曲热门评论
      hotComments:'',
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
        },

        //歌曲播放
        playMusic(musicId){ /* 这里我们在模板html中用item.id将歌曲的id信息传入 */
            axios.get('https://autumnfish.cn/song/url?id=' +musicId)
            .then( (response) => {/* 用指定id获取对应歌曲的信息，我们发现不同歌曲其实调用的就是不同url*/
                // console.log(response);
                this.musicUrl = response.data.data[0].url;/*将不同歌曲的url导入到musicUrl中*/
            })
            .catch(function (err) {
            
            })
    
        //歌曲详情获取
            axios.get('https://autumnfish.cn/song/detail?ids='+musicId)
            .then( (response) => {/* 将获取到的封面地址信息传递到musicCover参数中 */
                // console.log(response);
                this.musicCover = response.data.songs[0].al.picUrl;
            })
            .catch( function(err) {

            })
        //歌曲评论获取 这里有type=0和id两个参数，用&拼接
            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+musicId)
            .then( (response) =>{
                console.log(response);
            })
            .catch(function(err){

            })
        },
            

    }, 
        
}).$mount('#player')