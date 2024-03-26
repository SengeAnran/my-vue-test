<template>
  <div class="list-item">
    <div class="item-left">
      <div class="detail">
        <div class="detail-left">
          错处：<span style="color: red">{{itemData.name}}</span>
        </div>
        <div class="detail-right">
          类型：{{statusToName[itemData.status]}}
        </div>
      </div>
      <div class="">
        正确：{{itemData.title}}
      </div>
    </div>
    <div class="item-right">
      <div> <el-link type="primary" >更正</el-link></div>
      <div> <el-link >忽略</el-link></div>
    </div>

  </div>
</template>
<script>
// import { deleteMeeting } from '@/api/SmartMeeting'

export default {
  name: "listItem",
  props: {
    itemData: Object,
  },
  data() {
    return {
      statusToName: {
        1: "文本纠错",
        0: "标点纠错",
        2: "已结束",
      },
      statusToColor: {
        1: "#67C23A",
        0: "#409EFF",
        2: "#909399",
      },
    };
  },
  methods: {
    deleteMeeting(meetingid) {
      this.$confirm('删除会议后所有该会议相关数据都会从系统中删除，确定删除?', '删除会议', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // deleteMeeting(meetingid).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
        //   this.$emit('getList');
        // })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.list-item {
  display: flex;

  justify-content: space-between;
  margin-top: 20px;
  .item-left {
    flex: 1;
    padding: 12px 12px;
    margin-right: 30px;
    border-radius: 5px;
    background: #f2f2f2;
    &:hover {
      border: 1px solid #409eff;
    }
    .detail {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #808080;
      line-height: 18px;
      margin-bottom: 10px;
      //.detail-right {
      //  font-size: 14px;
      //}
    }
  }
  .item-right {
    align-self: center;
    margin-right: 5px;
  }
}
</style>
