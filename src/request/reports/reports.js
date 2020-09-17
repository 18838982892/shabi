import req from "../index"
//查看订单数据列表
export  function reports(){
    return req({
        url:"/reports/type/1",
        method:"get",
    })
}