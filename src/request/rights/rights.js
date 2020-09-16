import req from "../index"
export  function rights(){
    return req({
        url:`/rights/list`,
        method:"get",
    })
}
export function righttree(){
    return req({
        url:`/rights/tree`,
        method:"get",
    })
}