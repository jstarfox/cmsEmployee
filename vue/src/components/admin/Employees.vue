<template>
  <div >
      <div >
        <router-link class="btn btn-primary" to="/admin/employees/add"> Add Employee </router-link>
<table class="table">
  <thead>
    <tr>
    <th>id</th>
    <th>Name</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Location</th>
    </tr>
  </thead>
    <tbody>
      <tr v-for="(employee, i) in employees" :key="i">
      <td class="align-middle"> {{ employee.id }}</td>
      <td class="align-middle"> {{ employee.name }}</td>
      <td class="align-middle"> {{ employee.department }}</td>
      <td class="align-middle"> {{ employee.salary }}</td>
      <td class="align-middle"> {{ employee.location }}</td>
      <td class="align-left">
        <button class="btn btn-sm btn-secondary mx-2" @click="handleEdit(employee)">Edit</button>
        <button class="btn btn-sm btn-danger mx-2" @click="deleteEmployee(employee)">Delete</button>
      </td>
      </tr>
    </tbody>
  </table>    
 </div>
</div>
</template>

<script>
//Export the pages obtained in the state array. Loop and display all pages
import { mapActions, mapState } from 'vuex'

export default{
  computed: {
    ...mapState(["employees"]),
  },
  methods: {
    ...mapActions(["deleteEmployee"]),
    handleEdit(employee){
      this.$router.push(`/admin/employees/edit/${employee._id}`)
    }
  }
};
</script>