<template>
  <el-dialog
    v-if="dialogVisible"
    :title="titleText"
    :visible="dialogVisible"
    width="850px"
    @close="closeView"
    :close-on-click-modal="false"
  >
   <div class="top-btns">
     <el-button type="primary">导入</el-button>
     <el-button :disabled="!(selections.length > 0)" @click="exportData" type="primary">导出</el-button>
   </div>
    <el-table
      :data="tableData"
      @selection-change="selectionChange"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="50"
        align="center"
        fixed="left"
      ></el-table-column>
      <el-table-column
        label="序号"
        width="80"
        align="center"
        fixed="left"
      >
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="模板名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="备注">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
        align="center"
        fixed="right"
      >
        <template slot-scope="scope">
          <el-link type="primary" @click="uploadOne(scope.row)">下载</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link
            type="danger"
            @click.native="deleteItem(scope.row)"
          >删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeView">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addMeeting, genarateMeetingId } from '@/api/SmartMeeting'
export default {
  name: "ModelDialog",
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      selections: [],
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
    // 表格多选回调
    selectionChange(val) {
      this.selections = val;
      // this.$emit("selectionChange", val);
    },
    uploadOne(scope){
      console.log('下载', scope);
    },
    // 删除
    async deleteItem(item) {
      this.$confirm('确定要删除？', "提示", {
        type: "warning",
      }).then(async () => {
        this.loading = true;
        // try {
        //   let data = [item[this.idKey]];
        //   if (this.beforeDeleteMethod) {
        //     data = this.beforeDeleteMethod(item);
        //   }
        //   await this.deleteMethod(data);
        //   this.$notify.success("删除成功");
        //   await this.getItems();
        // } finally {
        //   this.loading = false;
        // }
      });
    },
    exportData() {
      console.log(this.selections)
    }
  }
};
</script>
<style lang="scss" scoped>
.top-btns {
margin-bottom: 20px;
}
</style>
