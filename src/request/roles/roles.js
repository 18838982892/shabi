import req from "../index"
//获取所有角色列表
export  function roles(){
    return req({
        url:"/roles",
        method:"get",
    })
}
//分配角色 授权
export function chanrole(roleId,rid){
    return req({
        url:`/roles/${roleId}/rights`,
        method:"post",
        data:{
            rids:rid
        }
    })
}
//删除角色
export function dell(id){
    return req({
        url:`/roles/${id}`,
        method:"delete"
    })
}
//添加角色
export function addjiao(info){
    return req({
        url:"/roles",
        method:"post",
        data:info
    })
}
//编辑啊 先获取 
export function get1(id){
    return req({
        url:`roles/${id}`,
        method:"get"
    })
}
//再编辑
export function chan1(id,roleName,roleDesc){
    return req({
        url:`roles/${id}`,
        method:"put",
        data:{
            roleName:roleName,
            roleDesc:roleDesc
        }
    })
}
//删除角色指定授权
export function delone(roleId,rightId){
    return req({
        url:`roles/${roleId}/rights/${rightId}`,
        method:"delete",
       
    })
}
