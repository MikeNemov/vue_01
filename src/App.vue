<template>
  <div class="wrapper">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <button class="addCost" @click="isOpen = !isOpen" >Add +</button>
      <AddPaymentForm v-show="isOpen" @addNewPayment="addNewPaymentItem"/>
      <PaymentDisplay :items="paymentsList"/>
    </main>
  </div>
</template>

<script>
import  PaymentDisplay from './components/PaymentDisplay'
import  AddPaymentForm from './components/AddPaymentForm'

export default {
  components: {
    PaymentDisplay,
    AddPaymentForm,
  },

  data () {
    return {
      paymentsList: [],
      isOpen: false,
    }
  },

  methods: {
    close() {
      this.isOpen = false;
    },
    open() {
      this.isOpen = true;
    },
    fetchData() {
      return[
          {
            date: '28.03.2020',
            category: 'Food',
            value: 169,
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360,
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 532,
          },
      ]
    },
    addNewPaymentItem(data){
      this.paymentsList = [...this.paymentsList,data]
    }

  },

  created() {
    this.paymentsList = this.fetchData()
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
