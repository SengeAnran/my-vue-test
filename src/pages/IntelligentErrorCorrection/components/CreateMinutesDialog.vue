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
      <el-form-item label="会议名称：" prop="meetingname">
        {{from.meetingname}}
      </el-form-item>
      <el-form-item label="模板：" :rules="rule.select" prop="meetingname">
        <el-select v-model="from.model" placeholder="请选择">
          <el-option v-for="item in modelOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="摘要模板：" :rules="rule.select" prop="meetingname">
        <el-select v-model="from.abstractModel" placeholder="请选择">
          <el-option v-for="item in abstractModellOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
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
  name: "CreateMinutesDialog",
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
