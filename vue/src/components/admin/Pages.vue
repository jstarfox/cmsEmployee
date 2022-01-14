<template>
    <div >
        <div >
            <router-link class="btn btn-secondary" to="/admin/pages/add"> Add Page </router-link>
            <table class="table">
              <thead><tr><th>Name</th>
                <th>Slug</th>
                <th>Actions</th></tr></thead>
            <tbody>
              <tr v-for="(page, i) in pages" :key="i">
                <td class="align-middle"> {{ page.name }} </td>
                <td class="align-middle"> {{ page.slug }}</td>
                <td class="align-rights"> 
                  <button class="btn btn-sm btn-secondary mx-2" @click="handleEdit(page)"> Edit </button>
                  <button class="btn btn-sm btn-danger mx-2" @click="deletePage(page)"> Delete </button>
                </td>

                </tr>
            </tbody>

              
            </table>
        </div>

    </div>
    <!-- <div>{{ pageContent }}</div> -->
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(["pages"])
  },
  methods: {
    ...mapActions(["deletePage"]),
    handleEdit(page){
      this.$router.push(`/admin/pages/edit/${page._id}`)
    }
  }
};
</script>