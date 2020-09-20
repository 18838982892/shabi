<template>
    <div class="params">
<!-- 选择商品分类 -->
        <el-alert
    title="注意：只允许为第三级分类设置相关参数！"
    type="warning"
    show-icon>
  </el-alert>

  <div class="block">
  <span class="demonstration">选择商品分类：</span>
  <el-cascader
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover', value:'cat_id',label:'cat_name' }"
    @change="handleChange"></el-cascader>
</div>

<!-- 参数排列 -->
<el-tabs  v-model="activeName" >
    <el-tab-pane label="动态参数" name="many">
        <el-button type="primary" @click="dialogFormVisible = true">添加参数</el-button>
    </el-tab-pane>
    <el-tab-pane label="静态属性" name="only">
        <el-button type="primary" @click="dialogFormVisibl = true">添加属性</el-button>    
    </el-tab-pane>
</el-tabs>

<!-- 添加分类动态 -->
<el-dialog title="添加动态参数" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="动态参数" :label-width="formLabelWidth">
      <el-input v-model="form.canshu" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add1">确 定</el-button>
  </div>
</el-dialog>

<!-- 添加分类静态 -->
<el-dialog title="添加静态属性" :visible.sync="dialogFormVisibl">
  <el-form :model="form1">
    <el-form-item label="静态属性" :label-width="formLabelWidth">
      <el-input v-model="form1.canshu1" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisibl = false">取 消</el-button>
    <el-button type="primary" @click="add2">确 定</el-button>
  </div>
</el-dialog>


<!-- 修改分类静态 -->
<el-dialog title="修改静态属性" :visible.sync="dialogFormVisib">
  <el-form :model="form2">
    <el-form-item label="静态属性" :label-width="formLabelWidth">
      <el-input v-model="form2.canshu2" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisib = false">取 消</el-button>
    <el-button type="primary" @click="chang">确 定</el-button>
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
<!-- <template slot-scope="props">
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
  </template> -->
</el-table-column>
 
    <el-table-column
      prop="attr_id"
      label="#"
      width="100"
       type="index"
      >
    </el-table-column>
    <el-table-column
      prop="attr_name"
      label="参数名称"
      width="200">
    </el-table-column>
     <el-table-column
      prop="address"
      label="操作"
      width="300">
       <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="getin(scope.row.attr_id)" >编辑</el-button>
        <el-button type="warning" icon="el-icon-delete" @click="del(scope.row.attr_id)">删除</el-button>
      </template>
    </el-table-column>
</el-table>


    </div>
</template>

<script>
import {parsms,addpar,delpar,sear,bianji} from '../request/parsms/params'
import {categories} from "../request/categories/categories"
export default {
    props: {

    },
    data() {
        return {
            value: [],
            options:[],
            //代表是 静态属性还是 动态属性
            activeName: 'many',
            //代表分类id 
            id:'',
            //属性id
            shuxingid:'',
            //表格
            tableData:[],
            dialogFormVisible: false,
            formLabelWidth: '120px',
            //代表动态分类名称
            form: {
                canshu: '',
            },
            //静态分类名称
            dialogFormVisibl:false,
            form1:{
                canshu1:"",
            },
            //修改分类  新属性的名字
            dialogFormVisib:false,
            form2:{
                canshu2:''
            }

        };
    },
    methods: {
      //信息展示
      info11(res){
         this.$message({
              type: 'success',
              message: res.meta.msg
          });
      },
      //更新数据
      get(){
          let sel =[this.activeName]
          parsms(this.id,sel).then((res)=>{
              console.log(res);
              this.tableData = res.data
              this.info11(res);
          })
      },
        //分类 选择框  value就是分类id  选择过后  把分类id 赋给data中的 请求页面时使用id
      handleChange(value) {
        this.id =value[value.length-1]
        console.log( this.activeName )
        this.get()
      },
        //添加动态属性
        add1(){
            // this.id 是分类id  this.from.参数 是 参数名称  this.activeName是类型
            console.log( this.form.canshu,this.id,this.activeName )
            addpar(this.id,this.form.canshu,this.activeName).then((res)=>{
                this.dialogFormVisible=false
                this.info11(res);
                this.get()
            })
        },
        //添加静态属性 修改 参数属性和类型
        add2(){
            addpar(this.id,this.form1.canshu1,this.activeName).then((res)=>{
                this.dialogFormVisibl=false
                this.info11(res);
                this.get()
            })
        },
        //删除 属性 v是参数id
        del(v){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                //删除请求
                // console.log(v);
                delpar(this.id,v).then((res)=>{
                    console.log(res);
                    this.info11(res);
                    this.get()
              });
            }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消删除'
            });          
            });
        },

        //修改编辑  v是属性id
        getin(v){
            this.dialogFormVisib=true
            console.log(v);
            this.shuxingid = v
        },
        //id 是分类id   shuxingid是属性id  fom2.canshu2 是新属性的名字  activeName是属性的类型
        chang(){
            let info = {
                attr_name:this.form2.canshu2,
                attr_sel:[this.activeName],
                attr_vals:''
            }
            console.log( info.attr_sel )
            bianji(this.id,this.shuxingid,info).then((res)=>{
                console.log(res);
                this.info11(res);
                this.get()
                this.dialogFormVisib=false
            })
        },
    },
    components: {
       
    },
    mounted() {
        //取到所有的 分类商品
         categories().then((res)=>{
            console.log(res);
            this.options= res.data
        })
    },
};
</script>

<style scoped lang="less">
.params{
    width: 800px;
    padding-top: 40px;
}
</style>
