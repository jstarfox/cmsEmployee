<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Employee CMS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
         
  <!-- loop and display all pages -->

          
          <li class="nav-item active" v-for="(page, i) in pages" :key="i">
            <router-link class="nav-link" :to="'/' + page.slug"> {{ page.name }} </router-link>
          </li>
        
           <li class="nav-item active">
            <router-link class="nav-link" to="/admin"> Admin </router-link>
          </li>
        </ul>
        
      </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  //export pages obtained in state array.
  computed: {
    ...mapState(["pages"]),
  }
}
</script>