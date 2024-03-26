

<template>
<div class="meeting-list">
  <div style="margin: 10px 0;"></div>
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <el-checkbox-group v-model="checkedOption" @change="handleCheckedOptionChange">
    <el-checkbox v-for="(item, index) in dataList" :label="item" :key="index">
      <list-item :item-data="item"/>
    </el-checkbox>
  </el-checkbox-group>
</div>
</template>
<script>
import ListItem from "./listItem.vue";

export default {
  name: "meetingList",
  components: {ListItem},
  data() {
    return {
      dataList: [
        {
          title:'20240301',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:1,
        },
        {
          title:'20240301',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:2,
        },
        {
          title:'20240301',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:3,
        },
        {
          title:'20240301',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:1,
        },
        {
          title:'20240301',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:1,
        },
        // {
        //   title:'产品需求评审会议',
        //   time:'2024-03-12 16:00',
        //   name:'王小明',
        //   number:'134556789',
        //   status:1,
        // },
        // {
        //   title:'产品需求评审会议',
        //   time:'2024-03-12 16:00',
        //   name:'王小明',
        //   number:'134556789',
        //   status:1,
        // },
      ],
      isIndeterminate: true,
      checkAll: false,
      checkedOption: [],
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedOption = val ? this.dataList : [];
      this.isIndeterminate = false;
    },
    handleCheckedOptionChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.dataList.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.dataList.length;
    }
  }
}
</script>
<style lang="less" scoped>
.meeting-list {
  max-height: calc(100% - 100px);
  overflow-y: auto;
}
</style>
