
import { queryWeather } from '@/api/tianqi';

export function getWeatherInfo(cityCode) {
	var cacheDuration = 3600000; // 1小时的毫秒值
    var weatherInfo = {}, weatherInfoStr = localStorage.getItem('WEATHER_INFO'); // 本地缓存的天气信息
    
    if(weatherInfoStr && new Date().getTime()<(JSON.parse(weatherInfoStr)).time){ // 不超过上次请求的1小时

        var weatherInfo = JSON.parse(weatherInfoStr);
        //log(weatherInfo.weather);
        return weatherInfo.weather;
    } else {
         queryWeather(cityCode).then(response =>{
                if(response.data.status==200){
                    weatherInfo.weather = response.data;
                    weatherInfo.time = new Date().getTime() + cacheDuration;
                }
                localStorage.setItem('WEATHER_INFO', JSON.stringify(weatherInfo));
         })
        return weatherInfo.weather;
    }
}


export  function getWeatherLogo(type){
	var weatherLogoObj = {"多云":{"hover":"http://open.sojson.com/images/tianqi/cloud.png","image":"http://open.sojson.com/images/tianqi/cloud2.png"},"晴":{"hover":"http://open.sojson.com/images/tianqi/fine.png","image":"http://open.sojson.com/images/tianqi/fine2.png"},"阴":{"hover":"http://open.sojson.com/images/tianqi/overcast.png","image":"http://open.sojson.com/images/tianqi/overcast2.png"},"小雨":{"hover":"http://open.sojson.com/images/tianqi/small_rain.png","image":"http://open.sojson.com/images/tianqi/small_rain2.png"},"小到中雨":{"hover":"http://open.sojson.com/images/tianqi/stom_rain.png","image":"http://open.sojson.com/images/tianqi/stom_rain2.png"},"大雨|中到大雨":{"hover":"http://open.sojson.com/images/tianqi/big_rain.png","image":"http://open.sojson.com/images/tianqi/big_rain2.png"},"暴雨|大暴雨|特大暴雨|大到暴雨|暴雨到大暴雨|大暴雨到特大暴雨":{"hover":"http://open.sojson.com/images/tianqi/mbig_rain.png","image":"http://open.sojson.com/images/tianqi/mbig_rain2.png"},"雨夹雪":{"hover":"http://open.sojson.com/images/tianqi/rain_snow.png","image":"http://open.sojson.com/images/tianqi/rain_snow2.png"},"阵雪":{"hover":"http://open.sojson.com/images/tianqi/quick_snow.png","image":"http://open.sojson.com/images/tianqi/quick_snow2.png"},"雾":{"hover":"http://open.sojson.com/images/tianqi/fog.png","image":"http://open.sojson.com/images/tianqi/fog2.png"},"沙尘暴|浮尘|扬沙|强沙尘暴|雾霾":{"hover":"http://open.sojson.com/images/tianqi/sand.png","image":"http://open.sojson.com/images/tianqi/sand2.png"},"冻雨":{"hover":"http://open.sojson.com/images/tianqi/ice_rain.png","image":"http://open.sojson.com/images/tianqi/ice_rain2.png"},"中雨":{"hover":"http://open.sojson.com/images/tianqi/mid_rain.png","image":"http://open.sojson.com/images/tianqi/mid_rain2.png"},"雷阵雨伴有冰雹":{"hover":"http://open.sojson.com/images/tianqi/quick_rain_ice.png","image":"http://open.sojson.com/images/tianqi/quick_rain_ice2.png"},"阵雨":{"hover":"http://open.sojson.com/images/tianqi/quick_rain.png","image":"http://open.sojson.com/images/tianqi/quick_rain2.png"},"雷阵雨":{"hover":"http://open.sojson.com/images/tianqi/lquick_rain.png","image":"http://open.sojson.com/images/tianqi/lquick_rain2.png"},"无天气类型":{"hover":"http://open.sojson.com/images/tianqi/unknown.png","image":"http://open.sojson.com/images/tianqi/unknown2.png"}};
    var weatherLogo = {};
    for(var item in weatherLogoObj){ // 匹配type完全一致的数据
        if(item.indexOf(type)==0){
            weatherLogo = weatherLogoObj[item];
            break;
        }
    }
    if(!weatherLogo.hover){ // 匹配含有type的数据
        for(var item in weatherLogoObj){
            if(item.indexOf(type)>0){
                weatherLogo = weatherLogoObj[item];
                break;
            }
        }
    }
    if(!weatherLogo.hover){
        weatherLogo = weatherLogoObj["无天气类型"];
    }
    return weatherLogo;
}