import req from "../index"
//商品分类数据列表
export  function categories(info){
    return req({
        url:"/categories",
        method:"get",
        params:info
    })
}
//添加分类
export  function addfenlei(info1){
    return req({
        url:"/categories",
        method:"post",
        params:info1
    })
}
//根据id查询分类
export  function search(id){
    return req({
        url:`/categories${id}`,
        method:"get"
    })
}
//编辑 提交分类
export  function bianji(id,s){
    return req({
        url:`/categories/${id}`,
        method:"put",
        data:s
    })
}
//删除分类
export function dell(id){
    return req({
        url:`/categories/${id}`,
        method:"delete"
    })
}