<template>

  <div class="wrapper">
    <table class="items"><tr>
      <th>No</th>
      <th>Date</th>
      <th>Category</th>
      <th>Value</th>
    </tr>
      <tr v-for="item in $store.getters.getPaymentsList[`page${$store.getters.getPage}`]"
          :key='item.id' >
        <td>{{ item.id }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>

      </tr>
    </table>

  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
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