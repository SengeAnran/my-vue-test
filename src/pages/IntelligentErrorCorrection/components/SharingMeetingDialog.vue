<template>
  <el-dialog
    v-if="dialogVisible"
    :title="titleText"
    :visible="dialogVisible"
    width="450px"
    @close="closeView"
    :close-on-click-modal="false"
  >
    <el-form
      ref="form"
      :model="from"
      label-width="110px"
      class="templateForm"
    >
      <el-form-item label="您的会议号为：">
        {{from.meetingname}}  <span style="margin-left: 20px; color: #00afff; cursor: pointer;" @click="copeCode">复制会议号</span>
      </el-form-item>
      <el-form-item label="会议连接为：">
        {{from.link}}  <span style="margin-left: 20px; color: #00afff; cursor: pointer;" @click="copeCode">复制连接</span>
      </el-form-item>
      <el-form-item prop="meetingname">
        <div>用户可<span style="font-weight: bold">在系统中直接输入会议号</span>或<span  style="font-weight: bold">访问会议链接</span>进入会议！</div>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeView">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addMeeting, genarateMeetingId } from '@/api/SmartMeeting'
import rule from "@/mixins/rule.js";
export default {
  name: "SharingMeetingDialog",
  mixins: [rule],
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
      this.resetCourse();
      this.$emit("update:dialogVisible", false);
    },
    resetCourse() {
      this.$refs.form.resetFields();
    },
    //  复制会议号
    copeCode() {
      navigator.clipboard.writeText(this.from.roomid);
    },
  }
};
</script>
