import Vue from 'nativescript-vue'

import Home from './components/Calculator'

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
