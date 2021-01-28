<template>
  <div class="box">
     <p v-for="(item,index) in this.$store.state.bread" :key="index">{{item.name}}</p>
    <p>Welcome</p>
  </div>
</template>
<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件状态值
  data() {
    return {}
  },
  mounted() {},
  // 组件方法
  methods: {},
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
}
</script> 

<style  lang="scss" scoped>
p:nth-of-type(1){
      line-height: 40px;
      font-size: 26px;
      color: #666666;
      padding-bottom: 3px;
      width: 100%;
      border-bottom: 1px solid #cebfbf;
    }
  p:nth-of-type(2){
    margin-top: 15px;
    color: #666666;
  }
</style>
