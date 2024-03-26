

<template>
<div class="meeting-list">
  <list-item v-for="(item, index) in dataList" :key="index" :item-data="item"/>
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
          title:'产品需求评审会议20240301',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:1,
        },
        {
          title:'会议名称评审会议',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:2,
        },
        {
          title:'评审会议',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:3,
        },
        {
          title:'产品需求评审会议',
          time:'2024-03-12 16:00',
          name:'王小明',
          number:'134556789',
          status:1,
        },
        {
          title:'产品需求评审会议',
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
