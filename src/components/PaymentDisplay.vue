<template>

  <div class="wrapper">
<!--    <table class="items"><tr>-->
<!--      <th>No</th>-->
<!--      <th>Date</th>-->
<!--      <th>Category</th>-->
<!--      <th>Value</th>-->
<!--    </tr>-->
      <div v-for="item in $store.getters.getPaymentsList"
          :key='item.id' :item="item" >
        {{item}}
<!--        <td>{{ item.id }}</td>-->
<!--        <td>{{ item.date }}</td>-->
<!--        <td>{{ item.category }}</td>-->
<!--        <td>{{ item.value }}</td>-->

      </div>
<!--    </table>-->

  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      default: ()=>[],
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