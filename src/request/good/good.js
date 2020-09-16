import req from "../index"
export function goods() {
    return req({
        url: "/goods",
        method: "get",
        params: {
            pagenum: 1,
            pagesize: 10,
            query: '',
            total: 0
        }
    })
}

//删除商品
export function goodsDelete(id) {
    return req({
        url: `/goods/${id}`,
        method: "delete",
    })
}