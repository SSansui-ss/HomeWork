<template>
  <div>
    <div class="top">
      <p class="mb" v-for="(item,index) in this.$store.state.bread" :key="index">{{item.name}}</p>
    </div>
    <div class="content">
      <p>商品名称 <span>{{addlist.name}}</span></p>
      <p>商品描述 <span>{{addlist.subtitle}}</span></p>
      <p v-if="addlist.status == 1">当前状态 <span>在售</span></p>
      <p v-if="addlist.status == 2">当前状态 <span>已下架</span></p>
      <p>
        所属分类
        <span>
          <el-select v-model="oplist" size="small" placeholder="请选择">
            <el-option v-for="item in onelist" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </span>
        <span>
          <el-select size="small" v-model="oplist1" placeholder="请选择二级分类">

            <el-option v-for="item in twolist" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </span>
      </p>
      <p>商品价格
        <span>
          <el-input size="small" style="width:300px" placeholder="请输入内容" v-model="addlist.price">
            <template slot="append">元</template>
          </el-input>
        </span>
      </p>
      <p>商品价格
        <span>
          <el-input size="small" dis style="width:300px;" placeholder="请输入内容" v-model="addlist.stock">
            <template slot="append">件</template>
          </el-input>
        </span>
      </p>
      <p class="image">商品图片
        <span>
          <img :src="addlist.subImages" alt="">
        </span>
      </p>
      <p class="txt">
        商品详情
        <span v-html="addlist.detail"></span>
      </p>
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
      oplist: '请选择二级分类',
      oplist1: '请选择二级分类',
      addlist: {},
      twolist: {},
      onelist: {},
    }
  },
  mounted() {
    this._id = this.$route.query.id
    this.sqw()
  },
  // 组件方法
  methods: {
    async sqw() {
      let res = await this.$axios.ShopList(this._id)
      this.addlist = res.data
      this.$axios.ShopListID(res.data.categoryId).then((res) => {
        this.twolist = res.data
      })
      this.$axios.ShopListID(0).then((res) => {
        this.onelist = res.data
        console.log(this.onelist)
      })
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
.txt{
  display: flex;
  img{
    padding: 2px;
      width: 60px;
      height: 60px; 
  }
}
</style>
