<template>
  <div class="wrapper">
    <input placeholder="Value" type="number" v-model.number="value"/>
    <input placeholder="Category" type="text" v-model.trim="category"/>
    <input placeholder="Date" type="text" v-model.trim="date"/>
    <button  @click="onSaveClick">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      value: '',
      category:'',
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
  },

  methods: {
    onSaveClick(){
    const data = {
        value: +this.value,
        category:this.category,
        date:this.date || this.getCurrentDate,
      }
      this.$emit("addNewPayment",data)
    },
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
button {
  height: 30px;
}

</style>