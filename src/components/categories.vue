
 <template>
    <div>
      
       
<el-button type="primary" class="flo" style="margin: 15px"  @click="dialogFormVisible = true">添加分类</el-button>

<!-- 添加分类-->
<el-dialog title="添加分类" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="分类名称" :label-width="formLabelWidth">
      <el-input v-model="form.fenlei" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="父级分类" :label-width="formLabelWidth">
      <el-input v-model="form.fenlei1" autocomplete="off"></el-input>
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
       row-key="cat_id"
      :tree-props="{children: 'children'}"
      >

      <el-table-column
        type="index"
        label="#"
        width="100"
        >

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
        <el-button type="success" icon="el-icon-check" circle size="mini"></el-button>
      </el-table-column>
       <el-table-column
        prop="cat_level"
        label="排序"
        width="180">

      <template slot-scope="scope">
        <el-tag v-if="scope.row.cat_level=='0' ">一级 </el-tag>
        <el-tag v-if="scope.row.cat_level=='1' " type="success"> 二级</el-tag>
        <el-tag v-if="scope.row.cat_level=='2' " type="danger"> 三级</el-tag>
      </template>

      </el-table-column>
       <el-table-column
        prop=""
        label="操作"
        width="180">
        <template slot-scope="scope">
        <el-button  type="primary" size="small" class="el-icon-edit" @click="chan(scope.row.cat_id)"> 编辑 </el-button>
        <el-button type="danger"  size="small" class="el-icon-delete" @click="del(scope.row.cat_id)">移除</el-button>
      </template>
      </el-table-column>
    </el-table>


<!-- 编辑分类-->
<el-dialog title="编辑分类" :visible.sync="dialogFormVisibl">
  <el-form :model="form1">
    <el-form-item label="分类名称" :label-width="formLabelWidth">
      <el-input v-model="form1.cat_name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisibl = false">取 消</el-button>
    <el-button type="primary" @click="confir">确 定</el-button>
  </div>
</el-dialog>

    </div>
</template>
<script>
import {categories,addfenlei,search,bianji,dell} from "../request/categories/categories"
export default {
    props: {

    },
    data() {
        return {
          defaultProps: {
          children: 'children',
          label: 'cat_name'
          },
          tableData:[],
          dialogFormVisible: false,
          formLabelWidth: '120px',
          //添加用户
          form: {
            fenlei:"",
            fenlei1:""
          },
          //编辑分类
          dialogFormVisibl:false,
          form1:{
            cat_name:''
          },
          //删除的id
          id:'',
          //查询的id
          serid:''
        };
    },
    methods: {
      handleNodeClick(){

      },
      //信息提示
      info11(res){
          this.$message({
              showClose: true,
              message: res.meta.msg,
              type: 'success'
          });
      },
      //更新数据
      get(){
        categories().then((res)=>{
            this.tableData= res.data
            console.log(res);
        })
      },
      //查询 分类id
      sear(){
        search(this.serid).then((res)=>{
          console.log(res);
          this.tableData=[],
          this.tableData.push(res.data)
          this.info11(res);
        })
      },
      //增加分类
      sub(){

      },
      //编辑分类 v是分类id  
      chan(v){
        console.log(v);
        this.dialogFormVisibl=true
        this.id=v
      } ,
      confir(){
          console.log( this.id, this.form1.cat_name )
          bianji(this.id,this.form1).then((res)=>{
              console.log(res)
              this.info11(res);
              this.get()
              this.dialogFormVisibl=false
          })
      },
      //删除分类 v是 cat_id 分类id
      del(v){
         this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除单个权限
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
      }
    },
    components: {

    },
    mounted() {
       this.get()
    },
};
</script>

<style scoped lang="less">

</style>
