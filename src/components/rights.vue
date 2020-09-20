<template>
    <div >
          <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="#"
      width="50"
      type="index">
    </el-table-column>
    <el-table-column
      prop="authName"
      label="权限名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="path"
      label="路径"
      width="300">
    </el-table-column>
    <el-table-column
      prop="level"
      label="权限等级"
      width="300"
      :filters="[{ text: '一级', value: '0' }, { text: '二级', value: '1' }]"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag v-if="scope.row.level=='0' ">一级 </el-tag>
        <el-tag v-if="scope.row.level=='1' " type="success">二级 </el-tag>
        <el-tag v-if="scope.row.level=='2' " type="warning">三级 </el-tag>
       
      </template>
    </el-table-column>

  </el-table>
    </div>
</template>

<script>
import {rights} from "../request/rights/rights"
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
        rights().then((res)=>{
            this.tableData=res.data
            console.log(res)
        }) 
    },
};
</script>

<style scoped lang="less">

</style>
