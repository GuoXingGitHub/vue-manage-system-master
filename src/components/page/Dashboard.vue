<template>
    <div>
        <el-row :gutter="5">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:260px;">
                    <img src="static/img/img.jpg" class="user-avator" alt="">
                    <div> 欢迎您，{{role}}</div>
                    <div class="user-info-list">{{province}}，{{city}}</div>
                    <div class="right-div" >
                        <div style="float:left">
                             <img :src="weatherImg">
                             <div >
                                <span>{{wendu}}<small> ℃</small></span><span>{{weatherType}}</span></div>
                             </div>
                         <div style="float:right">
                             <h1>{{ new Date() | moment("HH:mm") }}</h1>
                              <p>{{ new Date() | moment("YYYY-MM-DD dddd") }}</p>
                        </div>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="8">
                    <el-card shadow="hover" class="mgb20" style="height:260px;position: relative;">
                        <el-tabs value="first" :stretch="true" @tab-click="handleClick" >
                            <el-tab-pane label="昨日数据" name="first"></el-tab-pane>
                            <el-tab-pane label="本月数据" name="second"></el-tab-pane>
                            <el-tab-pane label="上月数据" name="third"></el-tab-pane>
                            <el-tab-pane label="总数据" name="fourth"></el-tab-pane>
                        </el-tabs> 
                         <el-row>
                            <el-col :span="24">  
                                <div style="height:160px;position: relative; text-align:center; line-height: 160px;">
                                    <div style="float:left; width:50%;text-align:center; border-right:1px solid #e3e7ea;">
                                        <p style="height:40px;position: relative; text-align:center; line-height: 40px;"><i class="el-icon-lx-likefill"></i></p>
                                        <p style="height:40px;position: relative; text-align:center; line-height: 40px;">新工单数  </p>
                                        <p style="height:30px;position: relative; text-align:center; line-height: 30px;"><span>{{test}}</span>  单</p>
                                    </div>
                                     <div style="height:160px;position: relative; text-align:center; line-height: 160px; ">
                                        <p style="height:40px;position: relative; text-align:center; line-height: 40px;"><i class="el-icon-lx-like"></i></p>
                                        <p style="height:40px;position: relative; text-align:center; line-height: 40px;">未完工数  </p>
                                        <p style="height:30px;position: relative; text-align:center; line-height: 30px;"><span>{{test2}}</span>  单</p>
                                    </div>

                                </div>
                            </el-col>
                         </el-row>
                    </el-card>
                   
            </el-col>

            <el-col :span="8">
                    <el-card shadow="hover" class="mgb20" style="height:260px;">
                        <div style=" line-height: 37px;border-bottom:2px solid #e3e7ea;">公告栏</div>
                        <div class="announcement-content" style="margin-top:30px;">
                            <div> <span></span><a href="">最近上线的版本信息             10-25</a></div>
                            <div> <span></span><a href="">最近上线的版本信息             10-25</a></div>
                            <div> <span></span><a href="">最近上线的版本信息             10-25</a></div>
                            <div>全局过滤器使用</div>
                            <div>{{"123.123123"|currency}}</div>
                            <div>{{"123456789"|asterisk}}</div>
                        </div>
                    </el-card>
            </el-col>

        </el-row>

        <el-collapse  accordion>
          <el-collapse-item title="工单监控" name="1" :style="displayStyle">
               <el-row :gutter="5" >
                    <el-col  :span="8" >
                        <el-card shadow="hover" class="mgb20" style="height:260px;">
                            <div class="mt">
                                <span class="campany-logo" style="background-image: url(${resources}/imgs/logo_wxh.png)"></span>
                                <span class="tail-number company-name">唯修汇 <small>工单</small></span>
                                <span class="type"> 
                                    <em class="primary">已启用</em>
                                </span>
                            </div>
                            <div class="mc stats-num">
                              
                                <div class="or-box or-new">
                                    <div class="box-t c-num">0</div>
                                    <div class="box-b">新工单</div>
                                </div>
                                <div class="or-box or-wait">
                                    <div class="box-t c-num">0</div>
                                    <div class="box-b">待接单</div>
                                </div>
                                <div class="or-box or-process">
                                    <div class="box-t c-num">0</div>
                                    <div class="box-b">进行中</div>
                                </div>
                            </div>
                            <div class="mb log-info">
                                <div class="log-item log-loading">
                                    <span class="time"></span>
                                    <span>努力加载中...</span>
                                </div>
                                <span class="fa fa-expand expand-logs"></span>
                            </div>
                        </el-card>
                    </el-col>

                    <el-col  :span="8">
                        <el-card shadow="hover" class="mgb20" style="height:260px;">
                          <div class="mmain">
                            <div class="mt">
                                <span class="campany-logo" style="background-image: url(${resources}/imgs/logo_own.png)"></span>
                                <span class="tail-number company-name">扳手 <small>自建单</small></span>
                                <span class="type"> 
                                    <em class="primary">已启用</em>
                                </span>
                            </div>
                            <div class="mc stats-num">
                                <div class="or-box or-new">
                                    <div class="box-t c-num">0</div>
                                    <div class="box-b">新工单</div>
                                </div>
                                <div class="or-box or-wait">
                                    <div class="box-t c-num">0</div>
                                    <div class="box-b">待接单</div>
                                </div>
                                <div class="or-box or-process">
                                    <div class="box-t c-num">0</div>
                                    <div class="box-b">进行中</div>
                                </div>
                            </div>
                            <div class="mb log-info">
                                <div class="log-item log-loading">
                                    <span class="time"></span>
                                    <span>努力加载中...</span>
                                </div>
                                <span class="fa fa-expand expand-logs"></span>
                            </div>
                        </div>
                        </el-card>
                        
                    </el-col>

                    <el-col :span="8">
                        <el-card shadow="hover" class="mgb20" style="height:260px;">
                            
                        </el-card>
                    </el-col>
              </el-row>
         </el-collapse-item>
        </el-collapse>

        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <el-tabs value="first" style="float:right" @tab-click="schartClick" tab-position="top">
                        <el-tab-pane label="最近7天" name="first"></el-tab-pane>
                        <el-tab-pane label="最近30天" name="second"></el-tab-pane>
                        <el-tab-pane label="最近60天" name="third"></el-tab-pane>
                    </el-tabs>
                 </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top:-100px">
               <el-col :span="12">
                    <el-card shadow="hover">
                        <div><schart ref="bar" class="schart" canvasId="bar" :data="data" type="bar" :options="options"></schart></div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card shadow="hover">
                        <schart ref="line" class="schart" canvasId="line" :data="dataTwo" type="line" :options="options2"></schart>
                    </el-card>
                </el-col>
        </el-row>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import bus from '../common/bus';

    import { queryWeather } from '@/api/tianqi';
    import {GetCurrWeekStr,GetCurrMouthStr,GetLastWeekStr,GetLastMouthStr,GetBeforOrAfterDayStr} from '@/utils/timeUtils';
    
    //统计
    import { countOrderGroup,countOrder} from '@/api/homePage';

    //天气
    import {getWeatherInfo} from '@/utils/weatherUtil';
    import {getWeatherLogo} from '@/utils/weatherUtil';
    
    export default {
        name: 'dashboard',
        
        data() {
            return {
                name: localStorage.getItem('ms_username'),
                data: [{
                        name: '2018/09/04',
                        value: 108
                    },
                    {
                        name: '2018/09/05',
                        value: 94
                    },
                    {
                        name: '2018/09/06',
                        value: 113
                    },
                    {
                        name: '2018/09/07',
                        value: 81
                    },
                    {
                        name: '2018/09/08',
                        value: 32
                    },
                    {
                        name: '2018/09/09',
                        value: 22
                    },
                    {
                        name: '2018/09/10',
                        value: 106
                    }
                ],
                 dataTwo: [{
                        name: '2018/09/04',
                        value: 108
                    },
                    {
                        name: '2018/09/05',
                        value: 94
                    },
                    {
                        name: '2018/09/06',
                        value: 113
                    },
                    {
                        name: '2018/09/07',
                        value: 81
                    },
                    {
                        name: '2018/09/08',
                        value: 32
                    },
                    {
                        name: '2018/09/09',
                        value: 22
                    },
                    {
                        name: '2018/09/10',
                        value: 106
                    }
                ],
                options: {
                    title: '最近7天下单数',
                    showValue: true,
                    fillColor: 'rgb(45, 140, 240)',
                    bottomPadding: 30,
                    topPadding: 30
                },
                options2: {
                    title: '最近7天完工数',
                    fillColor: '#FC6FA1',
                    axisColor: '#008ACD',
                    contentColor: '#EEEEEE',
                    bgColor: '#F5F8FD',
                    bottomPadding: 30,
                    topPadding: 30
                },
                cityCode:'101280601',
                wendu:'',
                shidu:'',
                weatherImg:'',
                weatherType:'',
                quality:'',
                test:'1',
                test2:'1',
                city:'',
                province:'',
                tianqiDiv:'',
                displayStyle:'display:none'
                ,
            filters:{
              capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
             }

            }
        }
        },
        components: {
            Schart
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        },
        created(){
            if(this.name === 'admin'){
                    this.displayStyle="display:block;";
            }
            console.log(GetCurrMouthStr(1)+' 00:00:00' +GetCurrMouthStr(2)+' 23:59:59')
            this.initCity();
            this.handleListener();
            this.changeDate();
            //默认加载数据
            this.loadOrderCountChart(GetCurrMouthStr(1)+' 00:00:00',GetCurrMouthStr(2)+' 23:59:59');
        },
        activated(){
            this.handleListener();
        },
        deactivated(){
            window.removeEventListener('resize', this.renderChart);
            bus.$off('collapse', this.handleBus);
        },
        methods: {
            changeDate(){
                const now = new Date().getTime();
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
                })
            },
            getWeather(){
                queryWeather(this.cityCode).then(response =>{
                    this.wendu = response.data.data.wendu
                    this.shidu = response.data.data.shidu
                    this.quality =response.data.data.quality
                })
            },
            handleListener(){
                bus.$on('collapse', this.handleBus);
                // 调用renderChart方法对图表进行重新渲染
                window.addEventListener('resize', this.renderChart)
            },
            handleBus(msg){
                setTimeout(() => {
                    this.renderChart()
                }, 300);
            },
            renderChart(){
                this.$refs.bar.renderChart();
                this.$refs.line.renderChart();
            },
            schartClick(tab, event){
                switch(tab.name)
                {
                case "first":
                  //最近七天
                  this.options.title="最近7天下单数";
                  this.options2.title="最近7天完工数";
                  var startTime =GetBeforOrAfterDayStr(-7)+' 00:00:00';
                  var endTime =GetBeforOrAfterDayStr(-1)+' 23:59:59';
                  this.loadOrderCountChart(startTime,endTime);
                  break;
                case "second":
                  //最近30天
                  this.options.title="最近30天下单数";
                  this.options2.title="最近30天完工数";
                  var startTime =GetBeforOrAfterDayStr(-30)+' 00:00:00';
                  var endTime =GetBeforOrAfterDayStr(-1)+' 23:59:59';
                  this.loadOrderCountChart(startTime,endTime);
                  break;
                case "third":
                  //最近60天
                  this.options.title="最近60天下单数";
                  this.options2.title="最近60天完工数";
                  var startTime =GetBeforOrAfterDayStr(-60)+' 00:00:00';
                  var endTime =GetBeforOrAfterDayStr(-1)+' 23:59:59';
                  this.loadOrderCountChart(startTime,endTime);
                  break;
                default:
                  console.log("选择类型错误");
                }
            },
            handleClick(tab, event) {
                switch(tab.name)
                {
                case "first":
                  var startTime =GetBeforOrAfterDayStr(-1)+' 00:00:00';
                  var endTime =GetBeforOrAfterDayStr(-1)+' 23:59:59';
                  this.getCountOrderByTimeAndType(startTime,endTime,"CUSTOMER_SERVICE_UNDO");
                  this.getCountOrderByTimeAndType(startTime,endTime,"ORDER_DONE");
                  break;
                case "second":
                  var startTime =GetCurrMouthStr(1)+' 00:00:00';
                  var endTime =GetCurrMouthStr(2)+' 23:59:59';
                  this.getCountOrderByTimeAndType(startTime,endTime,"CUSTOMER_SERVICE_UNDO");
                  this.getCountOrderByTimeAndType(startTime,endTime,"ORDER_DONE");
                  break;
                case "third":
                  var startTime =GetLastMouthStr(1)+' 00:00:00';
                  var endTime =GetLastMouthStr(2)+' 23:59:59';
                  this.getCountOrderByTimeAndType(startTime,endTime,"CUSTOMER_SERVICE_UNDO");
                  this.getCountOrderByTimeAndType(startTime,endTime,"ORDER_DONE");
                  break;
                case "fourth":
                  console.log(4);
                  break;
                default:
                  console.log(5);
                }
            },
            initCity(){
                //* 获取IP对应的地址信息（缓存6H）
                var cacheDuration = 21600000; // 6小时的毫秒值
                var localInfo = {}, localInfoStr = localStorage.getItem('LOCATION_INFO'); // 缓存的地址信息
          
                // 根据IP地址获取地理位置（搜狐API）
                if(!localInfoStr){
                    var cname = returnCitySN["cname"];
                    var myGeo = new BMap.Geocoder();
                    if(cname){
                        myGeo.getPoint(cname, function(point){
                            if (point) {
                                myGeo.getLocation(point,function(rs){
                                    if(rs){
                                        var data = rs.addressComponents;
                                        console.info(data);
                                        localInfo.province = data.province;
                                        localInfo.city = data.city;
                                        var localData = {}; // 存储取得的地址信息
                                        localData.ip = localInfo;
                                        localData.time = new Date().getTime() + cacheDuration;
                                        localStorage.setItem('LOCATION_INFO', JSON.stringify(localData));
                                        //根据城市加载天气信息
                                        this.loadWeather(localInfo);
                                    }
                                })
                            }
                        });
                    }
                }else if(localInfoStr){
                     var local = JSON.parse(localInfoStr);
                     localInfo.province = local.ip.province;
                     localInfo.city = local.ip.city;
                     //根据城市加载天气信息
                     this.loadWeather(localInfo);
                }
            },
            loadWeather: function(localInfo){
                // 设置城市位置信息并查询当地天气
                if(localInfo.province){
                    // 显示当前所在省市
                    this.province = localInfo.province;
                    this.city = localInfo.city;
                    //** 获取当前地址信息
                    var weather = getWeatherInfo(this.cityCode); //localInfo.city
                    //** 初始化天气模块
                    this.initWeatherWidget(weather);
                }
            },
            initWeatherWidget: function(weather){ /* 初始化显示天气模块 */
                if(weather && weather.data){
                    // 未来天气信息（包括今天）
                    var forecast = weather.data.forecast;
                    // 取得当前天气的图标
                    var todayImg = getWeatherLogo(forecast[0].type), // {hover:"", image:""}
                    tomorrowImg = getWeatherLogo(forecast[1].type),
                    afterTomorrowImg = getWeatherLogo(forecast[2].type);
                    // 设置要显示的天气内容
                    this.weatherImg =todayImg.hover;
                    this.wendu = weather.data.wendu;
                    this.weatherType = forecast[0].type;
                }
            },
            loadOrderCountChart :function(startTime,endTime){
                try{
                    this.getChartDataByTimeAndType(startTime,endTime,"CUSTOMER_SERVICE_UNDO");
                    this.getChartDataByTimeAndType(startTime,endTime,"ORDER_DONE");
                }catch (e) {
                     console.log(e.name + ":" + e.message);
                }
             
            },
            getChartDataByTimeAndType: function(startTime, endTime,orderStatusRangeType){
                var orderList = [];
                countOrderGroup(startTime,endTime,orderStatusRangeType).then(response =>{
                    if (response.status == 200 && "CUSTOMER_SERVICE_UNDO" == orderStatusRangeType) {
                        if(response.data  && response.data.length>0){
                            for(var i in response.data) {
                             var e = response.data[i];
                             this.data =response.data;
                             }
                        }else{
                             this.dataTwo = [{ name: new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDate(),value: 0}];
                        }
                    }else if(response.status == 200 && "ORDER_DONE" == orderStatusRangeType){
                       
                        if(response.data && response.data.length>0){
                            for(var i in response.data) {
                                var e = response.data[i];
                                this.dataTwo =response.data;
                             }
                        }else{
                            this.dataTwo = [{ name: new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDate(),value: 0}];
                        }
                    }
                }).catch(() => {
                   console.log("请求失败！");
                });
            },
            getCountOrderByTimeAndType : function(startTime, endTime,orderStatusRangeType){
                countOrder(startTime,endTime,orderStatusRangeType).then(response =>{
                    debugger
                     if (response.status == 200 && "CUSTOMER_SERVICE_UNDO" == orderStatusRangeType) {
                        this.test=response.data;
                    }else if(response.status == 200 && "ORDER_DONE" == orderStatusRangeType){
                        this.test2=response.data;
                    }
                }).catch(() =>{
                    console.log("请求失败！");
                });
            }
        }
    }
</script>

<style>
    
   

     ul,li {list-style:none;}
     body{
            font-family: "microsoft yahei";
            font-size: 14px;
            line-height: 1.5;
            color: #516472;
     }
     .index .con-box1 .box-fff{
            height: 210px;
            overflow: hidden;
     }
   
   .announcement-content span{
        background: #2FB26A;
        height: 5px;
        width: 5px;
        border-radius: 5px;
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 2px;
   }
   
   .announcement-content div{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 16px;
        box-sizing: border-box;
        padding-bottom: 10px;
        box-sizing: border-box;
        font-size: 13px;
   }

    .el-row {
        margin-bottom: 6px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 300px;
    }

   div p span{
    font-size: 20px; 
    font-weight: bold;
   }
   
</style>
