<template>
    <div class="row mt-4">
      <div class="col-9">
       {{ employeeContent }}
      </div>
    </div>  
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(["employees"]),
    employeeContent(){
      const slug = this.$route.params.slug ? this.$route.params.slug: "home"
      const employee = this.employees.find((employee) => employee.slug === slug);
      if(employee){
        return employee.content;
      }else{
        return "__"
      }
    }
  }
}
</script>
<style scoped>
#app{
  background-color: silver;
  text-align: center;
}
</style>