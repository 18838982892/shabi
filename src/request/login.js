import req from "./index"
export default function(info){
    return req({
        url:"/login",
        method:"post",
        data:info
    })
}
