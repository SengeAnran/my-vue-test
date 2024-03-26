<template>
  <el-dialog
    v-if="dialogVisible"
    :title="titleText"
    :visible="dialogVisible"
    width="450px"
    @close="closeView"
    :close-on-click-modal="false"
  >
    <audio class="audio" src="#" controls></audio>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeView">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addMeeting, genarateMeetingId } from '@/api/SmartMeeting'
export default {
  name: "MeetingDetailDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    reviewMethod: {
      type: Function
    },
    // 弹窗标题
    titleText: {
      type: String,
      default: "新增"
    },
    // form: {
    //   type: Object,
    //   default: {
    //     meetingname: undefined,
    //     orderNum: 0
    //   }
    // }
  },
  data() {
    return {
      modelOptions: [
        {
          value: "选项1",
          label: "中文会议识别模式",
        },
      ],
      abstractModellOptions: [
        {
          value: "选项1",
          label: "中文会议识别模式",
        },
      ],
      from: {
        meetingname: '产品会议',
        link: 'http://www.baidu.com/154122',
        model: '选项1',
      }
    };
  },
  mounted() {
    // this.initData();
  },
  methods: {
    initData() {
      genarateMeetingId().then(res => {
        this.from.roomid = res.data;
      })
    },
    closeView() {
      this.$emit("update:dialogVisible", false);
    },
    //  复制会议号
    copeCode() {
      navigator.clipboard.writeText(this.from.roomid);
    },
  }
};
</script>
<style lang="scss" scoped>
.audio {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
