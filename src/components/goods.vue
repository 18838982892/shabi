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
            <el-button type="primary" class="flo" style="margin-left: 15px" @click="sho">添加商品</el-button>
        </div>
              <el-table v-if="show"
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="goods_id"
      label="#"
      width="50">
    </el-table-column>
    <el-table-column
      prop="goods_name"
      label="商品名称"
      width="500">
    </el-table-column>
    <el-table-column
      prop="goods_price"
      label="商品价格(元)"
      width="150">
    </el-table-column>
     <el-table-column
      prop="goods_weight"
      label="商品重量"
      width="150">
    </el-table-column>
    <el-table-column
      prop="roleDesc"
      label="创建时间"
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
<div v-else>

  <el-steps :active="active" finish-status="success" v->
  <el-step title="基本信息"></el-step>
  <el-step title="商品参数"></el-step>
  <el-step title="商品属性"></el-step>
  <el-step title="商品图片"></el-step>
  <el-step title="商品内容"></el-step>
  <el-step title="商品完成"></el-step>
  </el-steps>
<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
</div>



</div>
</template>

<script>
import {goods} from "../request/good/good"
export default {
    props: {

    },
    data() {
        return {
            tableData:[],
            show:true,
            active: 0,
            input2:''
        };
    },
    methods: {
        next() {
          if (this.active++ > 2) this.active = 0;
        },
        sho(){
          this.show=!this.show
        }
    },
    components: {

    },
    mounted() {
        goods().then((res)=>{
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
