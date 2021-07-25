<template>
  <v-pagination
      v-model="page"
      :length="$store.getters.getPages"
      @input="getData"
  ></v-pagination>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Pagination",
  data() {
    return {
      page: 1
    }
  },
  components: {},
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    getData() {
      this.fetchData(this.page)
    }
  },
}
</script>

<style scoped>
</style>