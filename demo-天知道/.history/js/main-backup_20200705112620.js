/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */

var app = new Vue({

    data: {
        city: '',
        weatherList:[],
    },
    methods: {
        
        searchWeather() {
            console.log('天气查询');
            console.log(this.city);
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            .then(  (response )=> { /*这里因为是回调函数，是axios.get后调用的then，
                this已经改变了，为了获取到weadtherList,用箭头函数返回，避免this指向问题*/
                console.log(response.data.data.forecast); 
                this.weatherList= response.data.data.forecast;
            })
          
            .catch( function(err){ })
        }
    },

}).$mount('#app')