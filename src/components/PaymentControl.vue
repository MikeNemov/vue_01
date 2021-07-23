<template>
  <v-container>
    <v-btn  type="button" @click="openEdit" v-if="!editOpen">Edit</v-btn>
    <v-form v-if="editOpen" class="changes" outlined>
      <v-text-field v-model="changeDate" />
      <v-select v-model="changeCategory" :items="$store.getters.getCategoryList"
                >
      </v-select>
      <v-text-field type="text" v-model="changeValue"/>
      <v-btn @click="editPayment();openEdit()">Save</v-btn>
    </v-form>
    <v-btn type="button" @click="deletePayment">Delete</v-btn>
  </v-container>
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