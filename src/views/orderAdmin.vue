<template>
  <div class="box">
    <div class="top">
      <p class="mb" v-for="(item,index) in this.$store.state.bread" :key="index">{{item.name}}</p>

    </div>
    <el-form :inline='true' style="margin-top:15px">
      <el-select size="small" style="width:150px" v-model="value" :placeholder="options[0].label">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="关键字"  v-model="txt" style="width:200px;margin-left:7px;" size="small"></el-input>
      <el-button size="small" style="margin-left:7px;" @click="go">查询</el-button>
    </el-form>
    <el-table :data="addlist" stripe style="width: 100%;margin-top:10px;" border>
      <el-table-column  label="订单号" width="180">
        <template slot-scope="scope">
          <a @click="$router.push(`/orderAdmin/detail?id=${scope.row.orderNo}`)">{{scope.row.orderNo}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="receiverName" label="收件人" width="180">
      </el-table-column>
      <el-table-column prop="statusDesc" label="订单状态">
      </el-table-column>
      <el-table-column label="订单总价">
        <template slot-scope="scope">
          <p>￥{{scope.row.payment}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="warning" icon="el-icon-thumb" @click="$router.push(`/orderAdmin/detail?id=${scope.row.orderNo}`)">查看</el-button>
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
          label: '按订单号查询',
        },
      ],
      value: '',
      addlist: [],
      txt:'',
      total: '',
      pagenum: 1,
      pagesize: 10,
    }
  },
  mounted() {
    this.sqw()
  },
  // 组件方法
  methods: {
    async sqw() {
      let num = this.pagenum
      let res = await this.$axios.order(num)
      this.addlist = res.data.list
      this.total = res.data.total
      console.log(res)
    },
    handleSizeChange(s) {
      this.pagesize = s
      this.sqw()
    },
    handleCurrentChange(n) {
      this.pagenum = n
      this.sqw()
    },
    async go(){
      let res = await this.$axios.orderSe(this.txt)
      console.log(res);
      if(res.status == 1){
        this.$message.success(res.msg)
      }else{
        this.addlist = res.data.list 
      }
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
a{
  cursor: pointer;
  color: blue;
}
</style>
