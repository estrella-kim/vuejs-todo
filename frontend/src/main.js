// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { store } from './store/store'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>',
  beforeCreate () {
    console.log('beforeCrate', this.$el)
  },
  created() {
    console.log('created', this.$el)
  },
  beforeMount() {
    console.log('beforeMount', this.$el)
  },
  mounted () {
    console.log('mounted', this.$el)
  }
})
