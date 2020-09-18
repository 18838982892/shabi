<template>
    <div>
        <el-aside :width="isCollapse ? '65px':'200px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="uniqueopened"
            @open="handleOpen" @close="handleClose" :collapse="isCollapse"
            collapse-transition="false"
          >
            <el-submenu :index="item.id+'' " v-for="item in list" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.authName }}</span>
              </template>
              <el-menu-item-group v-for="item1 in item.children" :key="item1.id">
                <el-menu-item  @click="router(item1.path)">{{ item1.authName }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            
          </el-menu>
        </el-aside>

    </div>
</template>
<script>

import req from "../request/aside"
export default {
    props: {

    },
    data() {
        return {
            list:[],
            uniqueopened:true,
            isCollapse: false
        };
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
      },
      //点击按钮  切换菜单
      toggleCollapse(){
          this.isCollapse = ! this.isCollapse
      }
    },
    components: {

    },
    mounted() {
      req().then((res)=>{
        console.log(res.data)
        this.list = res.data
      })
    },
};
</script>

<style scoped lang="less">
 .el-container{
    height: 100%;
    .Aside{
      height:100%;
    }
    .toggle-button{
      background-color: #4A5064;
      line-height: 24px;
      height:24px;
      text-align: center;
      letter-spacing: 0.2em;
      cursor: pointer;
      color:white;
    }
}

.home{
  height:100px;
}
</style>
