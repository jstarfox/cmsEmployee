<template>
  <div class="container">
<Header />  
<router-view />
</div>
</template>

<script>
import Header from "./components/Header.vue"
import { mapActions } from "vuex"

export default {
  name: 'App',
  components: {
    Header
  },
 //Define mapActions to dispatch Store Actions in methods

methods: {
  ...mapActions(["setEmployeesAction"]),
  ...mapActions(["setPagesAction"])
  }, //Define mapActions to dispatch Store Actions in methods
    created(){
      this.setEmployeesAction();
      this.setPagesAction();
    }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


