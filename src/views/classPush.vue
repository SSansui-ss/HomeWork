<template>
  <div>
    <div class="top">
      <p class="mb" v-for="(item,index) in this.$store.state.bread" :key="index">{{item.name}}</p>
    </div>
    <div class="content">
      
      <p>
        所属品类
        <span>
          <el-select v-model="text" size="small" @change="Xia" placeholder="请选择">
            <el-option  label="/所有" value="0">
            </el-option>
            <el-option v-for="item in addlist" :key="item.id" :label="'/所有/'+item.name" :value="item.id">
            </el-option>
          </el-select>
        </span>
      </p>
      <p>品类名称
        <span>
          <el-input size="small" style="width:400px" placeholder="请输入品类名称" v-model="txt">
          </el-input>
        </span>
      </p>
      <el-button style="margin-left:90px" type="primary" size="small"  @click="GoPush">提交</el-button>
      
    </div>
  </div>
</template>
<script>
export default {
  // 组件状态值
  data() {
    return {
      addlist:{},
      txt:'',
      text:'',
      _id:'0'
    }
  },
  mounted() {
    this.sqw()
  },
  // 组件方法
  methods: {
    async sqw() {
      let res = await this.$axios.Class(0)
      console.log(res);
      this.addlist = res.data
    },
    async GoPush(){
      let res = await this.$axios.ClassP(this._id,this.txt)
      if(res.status == 0){
        this.$message.success(res.data)
        this.$router.push('/classAdmin')
      }
    },
    Xia(ind){
      console.log(ind);
      this._id = ind
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
}
.editor {
  height: 230px;
  width: 90%;
  // min-height: 400px;
}
</style>
