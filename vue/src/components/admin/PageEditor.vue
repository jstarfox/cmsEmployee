<template>
    <div >
        <div >
          <h2>{{ editMode ? "Edit Page" : "Add Page"}} </h2>
          <div class="form-group"><label> Name </label><input type="text" class="form-control" v-model="page.name"></div>
          <div class="form-group"><label> Slug </label><input type="text" class="form-control" v-model="page.slug"></div>
          <div class="form-group"><label> Content </label><input type="text" class="form-control" v-model="page.content"></div>
         <!-- <div class="text-center"><button -->
          <div ><button class="btn btn-primary" @click="handleBack">Back</button></div>
          <button class = "btn btn-primary" @click="handlePage"> {{ editMode ? "Edit" : "Add"}} </button>
          </div>
        </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      page: {
        name: null,
        slug: null,
        content: null
      }
    }
  },
  computed: {
    editMode(){
      return this.$route.params["op"] == "edit";
    }
  },

  methods: {
    ...mapActions(["addPage", "editPage"]),
    handlePage() {
      if(this.editMode) {
        this.editPage(this.page)
      }
      else {
        this.addPage(this.page)
        console.log(this.name.page)
      }
      this.$router.push("/admin/pages")
    },
    handleBack(){
            this.$router.push("/admin/pages")
    }
  },
  created(){
    if(this.editMode){
      Object.assign(this.page, this.$store.getters.pageById(this.$route.params["id"]))
    }
  }
};
</script>