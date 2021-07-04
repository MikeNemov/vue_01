<template>
  <div class="wrapper">
    <table class="items"><tr>
      <th>No</th>
      <th>Date</th>
      <th>Category</th>
      <th>Value</th>
    </tr>
      <tr v-for="(item,idx) in items" :key="idx">
        <td>{{idx+1}}</td>
        <td>{{item.date}}</td>
        <td>{{item.category}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper{
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
}
</style>