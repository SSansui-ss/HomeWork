<template>
  <div>
    <div class="top">
      <p class="mb" v-for="(item,index) in this.$store.state.bread" :key="index">{{item.name}}</p>
    </div>
    <div class="content">
      <p>订  &nbsp;单&nbsp;  号 <span> {{addlist.orderNo}}</span></p>
      <p>创建时间 <span>{{addlist.createTime}}</span></p>
      <p>收 &nbsp;件&nbsp; 人 <span> {{addlist.shippingVo.receiverName}}, {{addlist.shippingVo.receiverCity}}{{addlist.shippingVo.receiverProvince}}, {{addlist.shippingVo.receiverAddress}}</span></p>
      <p>订单状态 <span>{{addlist.statusDesc}}</span></p>
      <p>支付方式 <span>{{addlist.paymentTypeDesc}}</span></p>
      <p>订单金额 <span>￥{{addlist.payment}}</span></p>
      <table  cellspacing="0">
        <tr>
          <th>商品图片</th>
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>合计</th>
        </tr>
        <tr>
          <td>
            <img style="width:40px;height:40px;" :src="addlist.orderItemVoList[0].productImage" alt="">
          </td>
          <td>{{addlist.orderItemVoList[0].productName}}</td>
          <td>￥{{addlist.orderItemVoList[0].currentUnitPrice}}</td>
          <td>{{addlist.orderItemVoList[0].quantity}}</td>
          <td>￥{{addlist.orderItemVoList[0].totalPrice}}</td>
         </tr>
      </table>
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
      _id: '',
      addlist: {},
    }
  },
  mounted() {
    this._id = this.$route.query.id

    this.sqw()
  },
  // 组件方法
  methods: {
    async sqw() {
      let res = await this.$axios.orderGo(this._id)
      this.addlist = res.data
    },
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
}
</script> 

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cebfbf;
}
.mb {
  line-height: 40px;
  font-size: 26px;
  color: #666666;
  padding-bottom: 3px;
  width: 100%;
}
.content {
  width: 100%;
  height: 100%;
  padding: 30px 0 0 120px;
  p {
    font-weight: bold;
    margin-bottom: 25px;
    span {
      font-weight: initial;
      margin-left: 25px;
    }
  }
}
.image {
  width: 100%;
  display: flex;
  span {
    width: 60px;
    height: 60px;
    border: 1px solid #eeeeee;
    img {
      padding: 2px;
      width: 60px;
      height: 60px;
    }
  }
}
.txt {
  display: flex;
  img {
    padding: 2px;
    width: 60px;
    height: 60px;
  }
}
table{
  width: 100%;
  tr,th,td{
    text-align: center;
    border: 1px solid #eeeeee;
    padding: 20px 10px;
  }
  tr:nth-of-type(even){
    background: #f0f0f0;
  }
}
</style>
