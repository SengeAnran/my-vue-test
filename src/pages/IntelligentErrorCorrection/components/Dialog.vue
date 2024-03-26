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
      ref="courseForm"
      :model="courseForm"
      :rules="singleRules"
      label-width="110px"
      class="templateForm"
    >
      <el-form-item label="课程名称" prop="colName">
        <el-input v-model="courseForm.colName" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="序号" prop="orderNum">
        <el-input-number
          v-model="courseForm.orderNum"
          controls-position="right"
          :min="0"
        ></el-input-number>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeView">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "AddCourseDialog",
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
    courseForm: {
      type: Object,
      default: {
        colName: undefined,
        orderNum: 0
      }
    }
  },
  data() {
    return {
      // 表单校验
      courseRules: {
        colName: [
          { required: true, message: "课程名称不能为空", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    closeView() {
      this.resetCourse();
      this.$emit("update:dialogVisible", false);
    },
    resetCourse() {
      this.courseForm = {
        colName: undefined,
        orderNum: 0
      };
      this.resetForm("courseForm");
    },
    onSubmit() {
      this.$refs["courseForm"].validate(valid => {
        if (valid) {
          this.reviewMethod(this.courseForm);
        }
      });
    }
  }
};
</script>
