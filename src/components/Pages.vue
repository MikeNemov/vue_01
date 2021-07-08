<template>
  <button @click="setPage(page)">
    {{ page }}
  </button>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "Pages",
  props: {
    page: {
      type: Number
    }
  },

  methods: {
    ...mapMutations(['setPage']),
  },

}
</script>

<style scoped>

</style>