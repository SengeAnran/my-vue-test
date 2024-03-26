<template>
  <div class="left">
    <h3>错误列表</h3>
    <div class="btns">
      <el-button type="primary" @click="makeCorrections">一键更正</el-button>
    </div>
    <ErrorList ref="meetingList" />
  </div>
</template>
<script>
import ErrorList from "./ErrorList.vue";

export default {
  name: "left",
  data() {
    return {
      dialogVisible: false,
      joinDialogVisible: false,
    }
  },
  components: { ErrorList },
  methods:{
    // getList() {
    //   this.$refs.meetingList.getData();
    // }
    //  一键更正
    makeCorrections() {

    },
  }
};
</script>
<style lang="less" scoped>
.left {
  background: rgba(138, 154, 163, 0.2);
  height: 100%;
  width: 360px;
  border-radius: 6px;
  padding: 30px 20px;
  .btns {
    //margin-top: 30px;
    margin-bottom: 10px;
    text-align: right;
  }
}
</style>
