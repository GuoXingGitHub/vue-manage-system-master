import request from '@/utils/request'

export function queryWeather(cityCode) {
	
  return request({
    url: '/api/weather/city/'+cityCode,
    method: 'get'
  })
}
