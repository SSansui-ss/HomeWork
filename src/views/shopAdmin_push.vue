<template>
  <div>
    <div class="top">
      <p class="mb" v-for="(item,index) in this.$store.state.bread" :key="index">{{item.name}}</p>
    </div>
    <div class="content">
      <p>商品名称
        <span>
          <el-input size="small" style="width:400px" placeholder="请输入商品名称" v-model="name">
          </el-input>
        </span>
      </p>
      <p>商品描述

        <span>
          <el-input size="small" style="width:400px" placeholder="请输入商品描述" v-model="subtitle">
          </el-input>
        </span>
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
          <el-input type="number" size="small" style="width:300px" placeholder="价格" v-model="price">
            <template slot="append">元</template>
          </el-input>
        </span>
      </p>
      <p>商品库存
        <span>
          <el-input type="number" size="small" dis style="width:300px;" placeholder="库存" v-model="stock">
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
        <span>
          <quill-editor class="editor" ref="myTextEditor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)"
            @change="onEditorChange($event)">
          </quill-editor>
        <el-button style="margin-top:80px" type="primary" size="small">提交</el-button>
        </span>
      </p>
      <p>
        <span>

        </span>
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
      name:'',
      subtitle:'',
      price:'',
      stock:'',
      _id: '',
      oplist: '请选择二级分类',
      oplist1: '请选择二级分类',
      addlist: {},
      twolist: {},
      onelist: {},
      content: null,
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
            ['blockquote', 'code-block'], // 引用  代码块
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
            [{ script: 'sub' }, { script: 'super' }], // 上标/下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            // [{'direction': 'rtl'}],                         // 文本方向
            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            [{ font: [] }], // 字体种类
            [{ align: [] }], // 对齐方式
            ['clean'], // 清除文本格式
            ['link', 'image', 'video'], // 链接、图片、视频
          ], //工具菜单栏配置
        },
        placeholder: '1568', //提示
        readyOnly: false, //是否只读
        theme: 'snow', //主题 snow/bubble
        syntax: true, //语法检测
      },
    }
  },
  mounted() {
    this._id = this.$route.query.id
    this.sqw()
  },
  // 组件方法
  methods: {
    async sqw() {
      
      this.$axios.ShopListID(0).then((res) => {
        this.onelist = res.data
        console.log(this.onelist)
      })
    },
    // 失去焦点
    onEditorBlur(editor) {},
    // 获得焦点
    onEditorFocus(editor) {},
    // 开始
    onEditorReady(editor) {},
    // 值发生变化
    onEditorChange(editor) {
      this.content = editor.html
      console.log(editor)
    },
  },
  // 计算属性
  computed: {
    editor() {
      return this.$refs.myTextEditor.quillEditor
    },
  },
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
