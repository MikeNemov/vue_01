<template>
  <div class="wrapper">
    <input placeholder="Value" type="number" v-model.number="value"/>
    <select v-model="category">
      <option v-for="(item, idx) in categories" :value="item" :key="idx">
        {{item}}
      </option>
    </select>
    <input placeholder="Date" type="text" v-model.trim="date"/>
    <button  @click="onSaveClick">Save</button>
  </div>
</template>

<script>

import {mapMutations, mapGetters} from 'vuex'
export default {
  name: "AddPaymentForm",
  props:['categoryList'],

  data() {
    return{
      value: '0',
      category: 'Food',
      date:'',
    }
  },

  computed:{

    getCurrentDate() {
    const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },

    categories() {
      if (this.categoryList?.length){
        return this.categoryList
      }
      return this.$store.getters.getCategoryList
    },

    routeName(){
      return this.$route.name
    }
  },

  methods: {
    onSaveClick(){
      const {value, category} = this
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value
      }
      if (this.routeName === 'AddPaymentFromLink') {
        this.$store.commit('addDataToPaymentsList', data)
        this.$router.push({
          name: 'dashboard'
        })
      }
      this.$emit('addNewPayment', data)
    },
    ...mapMutations([
      'addDataToPaymentsList',
      'setPages',
      'setCategories',
      'setAddPaymentVisible'
    ]),
    ...mapGetters([
      'getPages',
      'getPaymentsList'
    ]),
  },

  created() {
    const {query, params} = this.$route
    if(params?.category){
      this.category = params.category
    }
    if(query?.value){
      this.value= Number(query.value)
    }
    console.log(this.$route)
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
input {
  height: 30px;
  margin-bottom: 12px;
}
select {
  height: 30px;
  margin-bottom: 12px;
}
button {
  height: 30px;
}

</style>