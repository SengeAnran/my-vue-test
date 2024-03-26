

<template>
<div class="right">
  <h3>会议列表</h3>
  <div class="btns">
    <el-button type="primary">下载</el-button>
    <el-button  type="primary">复制</el-button>
    <el-button  type="primary">模板管理</el-button>
  </div>
  <div class="content">
    {{detailInfo.content}}
  </div>
</div>
</template>
<script>
export default {
  name: "right",
  data() {
    return {
      detailInfo: {
        content: 'mic001:这是会议说话内容的例子，黑字为已识别的内容，支持即时修改，装甲车，具有装甲防护的各种履带或轮式军用车辆，是装有装甲的军用或警用车辆的统称。坦克也是装甲车，属于履带式装甲车辆的一种，但是在习惯上通常因作战用途另外独立分类，而装甲车辆多半是指防护力与火力较坦克弱的车种，mic002:装甲车的特性为具有高度的越野机动性能，有一定的防护和火力作用，分为履带式和轮式两种，一般装备一至两门中小口径火炮及数挺机枪，一些还装有反坦克导弹，结构以装甲车体、武器系统、动力装置等组成。mic003:支持实时编辑，原会议系统，通过会议结束，暂停等进行音频切分和保存。为实现按句回听及实时编辑，改动逻辑点:在音频切分时对整段音频及识别结果保存的同时，实现按句保存音频和识别文本。此处单句定义，为未尾有标点持实时编辑。原会议系统，通过会议结束、暂停等进行音频切分和保存。为实现按句回听及实时编辑，，改动逻辑点:在音频切分时对整段育频及识别结果保存的同时，这是一段实时编译状态中的话，用蓝色字体表示，已编译的整段文本支持实时修改'
      },
    }
  }
}
</script>
<style scoped>
.right {
  background: rgba(138, 154, 163, 0.2);
  height: 100%;
  width: 360px;
  border-radius: 6px;
  padding: 30px 20px;
  .btns {
    margin-top: 30px;
    margin-bottom: 28px;
  }
  .content {
    height: calc(100% - 180px);
    border-radius: 5px;
    background: white;
    padding: 30px 20px;
    overflow-y: auto;
  }
}
</style>
