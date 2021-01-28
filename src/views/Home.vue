<template>
  <div class="box">
    <el-container>
      <el-header>
        <p>MMALL ADMIN</p>
        <p>欢迎，<span>admin</span>
          <el-button @click="out">退出</el-button>
        </p>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu class="el-menu-vertical-demo" router background-color="#f8f8f8" text-color="#337AB7" active-text-color="#23527C">
            <el-menu-item index="/home">
              <i class="el-icon-odometer"></i>
              <span slot="title">Hello</span>
            </el-menu-item>
            <el-submenu>
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>商品</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/shopAdmin">商品管理</el-menu-item>
                <el-menu-item index="/classAdmin">品类管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu>
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>订单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/orderAdmin">订单管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    out(){
      this.$axios.logout().then(res=>{
        if(res.status == 0){
          this.$message.success('退出成功')
          this.$router.push('/login')
        }
      })
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
  .el-header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f8f8;
    .el-button {
      background: #f8f8f8;
      border: none;
      color: blue;
    }
  }
  .el-aside {
    width: 200px !important;
    height: 100%;
    .el-menu {
      width: 200px;
      height: 100%;
    }
  }
  .el-main {
    width: 100%;
    height: 100%;
  }
}

</style>

