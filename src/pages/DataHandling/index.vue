<script>
import Left from "./components/left.vue";
import Right from "./components/right.vue";

export default {
  name: "DataHandling",
  components: {Right, Left}
}
</script>

<template>
<div class="smart-meeting">
  <Left/>
  <Right/>

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
