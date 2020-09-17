import req from "../index"
//获取所有权限 列表
export  function rights(){
    return req({
        url:`/rights/list`,
        method:"get",
    })
}
//获取所有权限  树状图形式
export function righttree(){
    return req({
        url:`/rights/tree`,
        method:"get",
    })
}