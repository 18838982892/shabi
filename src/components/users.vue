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
            <el-button type="primary" class="flo" style="margin-left: 15px" @click="open">添加用户</el-button>
        </div>
      <el-table
    :data="tableData"
    style="width: 100%"
    border
    >
    <el-table-column
      fixed
      prop="id"
      label="#"
      width="100">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="120">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="role_name"
      label="角色"
      width="150">
    </el-table-column>
    <el-table-column
      prop="mg_state"
      label="状态"
      width="120">

    <template slot-scope="scope">
      <el-switch
      v-model="scope.row.mg_state"
      active-color="#409EFF">

      </el-switch>
    </template>
       
    </el-table-column>
    <el-table-column
      prop="zip"
      label="操作"
      width="300">
      
       <template>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="warning" icon="el-icon-delete" ></el-button>
        <el-button type="danger" icon="el-icon-s-tools"></el-button>
      </template>
    </el-table-column>
  </el-table>

   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4">
    </el-pagination>
  </div>


    </div>
</template>

<script>
import {users,userid} from "../request/user/users"

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
      open() {
        this.$alert('<h1>我</h1>', 
        '添加用户', {
          dangerouslyUseHTMLString: true
        });
      },
      
    },
    components: {

    },
    mounted() {
      users().then((res)=>{
        this.tableData = res.data.users
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

