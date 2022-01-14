<template>
    <div class="row mt-4">
      <div class="col-12">
       {{ pageContent }}
      </div>
    </div>
    <!-- <div>{{ pageContent }}</div> -->
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(["pages"]),
    pageContent(){
      const slug = this.$route.params.slug ? this.$route.params.slug: "page"
      const page = this.pages.find((page) => page.slug === slug );
      if(page){
        // console.log(page.content);
        return  page.content;
      } else {
        return "__"
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
  background-color: silver;
  text-align: center;
}
</style>