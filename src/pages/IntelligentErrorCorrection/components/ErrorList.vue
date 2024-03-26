<template>
  <div class="error-list">
    <list-item @getList="getData" v-for="(item, index) in dataList" :key="index" :item-data="item" />
  </div>
</template>
<script>
import ListItem from "./listItem.vue";
// import { getMeetingList } from '@/api/SmartMeeting'

export default {
  name: "ErrorList",
  components: { ListItem },
  data() {
    return {
      dataList: [
        {
          title: "产品需求评审会议",
          time: "2024-03-12 16:00",
          name: "王小明",
          number: "134556789",
          status: 1,
        },
        {
          title: "会议名称评审会议",
          time: "2024-03-12 16:00",
          name: "王小明",
          number: "134556789",
          status: 2,
        },
        {
          title: "评审会议",
          time: "2024-03-12 16:00",
          name: "王小明",
          number: "134556789",
          status: 3,
        },
        {
          title: "产品需求评审会议",
          time: "2024-03-12 16:00",
          name: "王小明",
          number: "134556789",
          status: 1,
        },
        {
          title: "产品需求评审会议",
          time: "2024-03-12 16:00",
          name: "王小明",
          number: "134556789",
          status: 1,
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
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // getMeetingList().then(res => {
      //   this.dataList = res.rows.map(i => {
      //     return {
      //       title: i.meetingname,
      //       time: i.starttime,
      //       name: i.createBy|| '--',
      //       number: i.roomid,
      //       status: i.status,
      //       meetingid: i.meetingid,
      //     }
      //   })
      // })
    }
  }
};
</script>
<style scoped>
.error-list {
  max-height: calc(100% - 100px);
  overflow-y: auto;
  scrollbar-width: thin;
}
</style>
