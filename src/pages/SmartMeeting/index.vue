<script>
import Left from "./components/left.vue";
import Center from "./components/center.vue";
import Right from "./components/right.vue";

export default {
  name: "SmartMeeting",
  components: {Right, Left, Center}
}
</script>

<template>
<div class="smart-meeting">

  <Center/>
  <Left/>
<!--  <Right/>-->
</div>
</template>

<style scoped>
.smart-meeting {
  //width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
