
<template>
<div class="left">
  <h3>会议列表</h3>
  <div class="btns">
    <el-button type="primary">新建会议</el-button>
    <el-button  type="primary">加入会议</el-button>
  </div>
  <MeetingList/>
</div>
</template>
<script>
import MeetingList from "./meetingList.vue";

export default {
  name: "left",
  components: {MeetingList}
}
</script>
<style lang="less" scoped>
.left {
  background: rgba(138, 154, 163, 0.2);
  height: 100%;
  width: 360px;
  border-radius: 6px;
  padding: 30px 20px;
  .btns {
    margin-top: 30px;
  }
}
</style>
