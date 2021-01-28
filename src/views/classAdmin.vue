<template>
  <div class="box">
    <div class="top">
      <p class="mb" v-for="(item,index) in this.$store.state.bread" :key="index">{{item.name}}</p>
      <el-button type="primary" size="small" icon="el-icon-plus">添加品类</el-button>
    </div>
    <p style="margin-top:15px">当前商品分类ID: 0</p>
    <el-table :data="addlist" stripe style="width: 100%;margin-top:10px;" border>
      <el-table-column prop="id" label="品类ID" width="180">
      </el-table-column>
      <el-table-column prop="name" label="品类名称" width="580">
      </el-table-column>
      
      <el-table-column label="操作">
        <template>
          <el-button type="warning" size="mini" icon="el-icon-thumb">修改名称</el-button>
          <el-button type="warning" size="mini" icon="el-icon-edit">查看其子分类</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件状态值
  data() {
    return {
      addlist: [],
    }
  },
  mounted() {
    this.sqw()
  },
  // 组件方法
  methods: {
    async sqw() {
      let num = 0
      let res = await this.$axios.Class(num)
      this.addlist = res.data
      console.log(res)
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
}
</script> 

<style lang="scss" scoped>
.mb {
  line-height: 40px;
  font-size: 26px;
  color: #666666;
  padding-bottom: 3px;
  width: 100%;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cebfbf;
}
</style>
