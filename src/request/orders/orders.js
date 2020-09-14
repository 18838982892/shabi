import req from "../index"
export  function orders(){
    return req({
        url:"/orders",
        method:"get",
        params:{
            pagenum:1,
            pagesize:10
        }
    })
}