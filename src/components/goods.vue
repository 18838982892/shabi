<template>
    <div class="max big">
        <div class="fl" style="margin-top: 15px">
            <div class="flo">
            <el-input placeholder="请输入内容"  v-model="god.query">
                <template slot="append" >
                  <el-button type="primary" icon="el-icon-search" @click="goodsSelect"></el-button>
                </template>
            </el-input>
            </div>
            <el-button type="primary" class="flo" style="margin-left: 15px" @click="sho">添加商品
            </el-button>
        </div>
              <el-table v-if="show"
              
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="goods_id"
      label="#"
      width="50"
      type="index">
    </el-table-column>
    <el-table-column
      prop="goods_name"
      label="商品名称"
      width="300">
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
      prop="add_time"
      label="创建时间"
      width="150">
      <!-- 格式化时间 -->
      <template slot-scope="scope">
        {{scope.row.add_time | dateFormat}}
      </template>
    </el-table-column>

     <el-table-column
      prop="address"
      label="操作"
      width="150">
      <template slot-scope="scope" >
        <el-button type="primary" icon="el-icon-edit" @click="goodsCompileId(scope.row.goods_id)"></el-button>
        <el-button type="primary" icon="el-icon-delete" @click="removeGoodsId(scope.row.goods_id)"></el-button>
     </template>
     
    </el-table-column>
      </el-table>

  <div v-else >

              <Add></Add>         
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>

<!-- 分页器 -->
<div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[1, 2, 3, 4]"
      :current-page="god.pagenum"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</div>



</div>
</template>




<script>
import {goods,goodsDelete,goodsSelect,godsCompile} from "../request/good/good"
import Add from "./Addgoods"
export default {
    props: {

    },
    data() {
        return {
            tableData:[],
            show:true,
            active: 0,
            //查询商品
            god:{
              query:'',
              pagenum:1,
              pagesize:10
            },
            total:0,
            Compiled:false,
            //编辑商品
            Compile:{
                goods_name:'',
                goods_price:0,
                goods_number:0,
                goods_weight:0,
                goods_introduce:'',
                attrs:''
            },
            tabPosition:'left',
        }
    },
    methods: {


       // 每页数
    handleSizeChange(val) {
      this.god.pagesize = val;
      this.god.pagenum = 1;
      this.goodss();
    },
    // 当前页
    handleCurrentChange(val) {
      this.god.pagenum = val;
      this.goodss();
    },
        next() {
          if (this.active++ > 2) this.active = 0;
        },
        sho(){
          this.show=!this.show
        },
        //删除商品
        removeGoodsId(id){
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除
          goodsDelete(id).then((res) =>{ })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        },
        //列表商品
        goodss(){
          goods(this.god).then((res)=>{
            this.tableData=res.data.goods
            this.total = res.data.total
            // console.log(res);
           })
        },
        //查询商品
        goodsSelect(){
          let god = this.god;
          goodsSelect(god).then((res)=>{
            // console.log(res);
            this.tableData=res.data.goods
          })
        },
        //编辑商品信息
       goodsCompileId(v){
           this.dialogFormVisible = true;
           console.log(v); 
           goodsSelectId(v).then((res) =>{
             console.log(res);  
             this.form.name = res.data.goods_name,
             this.form.price = res.data.goods_price,
             this.form.weight = res.data.goods_weight
           })
        },
   },
    components: {
      Add,
    },
    mounted() {
        this.goodss();
    }
}
</script>

<style scoped lang="less">
.big{
  width: 950px;
}
.fl{
    overflow: hidden;
    .flo{
    float: left;
    } 
  .max{
      width:100%;
      .add{
      width:100%;
      background-color: #909399;
    }
  } 
}


</style>
