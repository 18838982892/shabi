import req from "../index"
export  function categories(){
    return req({
        url:"/categories",
        method:"get",
    })
}