<template>
    <div>
        <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户列表</el-breadcrumb-item>
                </el-breadcrumb>
          <router-view></router-view>
        </el-main>
    </div>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
    },
};
</script>

<style scoped lang="less">

</style>
