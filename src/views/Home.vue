<template>
  <div class="home">
      <el-container>
        <el-header>
          <el-menu>后台管理系统</el-menu>
        </el-header>
        <!-- 头部 -->
        <!-- <Head></Head> -->
        <el-container>
            <Aside></Aside>
            
            <Main></Main>
        </el-container>
      </el-container>

  </div>
</template>

<script>

import Aside from "./aside"
import Main from "./main"
export default {
  props: {},
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    Aside,
    Main
  },
  mounted() {
   
  },
};
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
.el-header{
  .el-menu{
    background-color: #545C64;
    color: white;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
  }
    
}
</style>

