import req from "../index"
//查看订单数据列表
export  function orders(info){
    return req({
        url:"/orders",
        method:"get",
        params:info
    })
}
//查看物流信息
export function kuaidi(id){
    return req({
        url:`/kuaidi/${id}`,
        method:"get"
    })
}
//查看订单详情
export function search1(id){
    return req({
        url:`/orders/${id}`,
        method:'get'
    })
}
