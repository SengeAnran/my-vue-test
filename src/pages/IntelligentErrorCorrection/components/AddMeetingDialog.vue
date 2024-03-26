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
      <el-form-item label="会议名称：" :rules="rule.input" prop="meetingname">
        <el-input :maxlength="40" v-model="from.meetingname" placeholder="40字符" />
      </el-form-item>
      <el-form-item label="开始时间" :rules="rule.select" prop="starttime">
        <el-date-picker
          v-model="from.starttime"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          placeholder="选择日期时间：">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="时长：" :rules="rule.input" prop="duration">
        <el-input-number
          v-model="from.duration"
          controls-position="right"
          :min="0"
        ></el-input-number> &nbsp;分钟
      </el-form-item>
      <el-form-item label="会议号：" prop="roomid">
        {{from.roomid}}
         <span style="margin-left: 20px; color: #00afff; cursor: pointer;" @click="copeCode">复制</span>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeView">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addMeeting, genarateMeetingId } from '@/api/SmartMeeting'
import rule from "@/mixins/rule.js";
export default {
  name: "AddMeetingDialog",
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
      default: "新增单元"
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
      // 表单校验
      courseRules: {
        meetingname: [
          { required: true, message: "课程名称不能为空", trigger: "blur" }
        ]
      },
      from: {
        meetingname: '',
        starttime: '',
        duration: '',
        roomid: undefined,
      }
    };
  },
  mounted() {
    this.initData();
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
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          // this.reviewMethod(this.form);
          addMeeting(this.from).then(res => {
            this.$message.success('创建成功！');
            this.$emit('getList');
            this.closeView();
          })
        }
      });
    },
    //  复制会议号
    copeCode() {
      navigator.clipboard.writeText(this.from.roomid);
    },
  }
};
</script>
