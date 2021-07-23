<template>
  <div>
    <v-row>
      <v-col class="text-h4 pt-5 pb-6 font-weight-bold text-uppercase">My personal costs</v-col>
      <v-col>
        <v-btn
            color="pink"
            dark
            absolute
            right
            @click="openAddPayment"
        >
          Add new <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-chip-group>
      <v-chip class="mr-2" outlined @click="addPayment('Food',200)">
        <v-icon>mdi-plus</v-icon> Food 200
      </v-chip>
      <v-chip class="mr-2" outlined @click="addPayment('Navigation',50)">
        <v-icon>mdi-plus</v-icon> Navigation 50
      </v-chip>
      <v-chip outlined @click="addPayment('Entertainment',2000)">
        <v-icon>mdi-plus</v-icon> Entertainment 2000
      </v-chip>
    </v-chip-group>

    <AddPaymentForm v-show="$store.getters.getAddPaymentVisible" @addNewPayment="addNewPaymentItem" :category-list="categoryList"/>
    <PaymentDisplay :items="paymentsList"/>
    <Pagination/>
  </div>
</template>

<script>

import {mapGetters, mapMutations,mapActions} from 'vuex'

export default {
  name: "PageDashboard",

  components: {
    PaymentDisplay: ()=> import('../components/PaymentDisplay'),
    AddPaymentForm: ()=> import('../components/AddPaymentForm'),
    Pagination: ()=> import('../components/Pagination'),
  },

  data () {
    return {
      visibleAddPayment: false,
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
      'addDataToPaymentsList',
      'setAddPaymentVisible'
    ]),
    ...mapActions([
      'loadCategories',
      'fetchStart'
    ]),



    addPayment(category,value){
      if (this.$store.getters.getAddPaymentVisible === false){
        this.setAddPaymentVisible()}
      this.$router.push(`/add/payment/${category}?value=${value}&time=${new Date().getTime()}`)
    },

    addNewPaymentItem(value){
      this.addDataToPaymentsList(value)
    },

    openAddPayment() {
      this.setAddPaymentVisible()
    },

  },


  created() {
    if(!this.fetchStart.length) {
      this.fetchStart()
    }
    this.$store.dispatch('loadCategories')
  },
  mounted() {
    const links = document.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
        history.pushState({}, '', link.href)
        this.$root.$emit('router-go')
      })
    })

  }
}
</script>

<style scoped>
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