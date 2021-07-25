<template>

</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
  name: "Pages",
  props: {
    page: {
      type: Number
    }
  },


  methods: {
    ...mapMutations(['setPage']),

    ...mapActions(['fetchData']),

    setViewPageNumber(page){
      this.setPage(page)
      this.fetchData(page)
    },
  },





}
</script>

<style scoped>

</style>