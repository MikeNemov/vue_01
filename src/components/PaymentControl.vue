<template>
  <div>
    <button  type="button" @click="openEdit" v-if="!editOpen">Edit</button>
    <div v-if="editOpen" class="changes">
      <input type="text" v-model="changeDate">
      <select type="text" v-model="changeCategory">
        <option v-for="(categories,idx) in $store.getters.getCategoryList" :key="idx">{{ categories }}</option>
      </select>
      <input type="text" v-model="changeValue">
      <button type="button" @click="editPayment();openEdit()">Save</button>
    </div>
    <button type="button" @click="deletePayment">Delete</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editOpen: false,
      changeCategory: '',
      changeDate: '',
      changeValue: ''
    }
  },
  methods: {
    ...mapMutations([
      'setEditPayment',
        'setDeletePayment'
    ]),
    openEdit() {

      this.changeCategory = this.item.category
      this.changeDate = this.item.date
      this.changeValue = this.item.value
      this.editOpen = !this.editOpen
    },
    editPayment() {
      let data = {
        id: this.item.id,
        date: this.changeDate,
        category: this.changeCategory,
        value: this.changeValue}
      this.setEditPayment(data)
    },
    deletePayment(){
      this.setDeletePayment({id:this.item.id})
    },
    categories() {
      if (this.categoryList?.length){
        return this.categoryList
      }
      return this.$store.getters.getCategoryList
    },

  },

}
</script>

<style scoped>
.changes {
  display: flex;
  flex-direction: column;

}
button{
  margin: 12px;

}

</style>