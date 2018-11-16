import request from '@/utils/request'
/**首页数据统计**/

//报表数据
export function countOrderGroup(startTime,endTime,orderStatusRangeType) {
  return request({
    url: '/order/outside/countOrderGroups',
    method: 'get',
    params: { startTime,endTime ,orderStatusRangeType}
  })
}


//工单统计数据
export function countOrder(startTime,endTime,orderStatusRangeType) {
  return request({
    url: '/order/outside/countOrder',
    method: 'get',
    params: { startTime,endTime ,orderStatusRangeType}
  })
}