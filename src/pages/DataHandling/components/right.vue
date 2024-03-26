
<template>
<div class="right">
  <h3>结果记录</h3>
  <div class="btns">
    <el-button type="primary">导出</el-button>
    <el-button  type="primary">语料分析</el-button>
    <el-button  type="danger">删除</el-button>
  </div>
  <List/>
</div>
</template>
<script>
import List from "./list.vue";

export default {
  name: "right",
  components: {List}
}
</script>
<style lang="less" scoped>
.right {
  background: rgba(138, 154, 163, 0.2);
  height: 100%;
  width: 440px;
  border-radius: 6px;
  padding: 30px 20px;
  .btns {
    margin-top: 30px;
  }
}
</style>
