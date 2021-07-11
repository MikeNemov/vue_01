<template>
  <div class="wrapper">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <button class="addCost" @click="isOpen = !isOpen" >Add +</button>
<!--      <div>Total Sum  =  {{getFPV}} </div>-->
      <AddPaymentForm v-show="isOpen" @addNewPayment="addNewPaymentItem" :category-list="categoryList"/>
      <PaymentDisplay :items="paymentsList"/>
      <Pagination/>
    </main>
  </div>
</template>

<script>
import  PaymentDisplay from './components/PaymentDisplay'
import  AddPaymentForm from './components/AddPaymentForm'
import Pagination from "./components/Pagination";
import {mapGetters, mapMutations,mapActions} from 'vuex'

export default {

  components: {
    PaymentDisplay,
    AddPaymentForm,
    Pagination,
  },

  data () {
    return {
      isOpen: false,
    }
  },

  computed:{
    ...mapGetters([
      // 'getFullPaymentValue',
      'getCategoryList',
    ]),
    // getFPV(){
    //   return this.getFullPaymentValue
    // },
    paymentsList(){
      return this.$store.getters.getPaymentsList
    },

    categoryList(){
      return this.$store.getters.getCategoryList
    },

  },

  methods: {
    ...mapMutations([
      'setPaymentsListData',
      'addDataToPaymentsList'
    ]),
    ...mapActions([
      'loadCategories',
      'fetchStart'
    ]),

    addNewPaymentItem(value){
      this.addDataToPaymentsList(value)
    },

    close() {
      this.isOpen = false;
    },
    open() {
      this.isOpen = true;
    },

  },


  created() {
    if(!this.fetchStart.length) {
      this.fetchStart()
    }
    this.$store.dispatch('loadCategories')
  },
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 12px;
}
.addCost{
  height: 30px;
  width: 300px;
  margin-bottom: 12px;
  color: white;
  background-color: indianred;
  border-style: none;
  &:hover{
    background-color: #cd5c;
  }
}

</style>
