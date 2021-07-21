<template>
  <div class="wrapper">
    <header>

      <div class="title">My personal costs</div>
      <router-link  to="/dashboard"> Dashboard </router-link> /
      <router-link  to="/about"> About </router-link>
    </header>
    <main>
      <transition name="fade">
        <ModalWindow
            class="modal"
            v-if="modalName"
            :settings="settings"/>
      </transition>
      <router-view />
    </main>
  </div>
</template>



<script>
import ModalWindow from "./components/ModalWindow";
export default {
  name: 'App',
  components: {
    ModalWindow
  },

  data() {
    return {
      visibleAddPayment: false,
      modalName: '',
      settings:{}
    }
  },
  methods: {

    onShow(settings) {
      this.modalName = this.settings.name
      this.settings = settings
    },
    onHide() {
      this.modalName = ''
      this.settings = {}
    }

  },

  created() {
    this.$store.dispatch('loadCategories')
  },

  mounted() {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
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
