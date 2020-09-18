<template>
    <div>
         <div class="fl" style="margin-top: 15px">
            <div class="flo">
            <el-input placeholder="请输入内容" v-model="info.query">
                <template slot="append" >
                  <el-button type="primary" icon="el-icon-search" @click="search"></el-button>
                </template>
            </el-input>
            </div>
        </div>
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="order_id"
      label="#"
      width="50">
    </el-table-column>
    <el-table-column
      prop="order_number"
      label="订单编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="order_price"
      label="订单价格"
      width="150">
    </el-table-column>
     <el-table-column
      prop="pay_status"
      label="是否付款"
      width="150">
    </el-table-column>
    <el-table-column
      prop="is_send"
      label="是否发货"
      width="150">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="下单时间"
      width="150">
    </el-table-column>

     <el-table-column
      prop=""
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="getin(scope.row.order_id)" ></el-button>
        <el-button icon="el-icon-s-promotion" type="success" @click="kuadi"></el-button>
     </template>
    </el-table-column>
</el-table>

<<<<<<< HEAD
    
=======
<!-- 修改 -->
<el-dialog title="修改用户" :visible.sync="chan">
  <el-form :model="form1">
    <el-form-item label="省市区/县" :label-width="formLabelWidth">
      <el-select v-model="form1.region" placeholder="请选择">
        <el-option label="上海" value="上海"></el-option>
        <el-option label="北京" value="北京"></el-option>
        <el-option label="深圳" value="深圳"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="详细地址" :label-width="formLabelWidth">
        <el-input v-model="form1.adre" autocomplete="off" ></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="chan = false">取 消</el-button>
    <el-button type="primary" @click="chang">确 定</el-button>
  </div>
</el-dialog>

<!-- 物流信息 -->
<el-dialog
  title=" 物流信息"
  :visible.sync="dialogVisible"
  width="50%"
  >
<div class="block">
  <el-timeline >
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.time">
      {{activity.context}}
    </el-timeline-item>
  </el-timeline>

</div>
</el-dialog>

>>>>>>> a478217ef5e84dac0dd1f9d861e992b4cbdb01cc

    </div>
    
</template>

<script>
import {orders,kuaidi,search1} from "../request/orders/orders"
export default {
    props: {

    },
    data() {
        return {
            tableData:[],
            //请求传递得参数
            info:{
              query:'',
              pagenum:1,
              pagesize:100
            },
            //修改用户
          formLabelWidth: '120px',
          chan: false,
          form1 :{
            adre:"",
            region:''
          },
          //物流相关数据
          dialogVisible: false,
          activities:[]
        };
    },
    methods: {
      //搜索
      search(){
          let sou = this.info.query
          this.tableData=[] //清空 数组
          search1(sou).then((res)=>{
            console.log(res);
            //把对象push到数组中
            this.tableData.push(res.data)
        })
      },
      //修改
      getin(v){
          this.chan=true;
          console.log(v)
      },
      chang(){
        this.chan = false
      },
      //弹出快递信息
      kuadi(){
        kuaidi('1106975712662').then((res)=>{
          console.log(res);
          this.activities = res.data
          this.dialogVisible = true
          console.log( this.activities )
        })
      }
    },
    components: {

    },
    mounted() {
        let info = this.info
        orders(info).then((res)=>{
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
