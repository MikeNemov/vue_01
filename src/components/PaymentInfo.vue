<template>
  <v-container>
    <v-row>
      <v-col cols="1">{{item.id}}</v-col>
      <v-col cols="2">{{ item.date }}</v-col>
      <v-col cols="2">{{ item.category }}</v-col>
      <v-col cols="2">{{ item.value }}</v-col>
      <v-col cols="1">
        <v-dialog
            width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="red lighten-2"
                dark
                v-bind="attrs"
                v-on="on"
            >
              Edit
            </v-btn>
          </template>
          <v-card>
            <PaymentControl
                :item="item"/>
          </v-card>

        </v-dialog>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>


import PaymentControl from "@/components/PaymentControl";

export default {
  components: {
    PaymentControl
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