<template>

  <div class="wrapper">
<!--    <table class="items"><tr>-->
<!--      <th>No</th>-->
<!--      <th>Date</th>-->
<!--      <th>Category</th>-->
<!--      <th>Value</th>-->
<!--    </tr>-->
      <PaymentInfo v-for="item in $store.getters.getPaymentsList[`page${$store.getters.getPage}`]"
                   :key='item.id'
                   :item="item">
      </PaymentInfo>
<!--    </table>-->

  </div>
</template>

<script>
import PaymentInfo from "./PaymentInfo";
export default {
  name: "PaymentDisplay",
  components: {PaymentInfo},


  methods:{}

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