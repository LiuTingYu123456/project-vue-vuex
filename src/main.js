// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'// 引入vuex
import App from './App'
import '../static/css/style.css' // 引入公共样式

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    result: '',
    enter: ''
  },
  mutations: {
    increment (state) {
      state.count++
    },
    calculate (state, value) {
      if (value === '=') {
        state.result = eval(state.enter)
        state.enter += value
      } else if (value === 'clear') {
        state.result = state.enter = ''
      } else {
        state.enter += value
      }
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
