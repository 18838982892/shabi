<template>
    <div>
         <div class="fl" style="margin-top: 15px">
            <div class="flo">
            <el-input placeholder="请输入内容" v-model="input2">
                <template slot="append" >
                  <el-button type="primary" icon="el-icon-search"></el-button>
                </template>
            </el-input>
            </div>
        </div>
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="good"
      label="#"
      width="50">
    </el-table-column>
    <el-table-column
      prop="order_number"
      label="订单编号"
      width="500">
    </el-table-column>
    <el-table-column
      prop="order_price"
      label="订单价格"
      width="150">
    </el-table-column>
     <el-table-column
      prop="goods_weight"
      label="是否付款"
      width="150">
    </el-table-column>
    <el-table-column
      prop="is_send"
      label="是否发货"
      width="150">
    </el-table-column>
    <el-table-column
      prop="roleDesc"
      label="下单时间"
      width="150">
    </el-table-column>

     <el-table-column
      prop="address"
      label="操作"
      width="150">
      <template>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
     </template>
    </el-table-column>
</el-table>

    </div>
</template>

<script>
import {orders} from "../request/orders/orders"
export default {
    props: {

    },
    data() {
        return {
            tableData:[],
            input2:''
        };
    },
    methods: {

    },
    components: {

    },
    mounted() {
        orders().then((res)=>{
            this.tableData=res.data.goods
            console.log(res);
        })
    },
};
</script>

<style scoped lang="less">
.fl{
    overflow: hidden;
    .flo{
    float: left;
    } 
}

</style>
