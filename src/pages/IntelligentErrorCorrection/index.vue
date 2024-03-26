

<template>
<div class="smart-meeting">
  <Left/>
<!--  <Center/>-->
<!--  <Right/>-->
</div>
</template>
<script>
import Left from "./components/left.vue";
// import Center from "./components/center.vue";
// import Right from "./components/right.vue";

export default {
  // name: "SmartMeeting",
  components: {
    // Right,
    Left,
    // Center
  }
}
</script>
<style scoped>
.smart-meeting {
  //width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
