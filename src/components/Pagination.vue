<template>
  <div class="wrapper">
    <Pages class="pageNum" v-for="page in $store.getters.getPages " :key="page" :page="page"/>
    </div>
</template>

<script>
import Pages from "./Pages";
export default {
  name: "Pagination",
  components: {
    Pages
  },
}
</script>

<style scoped>
.wrapper {
  margin-top: 30px;
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
}
.pageNum {
  margin: 8px
}
</style>