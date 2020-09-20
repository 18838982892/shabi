<template>
    <div>
        <!-- 角色列表 -->
<el-button type="primary" style="margin: 15px" @click="dialogFormVisible = true">添加角色</el-button>

<!-- 添加分类 -->
<el-dialog title="添加分类" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="角色名称" :label-width="formLabelWidth">
      <el-input v-model="form.roleName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" :label-width="formLabelWidth">
      <el-input v-model="form.roleDesc" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>

<!-- 表格 -->
        <el-table
    :data="tableData"
    border
    style="width: 100%"
   
    >

<!-- 标签     -->
<el-table-column type="expand"  >
<template slot-scope="props">
<div>
<div v-for="item in props.row.children" :key="item.id" class="big" >
  <el-tag closable class="one" @close="fn(props.row.id,item.id)">{{ item.authName}}</el-tag>

  <div class="two">
     <div v-for="item1 in  item.children" :key="item1.id"  class="big1">
      <el-tag  class="four" closable type="success" @close="fn(props.row.id,item1.id)">{{ item1.authName}} </el-tag> 
          
      <div class="three" >
          <el-tag @close="fn(props.row.id,item2.id)" class="five" v-for="item2 in item1.children" :key="item2.id" closable type="warning">{{ item2.authName}}</el-tag>
      </div>
    </div>
  </div>
 
</div>

</div>
  </template>
</el-table-column>
 
    <el-table-column
      prop="id"
      label="#"
      width="100"
       type="index"
      >
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
      width="400">
       <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="getin(scope.row.id)" >编辑</el-button>
        <el-button type="warning" icon="el-icon-delete" @click="del(scope.row.id)">删除</el-button>
        <el-button type="danger" icon="el-icon-s-tools" @click="fen(scope.row.id)">分配权限</el-button>
      </template>
    </el-table-column>
</el-table>

<!-- 修改 -->
<el-dialog title="修改用户" :visible.sync="chan">
  <el-form :model="form1">
    <el-form-item label="角色 ID" :label-width="formLabelWidth">
      <el-input v-model="form1.roleId" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色名称" :label-width="formLabelWidth">
      <el-input v-model="form1.roleName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" :label-width="formLabelWidth">
      <el-input v-model="form1.roleDesc" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="chan = false">取 消</el-button>
    <el-button type="primary" @click="chang">确 定</el-button>
  </div>
</el-dialog>

<!-- 分配角色 -->
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
import {roles,chanrole,dell,addjiao,get1,chan1,delone} from '../request/roles/roles'
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

          dialogFormVisible: false,
          formLabelWidth: '120px',
          //添加用户
          form: {
            roleName: '',
            roleDesc:'',
          },
          //修改用户
          chan: false,
          form1 :{
            roleId: '',
            roleName:"",
            roleDesc:''
          },
          //控制分配角色权限页面
            show:false,
            //保存的角色id
            id:'',
            roleId:"",
        };
    },
    methods: {
      //信息提示
      info11(res){
          this.$message({
            showClose: true,
            message: res.meta.msg,
            type: 'success'
          });
      },
      //封装的roles数据请求方法
      get(){
         roles().then((res)=>{
            this.tableData =res.data
            console.log(res);
        })
      },
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
      //提交
      sub(){
          let key = this.$refs.tree.getCheckedKeys() //key就是树状图的参数  就是权限id
          let key1 =  key.join(',')
          //点击提交时  把id传递 过来  还需要一个权限id
          let id =this.id;
          console.log(id);
          console.log( key1 )
          chanrole(id,key1).then((res)=>{
            console.log(res);
            this.show= false
            this.info11(res);
            this.get()
          })
      },
      //删除角色
      del(v) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除的请求
          dell(v).then((res)=>{
          console.log(res);
          this.info11(res);
           this.get()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });   
      },
      //增加角色  可以获取到角色id  
      add(){
        let info = this.form
        addjiao(info).then((res)=>{
          console.log(res);
          this.info11(res);
          this.dialogFormVisible=false
          this.get()
        }) 
      },
      //编辑  先获取   v是用户id
      getin(v){
        console.log(v);
        this.id = v;  //把点击编辑时 获取到的id赋给 变量
        get1(v).then((res)=>{
          console.log(res);
          this.form1.roleId = res.data.roleId
          this.form1.roleName = res.data.roleName
          this.form1.roleDesc =res.data.roleDesc
          this.chan=true
        })
      },
      //再修改
      chang(){
        let id = this.id
        let roleName = this.form1.roleName
        let roleDesc = this.form1.roleDesc
        chan1(id,roleName,roleDesc).then((res)=>{
          console.log(res);
          this.info11(res);
          this.chan = false
          this.get()
        })
       
      } , 
      //取消单个权限 a是角色id v是 权限id
      fn(a,v){
        console.log(a,v)
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除单个权限
          delone(a,v).then((res)=>{
            console.log(res);
            this.info11(res);
            this.get()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
       
      },
    },
    components: {

    },
    mounted() {
       this.get()
    },
};
</script>

<style scoped lang="less">
.big{
  overflow: hidden;
}
.big1{
  overflow: hidden;
}
.one{
  float: left;
  margin: 40px;
  // width: 30%;
}
.two{
  float: left;
}
.three{
  float: left;
  width: 500px;
}
.four{
  float: left;
  margin: 40px;
}
.five{
  margin: 10px;
}
</style>
