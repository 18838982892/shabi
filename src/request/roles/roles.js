import req from "../index"
export  function roles(){
    return req({
        url:"/roles",
        method:"get",
    })
}