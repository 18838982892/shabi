import req from "./index"
export default function(){
    return req({
        url:"/menus",
        method:"get",
    })
}