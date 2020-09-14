<template>
    <div>
      
        <el-aside width="200px">
            <!-- aside -->
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="uniqueopened"
            @open="handleOpen" @close="handleClose" :collapse="isCollapse"
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
            isCollapse: true
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

</style>
