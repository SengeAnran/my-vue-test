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
      :model="form"
      label-width="110px"
      class="templateForm"
    >
      <el-form-item label="会议号：" :rules="rule.input" prop="roomid">
        <el-input-number :controls="false" v-model="form.roomid" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="麦克风：" prop="orderNum">
        <el-switch
          v-model="form.orderNum"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeView">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import rule from "@/mixins/rule.js";
export default {
  name: "JoinMeetingDialog",
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
  },
  data() {
    return {
      // 表单校验
      courseRules: {
        colName: [
          { required: true, message: "课程名称不能为空", trigger: "blur" }
        ]
      },
      form: {
        roomid: undefined,
        orderNum: false,
      }
    };
  },
  methods: {
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
          this.reviewMethod(this.form);
        }
      });
    }
  }
};
</script>
