<template>
  <div class="login">
    <div class="loginForm">
       <h1>后台管理系统</h1>
      <el-form
      :rules="rules"
      ref="loginfrom"
      :label-position="labelPosition" label-width="80px" :model="userinfo">
        <el-form-item label="用户名" prop="name">
          <el-input placeholder="请输入用户名" v-model="userinfo.name" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="userinfo.password" show-password ></el-input>
        </el-form-item>
        <el-button type="primary" @click="open2('loginfrom')" class="deng">登录</el-button>
      </el-form>
     </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      labelPosition: "right",
      userinfo: {
        name: "admin",
        password: "123456",
      },
      rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    open2(v) {
        this.$refs[v].validate((valid) => {
          if (valid) {
            //登录成功
            this.axios({
                url:"/login",
                method:"post",
                data:{
                    username:this.userinfo.name,
                    password:this.userinfo.password
                }
            }).then((res) => {
                // console.log(res)
                if( res.meta.status==200){
                    this.$message({
                        message: '登陆成功',
                        type: 'success',
                        duration:1000,
                        //执行完毕后得延迟
                        onClose:()=>{
                            //把token值 保存在本地
                            sessionStorage.setItem('token',res.token)
                            this.$router.push("/home")
                        }
                    });
                    
                }else if( res.status==400){
                    this.$message({
                        message: res.msg,
                        type: 'warning'
                    });
                }
            })
            

          } else {
            console.log('error submit!!');
            return false;
          }
        });
     },
 
       
  },
  components: {},
};
</script>

<style scoped lang="less">
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#2d3a4b;
  .loginForm{
    width:50%;
    background-color:gainsboro;
    padding:30px;
    border-radius:10px;
    text-align:center;
    width:400px;
    h1{
      text-align: center;
      color:#2d3a4b;
      margin-bottom: 5px;
    }
  }
  .deng {
    width: 100%;
  }
}
</style>
