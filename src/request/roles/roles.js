import req from "../index"
export  function roles(){
    return req({
        url:"/roles",
        method:"get",
    })
}
export function chanrole(roleId,right){
    return req({
        url:`/roles/${roleId}/${right}`,
        method:"post",

    })
}