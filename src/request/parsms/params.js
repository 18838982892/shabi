import req from "../index"
//参数列表
export  function parsms(id,sel){
    return req({
        url:`/categories/${id}/attributes`,
        method:"get",
        params:{
            sel:sel
        }
    })
}
//添加动态参数或者静态属性
export function addpar(id,attr_name,attr_sel,attr_vals){
    return req({
        url:`/categories/${id}/attributes`,
        method:"post",
        data:{
            attr_name:attr_name,
            attr_sel:attr_sel,
            attr_vals:attr_vals
        }
    })
}
//删除参数
export function delpar(id,attrid){
    return req({
        url:`/categories/${id}/attributes/${attrid}`,
        method:"delete",

    })
}
//根据id查询参数
export function sear(id,attrId){
    return req({
        url:`/categories/${id}/attributes/${attrId}`,
        method:"get"
    })
}
//编辑提交参数 info 是对象
export function bianji(id,attrId,info){
    return req({
        url:`/categories/${id}/attributes/${attrId}`,
        method:"put",
        data:info
    })
}