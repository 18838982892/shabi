<template>
    <div>
        <!-- 角色列表 -->
        <el-button type="primary" style="margin: 15px">添加角色</el-button>
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop=">"
      label=">"
      width="50">
    </el-table-column>
    <el-table-column
      prop="id"
      label="#"
      width="100"
       type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="角色名称"
      width="200">
    </el-table-column>
     <el-table-column
      prop="roleDesc"
      label="角色描述"
      width="200">
    </el-table-column>
     <el-table-column
      prop="address"
      label="操作"
<<<<<<< HEAD
      width="300">
      <template>
        <el-button  type="text" size="small"> 编辑 </el-button>
        <el-button type="text"  size="small" >移除</el-button>
        <el-button type="text"  size="small">分配权限</el-button>
=======
      width="400">
       <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="getin(scope.row.id)" >编辑</el-button>
        <el-button type="warning" icon="el-icon-delete" @click="del(scope.row.id)">删除</el-button>
        <el-button type="danger" icon="el-icon-s-tools" @click="fen(scope.row.id)">分配权限</el-button>
>>>>>>> 8e2c15b76f59d0c21e15300a1d2fb294cf585cf6
      </template>
    </el-table-column>
</el-table>

<el-dialog title="添加用户" :visible.sync="show">
<el-tree
  :data="data1"
  show-checkbox
  default-expand-all
  node-key="id"
  ref="tree"
  highlight-current
  :props="defaultProps">
</el-tree>
<div slot="footer" class="dialog-footer">
    <el-button @click="show = false">取 消</el-button>
    <el-button type="primary" @click="sub">确 定</el-button>
  </div>
</el-dialog>


    </div>
</template>

<script>
import {roles,chanrole} from '../request/roles/roles'
//树状图权限
import {righttree} from "../request/rights/rights"

export default {
    props: {

    },
    data() {
        return {
            tableData:[],
            data1:[],
            defaultProps: {
              children: 'children',
              label: 'authName'
            },
            show:false,
            //保存的角色id
            id:''
        };
    },
    methods: {
      //分配权限  获取需要的权限的内容  v是角色id  未获取到权限id
      fen(v){
        //保存id
        this.id=v
        righttree().then((res)=>{
          this.data1 = res.data
          this.show = true
          console.log(res);
        })
      },
      sub(){
          let id =this.id;
          chanrole(id,).then((res)=>{
            console.log(res);
          })
          this.show= false
          console.log(id);
      },
      // 顺序排列
      indexMethod(index) {
        return ++index;
      },
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
