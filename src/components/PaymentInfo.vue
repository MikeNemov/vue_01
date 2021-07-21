<template>
  <div class="payment">
    <table>
      <tr>
        <td>{{item.id}}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
        <td>
          <button class="showModal" @click="openControl">Edit</button>
        </td>
        <transition name="fade">
          <ModalWindow
              class="modal-control"
              v-if="modalName"
              :settings="settings"
              :item="item"/>
        </transition>
      </tr>
    </table>

  </div>
</template>

<script>


export default {
  components: {
    ModalWindow: () => import('./ModalWindow')
  },
  props: {
    item: {
      type: Object,
      required: true
    },
  },

  data() {
    return {
      modalName: '',
      settings: {}
    }
  },
  methods: {
    openControl() {
      this.$modal.hide()
      this.$modal.show('Payment Control', {header: 'Payment Control', compName: 'PaymentControl'})
      this.modalName = 'Payment Control'
    },
    onShow(settings) {
      this.modalName = this.settings.name
      this.settings = settings
    },
    onHide() {
      this.modalName = ''
      this.settings = {}
    }
  },
  mounted() {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
}
</script>

<style scoped>


.payment {
  height: 50px;
  align-items: center;
  justify-content: space-around;
}
.showModal{
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
}
table { table-layout: fixed; }
td { width: 33%; }

</style>