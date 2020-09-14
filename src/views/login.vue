<template>
  <div class="login">
    <el-form
      :rules="rules"
      ref="loginfrom"
      :label-position="labelPosition"
      label-width="80px"
      :model="userinfo"
    >
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="userinfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="userinfo.password" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="open2('loginfrom')">登录</el-button>
        <el-button type="warning" @click="open1">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import req from "../request/login";
export default {
  props: {},
  data() {
    return {
      labelPosition: "right",
      userinfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    open2(v) {
      this.$refs[v].validate((valid) => {
        if (valid) {
          //登录成功
          req( this.userinfo ).then((res) => {
            console.log(res);
            if (res.meta.status == 200) {
              this.$message({
                message: res.meta.msg,
                type: "success",
                duration: 1000,
                //执行完毕后得延迟
                onClose: () => {
                  //把token值 保存在本地
                  sessionStorage.setItem("token", res.data.token);
                  this.$router.push("/home");
                },
              });
              //失败
            } else if (res.meta.status == 400) {
              this.$message({
                message: res.meta.msg,
                type: "warning",
              });
            }
          });

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    open1:()=>{
      this.userinfo={
        username:"",
        password:""
      }
    }
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
  background-color: aquamarine;
}
</style>
