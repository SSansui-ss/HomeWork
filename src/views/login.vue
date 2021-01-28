<template>
  <div class="box">
    <div class="content">
      <p>请登录</p>
      <el-form :model="addlist" :rules="rules">
        <el-form-item prop="username">
          <el-input placeholder="User Name" v-model="addlist.username" size="normal" suffix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="Password" v-model="addlist.password" type="password" suffix-icon="el-icon-warning-outline" size="normal"></el-input>
        </el-form-item>
        <el-button type="primary" @click="Log">Login</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件状态值
  data() {
    return {
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      addlist: {
        username: '',
        password: '',
      },
    }
  },
  mounted() {},
  // 组件方法
  methods: {
    async Log() {
      let res = await this.$axios.login({
        username: this.addlist.username,
        password: this.addlist.password,
      })
      console.log(res)
      if (res.msg == '登录成功') {
        this.$message.success(res.msg)
        sessionStorage.setItem('user', res.data)
        this.$router.push('/')
      } else {
        this.$message.error(res.msg)
      }
    },
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
}
</script> 

<style lang="scss"  scoped>
.box {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 450px;
  background: #fff;
  border: 1px solid #ddcdcd;
  border-radius: 8px;
  p {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    background: #f5f5f5;
  }
  .el-button {
    width: 100%;
  }
  .el-form {
    width: 100%;
    padding: 20px 20px;
  }
}
</style>
