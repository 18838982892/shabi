<template>
    <div>
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="cat_id"
        label="#"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cat_name"
        label="分类名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="是否有效"
        width="180">
      </el-table-column>
       <el-table-column
        prop="cat_level"
        label="排序"
        width="180">
      </el-table-column>
       <el-table-column
        prop=""
        label="操作"
        width="180">
        <template>
        <el-button  type="text" size="small"> 编辑 </el-button>
        <el-button type="text"  size="small">移除</el-button>
       
      </template>
      </el-table-column>

    </el-table>
    </div>
</template>

<script>
import {categories} from "../request/categories/categories"
export default {
    props: {

    },
    data() {
        return {
            tableData:[]
        };
    },
    methods: {

    },
    components: {

    },
    mounted() {
        categories().then((res)=>{
            this.tableData= res.data
            console.log(res);
        })
    },
};
</script>

<style scoped lang="less">

</style>
