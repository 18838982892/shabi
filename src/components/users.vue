<template>
    <div>
<div class="fl" style="margin-top: 15px">
            <div class="flo">
            <el-input placeholder="请输入内容" v-model="zhang.query">
                <template slot="append" >
                  <el-button type="primary" icon="el-icon-search" @click="search"></el-button>
                </template>
            </el-input>
            </div>
<el-button type="primary" class="flo" style="margin-left: 15px"  @click="dialogFormVisible = true">添加用户</el-button>
</div>

<!-- 添加用户 -->
<el-dialog title="添加用户" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="form.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="form.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机" :label-width="formLabelWidth">
      <el-input v-model="form.mobile" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="sub">确 定</el-button>
  </div>
</el-dialog>



<el-table
    :data="tableData"
    style="width: 100%"
    border
    >
    <el-table-column
      type="index"
      :index="indexMethod"
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
      width="120"
      >

    <template slot-scope="scope">
      <el-button @click="open2(scope.row.id,scope.row.mg_state)">
      <el-switch
      v-model="scope.row.mg_state"
      active-color="#409EFF" >
      </el-switch>
      </el-button>
    </template>
       
    </el-table-column>
    <el-table-column
      prop="zip"
      label="操作"
      width="300">
      
       <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="getin(scope.row.id)" ></el-button>
        <el-button type="warning" icon="el-icon-delete" @click="del(scope.row.id)"></el-button>
        <el-button type="danger" icon="el-icon-s-tools" @click="fen(scope.row.username,scope.row.role_name,scope.row.id)"></el-button>
      </template>
    </el-table-column>
</el-table>

<!-- 修改 -->
<el-dialog title="修改用户" :visible.sync="chan">
  <el-form :model="form1">
    <el-form-item label="用户名" :label-width="formLabelWidth">
      <el-input v-model="form1.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="form1.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机" :label-width="formLabelWidth">
      <el-input v-model="form1.mobile" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="chan = false">取 消</el-button>
    <el-button type="primary" @click="chang">确 定</el-button>
  </div>
</el-dialog>

<!-- 分配角色 -->
<el-dialog title="分配角色" :visible.sync="chan1">
  <el-form :model="form2">
    <el-form-item label="当前的用户" :label-width="formLabelWidth">
      <span>{{ form2.username }}</span>
    </el-form-item>
    <el-form-item label="当前的角色" :label-width="formLabelWidth">
     <span>{{ form2.rolename }}</span>
    </el-form-item>

    <el-form-item  label="分配新角色" :label-width="formLabelWidth">
      <el-select v-model="form2.region" placeholder="请选择">
      <el-option label="主管" value="主管"></el-option>
      <el-option label="测试角色" value="测试角色"></el-option>
      <el-option label="测试角色" value="测试角色"></el-option>
    </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="chan1 = false">取 消</el-button>
    <el-button type="primary" @click="fa1">确 定</el-button>
  </div>
</el-dialog>

<!-- 分页器 -->
<div class="block">
    <el-pagination
      :page-sizes="[1, 2, 3, 4]"
      :page-size="zhang.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</div>


</div>
</template>

<script>
import {users,userid,userchange,user1,getinfo,change,fenpei} from "../request/user/users"
import {addjiao} from "../request/roles/roles"
export default {
    props: {

    },
    data() {
        return {
          tableData:[],
          dialogTableVisible: false,
          dialogFormVisible: false,
          formLabelWidth: '120px',
          //添加用户
          form: {
            username: '',
            password:'',
            email:"",
            mobile:''
          },
          //修改用户
          chan: false,
          form1 :{
            username: '',
            email:"",
            mobile:''
          },
          //分配
          chan1:false,
          form2:{
            username:'',
            rolename:'',
            region:''
          },
          //分页
          zhang:{
            pagenum:1,
            pagesize:20,
            query:'',
          },
          total:0,
          //修改的id
          id:"",
          //保存分配角色所需要得用户id 和角色id
          useeid:"",
          roleid:""
        };
    },
    
    methods: {
      //搜索用户
      search(){
          let zhan = this.zhang
          console.log(zhan)
          users(zhan).then((res)=>{
            console.log(res);
            this.tableData = res.data.users
          })
      },
      // 添加用户
      sub(){
        this.dialogFormVisible=false
        let info = this.form
        //添加请求
        user1(info).then((res)=>{
          // console.log(res);
           this.$message({
            showClose: true,
            message: "添加用户成功",
            type: 'success'
            });
        })
      },
      //编辑用户信息 先获取用户信息
      getin(v){
        this.chan= true ;
        this.id = v;
        getinfo(v).then((res)=>{
          console.log(res);
          this.form1.username = res.data.username
          this.form1.email = res.data.email
          this.form1.mobile =res.data.mobile
        })
      },
      //再点击 修改用户信息
      chang(){
          let id = this.id
          let email = this.form1.email
          let mobile = this.form1.mobile
          console.log( id,email,mobile)
          change(id,email,mobile).then((res)=>{
            console.log(res);
             this.$message({
              showClose: true,
              message: res.meta.msg,
              type: 'success'
            });
          })
          this.chan=false 
      },
      //删除 用户
      del(v) {
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除的请求
          userid(v).then((res)=>{ })
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
      // 更改用户状态
      open2(uld,type) {
        userchange(uld,type).then((res)=>{
          console.log(res);
          this.$message({
            showClose: true,
            message: res.meta.msg,
            type: 'success'
          });
        })
        
      },
      //分配角色  需要 c是用户id 和角色id  先走获取角色id  
      // 添加角色  传递参数角色名称 a是角色名称 获取返回值得 角色id  再传递过去
      fen(a,b,c){
        console.log(a,b,c)
        this.userid = c
        this.form2.username = a;
        this.form2.rolename = b;
        let d = {
            roleName: a
        }
        //点击添加角色时  保存返回得角色id  
        addjiao(d).then((res)=>{
          console.log(res);
          this.roleid=res.data.roleId
        })
        this.chan1= true
      },
      //点击确认时 进行 分配角色得请求  传递 用户id 和角色 id
      fa1(){
        let userid1 = this.userid
        let roleid1 = this.roleid
        console.log(userid1)
        console.log(roleid1 )
        // fenpei(userid1,roleid1).then((res)=>{
        //   console.log(res);
        //   this.chan1=false
        // })
        
      },
      // 顺序排列
      indexMethod(index) {
        return ++index;
      },
      
    },
    components: {

    },
    mounted() {
      let zhan = this.zhang
       users(zhan).then((res)=>{
        this.tableData = res.data.users
        this.total = res.data.total
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

