
<template>
<div class="list-item">
  <div class="title">{{itemData.title}}</div>
  <div class="detail">
    <div class="detail-left">
      <div class="time">{{itemData.time}}</div>
      <div class="name-number">
        发起人：{{itemData.name}} &nbsp;&nbsp;会议号：{{itemData.number}}
      </div>
    </div>
    <div class="detail-right" :style="{color: statusToColor[itemData.status]}">
      <i class="el-icon-s-opportunity"></i> &nbsp;{{statusToName[itemData.status]}}
    </div>
  </div>
  <div class="close">
    <i class="el-icon-close"></i>
  </div>
</div>
</template>
<script>
export default {
  name: "listItem",
  props: {
    itemData: Object
  },
  data() {
    return {
      statusToName: {
        '1': '进行中',
        '2': '未开始',
        '3': '已结束',
      },
      statusToColor: {
        '1': '#67C23A',
        '2': '#409EFF',
        '3': '#909399',
      }
    }
  },

}
</script>

<style lang="less" scoped>
.list-item {
  position: relative;
  padding: 12px 12px;
  border-radius: 5px;
  background: #f2f2f2;
  margin-top: 20px;
  &:hover {
    border: 1px solid #409EFF;
    .close {
      display: block;
    }
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .detail {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #808080;
    line-height: 18px;
    .detail-right {
      font-size: 14px;
    }
  }
  .close {
    display: none;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
}
</style>
