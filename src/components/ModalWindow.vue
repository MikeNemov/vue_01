<template>
  <div class="modal-box">
    <div class="header">{{ settings.name }}</div>
    <div class="content">
      <component :is="settings.settings.compName" :item="item"/>
    </div>
    <button v-if="settings.name === 'Payment Control'" class="btn-cancel" @click="closeModal">Close window</button>
  </div>
</template>

<script>

export default {
  props: {
    settings: {
      type: Object
    },
    item:{
      type:Object
    }
  },
  name: "ModalWindow",
  components: {
    AddPaymentForm: ()=> import('./AddPaymentForm'),
    PaymentControl: ()=> import('./PaymentControl')
  },
  methods: {
    closeModal(){
      this.$modal.hide()
    }
  },
}
</script>

<style scoped>
.modal-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50vh;
  right: 50vw;
  padding: 24px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 10px 24px -6px #999;
}
.header{
  font-size: 24px;
}
button{
  margin: 12px;
}

</style>