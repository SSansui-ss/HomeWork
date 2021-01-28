<template>
  <div class="box">
    <div class="top">
      <p class="mb" v-for="(item,index) in this.$store.state.bread" :key="index">{{item.name}}</p>
      <el-button type="primary" size="small" icon="el-icon-plus">添加商品</el-button>
    </div>
    <el-form :inline='true' style="margin-top:15px">
      <el-select size="small" style="width:150px" v-model="value" :placeholder="options[0].label">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="关键字" style="width:200px;margin-left:7px;" size="small"></el-input>
      <el-button size="small" style="margin-left:7px;">查询</el-button>
    </el-form>
    <el-table :data="addlist" stripe style="width: 100%;margin-top:10px;" border>
      <el-table-column prop="id" label="id" width="180">
      </el-table-column>
      <el-table-column  label="信息" width="180">
        <template slot-scope="scope">
            <p>{{scope.row.name}}</p>
            <p>{{scope.row.subtitle}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <p v-if="scope.row.status == 1">在售<span>
              <el-button type="warning" style="margin-left:2px;" size="mini">下架</el-button>
            </span></p>
          <p v-if="scope.row.status == 2">已下架<span>
              <el-button type="warning" style="margin-left:2px;" size="mini">上架</el-button>
            </span></p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="warning" icon="el-icon-thumb"></el-button>
          <el-button type="warning" icon="el-icon-edit"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum" :page-sizes="[10, 15, 20, 30]" :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件状态值
  data() {
    return {
      options: [
        {
          value: '1',
          label: '按商品id查找',
        },
        {
          value: '2',
          label: '按商品名称查找',
        },
      ],
      value: '',
      addlist: [],
      total: '',
      pagenum:1,
      pagesize:10
    }
  },
  mounted() {
    this.sqw()
  },
  // 组件方法
  methods: {
    async sqw() {
      let num = this.pagenum
      let res = await this.$axios.list(num)
      console.log(res)
      this.total = res.data.total
      this.addlist = res.data.list
    },
    handleSizeChange(n) {
      console.log(n)
    },
    handleCurrentChange(s) {
      console.log(s)
    },
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
