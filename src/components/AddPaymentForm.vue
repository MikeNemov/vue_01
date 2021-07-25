<template>
  <v-container>
    <v-text-field  label="Value"
                  filled
                  placeholder="Value" type="number" v-model.number="value"/>
    <v-select filled v-model="category" :items="categories">
    </v-select>
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="date"
            label="Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
          v-model="date"
          no-title
          scrollable
      >
        <v-spacer></v-spacer>
        <v-btn
            text
            color="primary"
            @click="menu = false"
        >
          Cancel
        </v-btn>
        <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
    <v-btn  @click="onSaveClick">Save</v-btn>
  </v-container>
</template>

<script>

import {mapMutations, mapGetters} from 'vuex'
export default {
  name: "AddPaymentForm",
  props:['categoryList'],

  data() {
    return{
      menu: false,
      value: '',
      category: 'Food',
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
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
      const {value, category, date} = this
      const data = {
        date,
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

    this.date = this.date.getCurrentDate()

  },

  mounted() {
  }
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