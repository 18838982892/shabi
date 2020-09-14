import req from "../index"
export  function goods(){
    return req({
        url:"/goods",
        method:"get",
        params:{
            pagenum:1,
            pagesize:10
        }
    })
}