<template>
  <div id="welcome_div">
    <h1>{{ welcomemsg }}</h1>
  </div>
</template>

<script setup>
defineProps(["welcomemsg"]);
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3rem;
}
#welcome_div {
  display: flex;

  height: 200px;
  justify-content: center;
  border-bottom: solid 1px black;
  align-items: center;
  color: rgb(54, 126, 89);
}
</style>
