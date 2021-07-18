<template>
  <div class="wrapper">
    <header>

      <div class="title">My personal costs</div>
      <router-link  to="/dashboard"> Dashboard </router-link> /
      <router-link  to="/about"> About </router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>



<script>

export default {
  name: 'App',
  methods: {
  },

  created() {
    this.$store.dispatch('loadCategories')
  },


}

</script>

<style lang="scss" scoped>
.title{
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 12px;
}


</style>
