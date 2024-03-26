

<template>
<div class="center">
  <div class="base-info">
    <div class="top-line">
      <div class="top-line-left">
        <div class="title">产品需求评审会议20240301</div>
        <div class="number">会议号：123456789</div>
      </div>
      <div class="top-line-right">
        识别模型：
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="bottom-line">
      <div class="bottom-line-left">
        进行中 &nbsp;
        <el-button type="success" class="time" >
          <i class="el-icon-video-pause"></i> 00:10:10
        </el-button>
      </div>
      <div class="bottom-line-right">
        <el-button type="primary">分享</el-button>
        <el-button type="danger">结束会议</el-button>
      </div>
    </div>
  </div>
  <div class="content">
    {{detailInfo.content}}
    <div class="mic">
      麦克风 <el-switch
        v-model="useMic"
        active-color="#409EFF"
        inactive-color="#909399"
       >
    </el-switch>

    </div>
    <div class="save-time">已于 16：21 保存</div>
  </div>
  <div class="bottom-btns">
    <el-button type="primary">会议过程详情</el-button>
    <el-button type="primary">生成会议纪要</el-button>
  </div>
</div>
</template>
<script>
export default {
  name: "center",
  data() {
    return {
      options: [
          {
        value: '选项1',
        label: '中文会议识别模式'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '选项1',
      detailInfo: {
        content: 'mic001:这是会议说话内容的例子，黑字为已识别的内容，支持即时修改，装甲车，具有装甲防护的各种履带或轮式军用车辆，是装有装甲的军用或警用车辆的统称。坦克也是装甲车，属于履带式装甲车辆的一种，但是在习惯上通常因作战用途另外独立分类，而装甲车辆多半是指防护力与火力较坦克弱的车种，mic002:装甲车的特性为具有高度的越野机动性能，有一定的防护和火力作用，分为履带式和轮式两种，一般装备一至两门中小口径火炮及数挺机枪，一些还装有反坦克导弹，结构以装甲车体、武器系统、动力装置等组成。mic003:支持实时编辑，原会议系统，通过会议结束，暂停等进行音频切分和保存。为实现按句回听及实时编辑，改动逻辑点:在音频切分时对整段音频及识别结果保存的同时，实现按句保存音频和识别文本。此处单句定义，为未尾有标点持实时编辑。原会议系统，通过会议结束、暂停等进行音频切分和保存。为实现按句回听及实时编辑，，改动逻辑点:在音频切分时对整段育频及识别结果保存的同时，这是一段实时编译状态中的话，用蓝色字体表示，已编译的整段文本支持实时修改'
      },
      useMic: true,
    }
  }
}
</script>
<style lang="less" scoped>
.center {
  background: rgba(138, 154, 163, 0.2);
  height: 100%;
  flex: 2;
  border-radius: 6px;
  margin: 0 20px;
  padding: 30px 20px;
  .base-info {
    .top-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .top-line-left{
        display: flex;
        .title {
          font-size: 16px;
          font-weight: bold;
          margin-right: 20px;

        }
        .number{
          font-size: 12px;
          color: #808080;
        }
      }
      .top-line-right {

      }
    }
    .bottom-line {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-line-left {
        color: #67C23A;
      }
    }
  }
  .content {
    position: relative;
    height: calc(100% - 180px);
    border-radius: 5px;
    background: white;
    padding: 30px 20px;
    overflow-y: auto;
    .mic {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }
    .save-time {
      position: absolute;
      bottom: 20px;
      right: 20px;
      font-size: 14px;
      color: #808080;
    }
  }
  .bottom-btns {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}
</style>
