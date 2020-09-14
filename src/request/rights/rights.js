import req from "../index"
export  function rights(){
    return req({
        url:`/rights/list`,
        method:"get",
    })
}