<template>

  <table class="wrapper">
      <PaymentInfo v-for="item in $store.getters.getPaymentsList[`page${$store.getters.getPage}`]"
                   :key='item.id'
                   :item="item">
      </PaymentInfo>

  </table>
</template>

<script>
export default {
  name: "PaymentDisplay",
  components: {
    PaymentInfo: ()=> import('./PaymentInfo')
  },


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
  table-layout: fixed

}
</style>