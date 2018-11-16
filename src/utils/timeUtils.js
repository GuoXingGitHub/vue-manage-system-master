

export function getSpeicalTime(minutes) {// -10 向前10分钟；20向后20分钟
	var now = new Date();
	now.setMinutes(now.getMinutes() + (isNaN(minutes)?-10:minutes));
	return now;
}


export function GetBeforOrAfterDayStr(n){//* 取得之前或之后N天的日期字符串 "yyyy-MM-dd" 
	var today = new Date();
	if(!isNaN(n)){
		today.setTime(today.getTime() + n*24*60*60*1000);
	}
	var strYear = today.getFullYear();
	var strDay = today.getDate();
	var strMonth = today.getMonth()+1;
	if(strMonth < 10) {
		strMonth = "0"+strMonth;
	}
	if(strDay < 10) {
		strDay = "0"+strDay;
	}
	return strYear+"-"+strMonth+"-"+strDay;
}


export function GetCurrWeekStr(i){ //* 取得这周的指定一天的日期字符串 "yyyy-MM-dd"
	var date;
	var now = new Date(); //当前日期 
	// 取当前月的最后一天
	var nowDayOfWeek = now.getDay(); //今天本周的第几天 
	var nowDay = now.getDate(); //当前日 
	if(i==1){
		date = new Date(now.getFullYear(), now.getMonth(), nowDay - nowDayOfWeek+1); 
	}
	// 取当前月的最后一天
	else if(i==2){
		date = new Date(now.getFullYear(), now.getMonth(), nowDay + (7 - nowDayOfWeek)); 
	}
	// 取今天
	else {
		date = new Date();
	}
	// 返回日期字符串 "yyyy-MM-dd"
	var strYear = date.getFullYear();
	var strDay = date.getDate();
	var strMonth = date.getMonth()+1;
	if(strDay < 10) {
		strDay = "0"+strDay;
	}
	if(strMonth < 10) {
		strMonth = "0"+strMonth;
	}
	return strYear+"-"+strMonth+"-"+strDay;
}



export function GetLastWeekStr(i){ //* 取得上周的指定一天的日期字符串 "yyyy-MM-dd"
	var date;
	var now = new Date(); //当前日期 
	// 取当前月的最后一天
	var nowDayOfWeek = now.getDay(); //今天本周的第几天 
	var nowDay = now.getDate(); //当前日 
	if(i==1){
		date = new Date(now.getFullYear(), now.getMonth(), nowDay - nowDayOfWeek+1-7); 
	}
	
	else if(i==2){
		date = new Date(now.getFullYear(), now.getMonth(), nowDay + (7 - nowDayOfWeek)-7); 
	}
	// 取今天
	else {
		date = new Date();
	}
	// 返回日期字符串 "yyyy-MM-dd"
	var strYear = date.getFullYear();
	var strDay = date.getDate();
	var strMonth = date.getMonth()+1;
	if(strDay < 10) {
		strDay = "0"+strDay;
	}
	if(strMonth < 10) {
		strMonth = "0"+strMonth;
	}
	return strYear+"-"+strMonth+"-"+strDay;
}


export function GetCurrMouthStr(i){ //* 取得当前月的指定一天的日期字符串 "yyyy-MM-dd"
	var date;
	// 取当前月的第一天
	if(i==1){
		var firstDay = new Date();
		firstDay.setDate(1);
		date = firstDay;
	}
	// 取当前月的最后一天
	else if(i==2){
		var lastDay = new Date();
		var currentMonth = lastDay.getMonth();
		var nextMonth = ++currentMonth;
		var nextMonthFirstDay = new Date(lastDay.getFullYear(),nextMonth,1);
		var oneDay = 1000*60*60*24;
		date = new Date(nextMonthFirstDay - oneDay);
	}
	// 取今天
	else {
		date = new Date();
	}
	// 返回日期字符串 "yyyy-MM-dd"
	var strYear = date.getFullYear();
	var strDay = date.getDate();
	var strMonth = date.getMonth()+1;
	if(strDay < 10) {
		strDay = "0"+strDay;
	}
	if(strMonth < 10) {
		strMonth = "0"+strMonth;
	}
	return strYear+"-"+strMonth+"-"+strDay;
}



export function GetLastMouthStr(i){ //* 取得上个月的指定一天的日期字符串 "yyyy-MM-dd"
	var date;
	// 取上个月的第一天
	if(i==1){
		var lastDay = new Date();
		var currentMonth = lastDay.getMonth(); //当前月份
		var lastMonth = --currentMonth; //上个月
		var lastMonthFirstDay = new Date(lastDay.getFullYear(),lastMonth,1);
		date = new Date(lastMonthFirstDay);
	}
	// 取上个月的最后一天(当前这个月的第一天减去一天)
	else if(i==2){
		var lastDay = new Date();
		var currentMonth = lastDay.getMonth();
		var currentMonthFirstDay = new Date(lastDay.getFullYear(),currentMonth,1);
		var oneDay = 1000*60*60*24;
		date = new Date(currentMonthFirstDay - oneDay);
	}
	// 取今天
	else {
		date = new Date();
	}
	// 返回日期字符串 "yyyy-MM-dd"
	var strYear = date.getFullYear();
	var strDay = date.getDate();
	var strMonth = date.getMonth()+1;
	if(strDay < 10) {
		strDay = "0"+strDay;
	}
	if(strMonth < 10) {
		strMonth = "0"+strMonth;
	}
	return strYear+"-"+strMonth+"-"+strDay;
}



export function initSearchParams(timeSlot,status){
	var sDate = new Date();
	var sYear = sDate.getFullYear();
	var sMonth = sDate.getMonth() + 1;
	var sDay = sDate.getDate()+1;
	var eYear = sYear;
	var eMonth = sMonth + 1;
	var bYear = sYear;
	var bMonth = sMonth - 1;
	var bbYear = bYear;
	var bbMonth = bMonth - 1;
	if(sMonth==12){
		var eYear = sYear + 1;
		var eMonth = 1;
	}
	if(bMonth==1){
		var bbYear = sYear - 1;
		var bbMonth = 12;
	}
	if(sMonth==1){
		var bYear = sYear - 1;
		var bMonth = 12;
	}
	var start = "";
	var end = "";
	if(timeSlot && timeSlot=="thisMonth"){
		start = sYear+"-"+sMonth+"-01 00:00:00";
		end = sYear+"-"+sMonth+"-"+sDay+" 23:59:59";
	}else if(timeSlot && timeSlot=="lastMonth"){
		start = bYear+"-"+bMonth+"-01 00:00:00";
		end = bYear+"-"+bMonth+"-"+sDay+" 23:59:59";
	}else if(timeSlot && timeSlot=="thisNearestMonth"){
		start = bYear+"-"+bMonth+"-"+sDay+" 00:00:00";
		end = sYear+"-"+sMonth+"-"+sDay+" 23:59:59";
	}else if(timeSlot && timeSlot=="lastNearestMonth"){
		start = 1999+"-"+bMonth+"-"+sDay+" 00:00:00";
		end = sYear+"-"+sMonth+"-"+sDay+" 23:59:59";
	}else if(timeSlot && timeSlot=="lastOrderNearestMonth"){
		start = bbYear+"-"+bbMonth+"-"+sDay+" 000:00:00";
		end = bYear+"-"+bMonth+"-"+sDay+" 23:59:59";
	}
	
	
	var data = {
		startTime: start,
		endTime: end,
		orderStatusRangeType: status
		
	};
	return data;
}