<template>
<div class="home">
  <el-container>
    <!-- 头 -->
    <el-header class="header">
      <h1>电商后台管理系统</h1>
      <button class="btn">退出</button>
    </el-header>
    <!-- 边 -->
    <el-container>
      <el-aside width="200px">
        <!-- 菜单 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="black"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-s-goods"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-tickets"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-data-line"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</div>
</template>


<script>
export default {
  props: {},
  data() {
    return {
      list:[],
      uniqueopened:true,
      isCollapse:true
    }
  },
  methods: {
    router(v){
      this.$router.push("/home/"+v);
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  components: {},
  mounted() {
    this.axios({
      url:"/sliderbar",
      method:"get",     
      params:{
        token:sessionStorage.getItem("token")
      }
    }).then((res)=>{
      // console.log(res);
      this.list = res.list
      // console.log(this.list)
    })
  },
};
</script>

<style scoped lang="less">

.home{
  height:100%;
  .header{
    background-color:black;
    color:white;
    display: flex;
    align-items: center;
    justify-content: space-between;
      .btn{
        padding:10px 20px;
        color:white;
        background-color: #909399;
        border:none;
      }
  }

  .el-container{
        height: 100%;
        .el-menu{
          height:100%;
        }
    }
}
</style>

