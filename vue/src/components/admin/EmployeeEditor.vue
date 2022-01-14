<template>
  <div >
      <div >
        <h2>{{ editMode ? "Edit Employee" : "Add Employee" }}</h2>
        <div class="form-group"><label> id </label> <input type="text" class="form-control" v-model="employee.id"></div>
        <div class="form-group"><label> Name </label> <input type="text" class="form-control" v-model="employee.name"></div>
        <div class="form-group"><label> Department </label> <input type="text" class="form-control" v-model="employee.department"></div>
        <div class="form-group"><label> Salary </label> <input type="text" class="form-control" v-model="employee.salary"></div>
        <div class="form-group"><label> Location </label> <input type="text" class="form-control" v-model="employee.location"></div>

        <div class="text-center"><button class="btn btn-secondary" @click="handleBack">Back</button></div>
        <button class="btn btn-primary" @click="handleEmployee">{{ editMode ? "Edit" : "Add" }}</button>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default{
  data(){
    return{
    employee: {
      id: null,
      name:null,
      department: null,
      salary: null,
      location: null
    }
    }
  },
  computed: {
    editMode(){
    return this.$route.params["op"] == "edit";
    }
  },
  methods: {
    ...mapActions(["addEmployee", "editEmployee"]),
    handleEmployee(){
        if(this.editMode){
          this.editEmployee(this.employee)
                }
        else{
          this.addEmployee(this.employee)
          console.log(this.name.employee)
        }
        this.$router.push("/admin/employees")
    },
    handleBack(){
              this.$router.push("/admin/employees")

    }
  },
  created(){
    if(this.editMode){
      Object.assign(this.employee, this.$store.getters.employeeByid(this.$route.params["id"]))//getter
    }
  }
};
</script>