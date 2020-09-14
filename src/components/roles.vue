<template>
    <div>
        <!-- 角色列表 -->
        <el-button type="primary">添加角色</el-button>
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop=">"
      label=""
      width="50">
    </el-table-column>
    <el-table-column
      prop="1"
      label="#"
      width="100">
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="角色名称"
      width="300">
    </el-table-column>
     <el-table-column
      prop="roleDesc"
      label="角色描述"
      width="300">
    </el-table-column>
     <el-table-column
      prop="address"
      label="操作"
      width="300">
      <template>
        <el-button  type="text" size="small"> 编辑 </el-button>
        <el-button type="text"  size="small">移除</el-button>
        <el-button type="text"  size="small">分配权限</el-button>
      </template>
    </el-table-column>
</el-table>


    </div>
</template>

<script>
import {roles} from '../request/roles/roles'
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
        roles().then((res)=>{
            this.tableData =res.data
            console.log(res);
        })
    },
};
</script>

<style scoped lang="less">

</style>
