export default {
    install(Vue) {
        if (this.installed === true) {
            return
        }
        this.installed = true

        Vue.prototype.$modal = {
            EventBus: new Vue(),
            show(name, settings) {
                this.EventBus.$emit('show', {name, settings})

            },
            hide() {
                this.EventBus.$emit('hide')

            }
        }
    }

}