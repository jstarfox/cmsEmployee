import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




//import boostrap and font-awesome
import "bootstrap/dist/css/bootstrap.min.css"
//import "font-awesome/css/bootstrap.min.css"


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
