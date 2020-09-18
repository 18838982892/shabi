import req from "../index"
export function goods() {
    return req({
        url: "/goods",
        method: "get",
        params: {
            pagenum: 1,
            pagesize: 10,
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

//查询商品
export function goodsSelect(sear) {
    return req({
        url: "/goods/",
        method: "get",
        params: sear
    })
}

//编辑商品信息
export function godsCompile(goods_name, goods_price, goods_number, goods_weight, goods_introduce, attrs) {
    return req({
        url: `/good/${id}`,
        method: "put",
        data: {
            goods_name: goods_name,
            goods_price: goods_price,
            goods_number: goods_number,
            goods_weight: goods_weight,
            goods_introduce: goods_introduce,
            // pics: pics,
            attrs: attrs
        }
    })
}