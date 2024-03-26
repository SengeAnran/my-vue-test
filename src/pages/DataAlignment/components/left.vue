

<template>
<div class="left">
  <div class="base-info">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="语料对齐">
        自动语料对齐
      </el-form-item>
      <el-form-item label="源语种">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option
            v-for="item in selectOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="目标语种">
        <el-select v-model="form.handWay" placeholder="请选择">
          <el-option
            v-for="item in selectOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="行业领域">
        <el-select v-model="form.hyLy" placeholder="请选择">
          <el-option
            v-for="item in selectOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="添加目标文件">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
  <div class="bottom-btns">
    <el-button type="primary" @click="onSubmit">开始处理</el-button>
    <el-button @click="resetForm">重置</el-button>
  </div>
</div>
</template>
<script>
export default {
  name: "left",
  data() {
    return {
      form: {
        name: '',
        region: '',
        handWay: [],
        hyLy: '',
      },
      selectOption: [
        {
          label: '中文简体',
          value: '1',
        },
        {
          label: '中文繁体',
          value: '2',
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          // this.reviewMethod(this.form);
          // addMeeting(this.from).then(res => {
          //   this.$message.success('创建成功！');
          //   this.$emit('getList');
          //   this.closeView();
          // })
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  }
}
</script>
<style lang="less" scoped>
.left {
  position: relative;
  background: rgba(138, 154, 163, 0.2);
  height: 100%;
  flex: 2;
  border-radius: 6px;
  margin: 0 20px;
  padding: 30px 60px;
  .base-info {
  }
  .bottom-btns {
    position: absolute;
    width: 100%;
    bottom: 40px;
    display: flex;
    justify-content: center;
    //margin-top: 30px;
  }
}
</style>
