import Vue from 'vue'
import TodoList from './todolist'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { TodoList },
  template: '<TodoList/>'
})
