<template>
  <div id="app" class="font-sans text-gray-800">
    <NavBar/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Footer from '@/components/shared/Footer.vue'
import NavBar from '@/components/shared/NavBar.vue'

@Component({
  components: {
    Footer, NavBar
  }
})
export default class App extends Vue {}

</script>
