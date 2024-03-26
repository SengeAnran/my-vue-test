
<template>
<div class="list-item">
  <div class="title">任务编号：{{itemData.title}}</div>
  <div class="detail">

    <div class="detail-left">
      <div class="item over-ellipsis">时间：{{itemData.time}}</div>
      <div class="item over-ellipsis">
        清洗方法：{{itemData.name}}
      </div>
    </div>
    <div class="detail-right">
<!--      <i class="el-icon-s-opportunity"></i> &nbsp;{{statusToName[itemData.status]}}-->
      <div class="item over-ellipsis">语种：{{itemData.name}}</div>
      <div class="item over-ellipsis">
        行业领域：{{itemData.number}}
      </div>
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
.over-ellipsis {
  overflow: hidden;
  text-overflow:ellipsis;  // 当文本溢出包含元素时发生的事情
  white-space: nowrap;
}
.list-item {
  position: relative;
  padding: 12px 12px;
  border-radius: 5px;
  background: #f2f2f2;
  margin-top: 20px;
  width: 340px;
  &:hover {
    border: 1px solid #409EFF;
    //.close {
    //  display: block;
    //}
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .detail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #808080;
    line-height: 18px;
    .detail-left {
      width: 50%;
      //flex: 2;
    }
    .detail-right {
      //flex: 1;
      width: 40%;

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
