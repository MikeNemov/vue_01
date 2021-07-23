<template>
  <v-container class="flex 0 0">
    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="2">Date</v-col>
      <v-col cols="2">Category</v-col>
      <v-col cols="2">Value</v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row v-for="item in $store.getters.getPaymentsList[`page${$store.getters.getPage}`]"
    :key='item.id'>
    <PaymentInfo :item="item"/>

    </v-row>
  </v-container>



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