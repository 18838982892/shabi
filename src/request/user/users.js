import req from "../index"
//获取所有信息
export  function users(sear){
    return req({
        url:"/users",
        method:"get",
        params:sear
    })
}
//删除用户
export  function userid(id){
    return req({
        url:`/users/${id}`,
        method:"delete",
    })
}
//更改用户状态
export  function userchange(uld,type){
    return req({
        url:`/users/${uld}/state/${type}`,
        method:"put",
    })
}
//添加用户
export function user1(info){
    return req({
        url:"/users",
        method:"post",
        data:info
    })
}
//先获取用户信息
export function getinfo(id){
    return req({
        url:`/users/${id}`,
        method:"get",
    })
}
//确认编辑 用户信息
export function change(id,email,mobile){
    return req({
        url:`/users/${id}`,
        method:"put",
        data:{
            email:email,
            mobile:mobile
        }
        
    })
}
