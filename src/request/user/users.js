import req from "../index"
export  function users(){
    return req({
        url:"/users",
        method:"get",
        params:{
            pagenum:1,
            pagesize:10
        }
    })
}
export  function userid(){
    return req({
        url:"/users",
        method:"get",
    })
}